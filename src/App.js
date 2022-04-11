import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db
      .collection('products')
      // .where('price', '>=', 90)
      // .where('title', '==', 'car')
      // .orderBy('price', 'desc')
      .where('regions', 'in',[['west_coast', 'east_coast']])
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id;
          return data;
        })
        this.setState({
          products,
          loading: false
        })
      })
      
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty:products[index].qty+1
    })
    .then(() =>{
      console.log('Updated successfully +');
    })
    .catch((error)=>{
      console.log('error',error);
    })

  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) return;

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty:products[index].qty-1
    })
    .then(() =>{
      console.log('Updated successfully -');
    })
    .catch((error)=>{
      console.log('error',error);
    })
  }

  handelDeleteProduct = (id) => {
    const { products } = this.state;
    
    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(() =>{
      console.log('deleted successfully');
    })
    .catch((error)=>{
      console.log('error',error);
    })

  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return '';
    })
    return cartTotal;
  }

  addProduct = () => {
    this.db
      .collection('products')
      .add({
        img:'',
        price:800,
        qty:10,
        title:'bj',
        regions: ["jingjinji", "hebei"]
      })
      .then((docRef)=>{
        console.log('product has been added', docRef);
      })
      .catch((error)=>{
        console.log('error:', error);
      })
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ margin:10, padding:10, fontSize:16 }}>Add product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handelDeleteProduct}
        />
        {loading && <h3>loading product...</h3>}
        <div style={{ padding: 10, fontSize: 20 }}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }

}

export default App;

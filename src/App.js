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
    products[index].qty += 1;

    this.setState({
      products
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) return;

    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  handelDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
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
        price:800000,
        qty:500,
        title:'car'
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

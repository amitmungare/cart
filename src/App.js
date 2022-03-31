import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

    constructor(){
      super();
      this.state={
          products: [
              {   id:1,
                  price:999,
                  title:'i phone',
                  qty:10,
                  img:''
              },
              {   id:2,
                  price:99,
                  title:'real me phone',
                  qty:12,
                  img:''
              },
              {   id:3,
                  price:9,
                  title:'simple phone',
                  qty:111,
                  img:''
              }
          ]
      }
      // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);
      products[index].qty +=1;

      this.setState({
          products
      })
  }

  handleDecreaseQuantity = (product) => {
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty ===0)return;

      products[index].qty -=1;

      this.setState({
          products
      })
  }

  handelDeleteProduct = (id) => {
      const {products} = this.state;
      const items = products.filter((item) => item.id !== id);

      this.setState({
          products:items
      })
  }

  getCartCount = () => {
    const {products} = this.state;
    let count = 0;

    products.forEach((product) => {
      count+=product.qty;
    })

    return count;
  }

  getCartTotal=()=>{
      const {products} = this.state; 
      
      let cartTotal = 0;

      products.map((product) => {
        cartTotal =cartTotal + product.qty*product.price;
      })
      return cartTotal;
  }

 render () {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handelDeleteProduct}
        />
        <div style={ {padding: 10, fontSize: 20} }>TOTAL: {this.getCartTotal()} </div>
      </div>
      
      
    );
  }
  
}

export default App;

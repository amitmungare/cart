import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

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
                },
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    handleIncreaseQuantity = (products) => {
        
    }

    render() {

        const {products} =  this.state;

        return(

            <div class="cart">
                {products.map((product) => {
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id} 
                    />)
                })}
            </div>
        );
    }
    
}

export default Cart;
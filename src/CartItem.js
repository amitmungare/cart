import React from 'react';

const CartItem = (props) =>{

    const { 
         price,
         title,
         qty
    } =props.product;

    const {
        product,
        onIncreaseQuantity, 
        onDecreaseQuantity, 
        onDeleteProduct
    }= props;

        return (

            <div className="cart-item">

                <div className="left-block">
                    <img style={styless.image} />
                </div>

                <div className="right-block">

                    <div style={ {fontSize:25, color:'blue'}}>{title}</div>
                    <div style={ {color:'#777'}}>Rs: {price}</div>
                    <div style={ {color:'#777'}}>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                            onClick={()=> onIncreaseQuantity(product)}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/07/62/09/240_F_107620985_YEVa8uBObxyKA2DkTSiDL6llE0m0Uzqt.jpg"
                            onClick={()=> onDecreaseQuantity(product)}
                        />

                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                            onClick={()=> onDeleteProduct(product.id)}
                        />

                    </div>
                </div>

            </div>
        );    
    
}

const styless ={
    image: {
        height:100,
        weight: 100,
        borderRadius: 4,
        backgroundColor:'red'
    }
}

export default CartItem;
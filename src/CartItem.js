import React from 'react';

class CartItem extends React.Component {

    increaseQuantity = () => {

        // this.setState({
        //     qty:this.state.qty + 1
        // })
        
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        })
    }

    decreaseQuality = () => {

        const {qty} =this.state;

        if(qty==0){
            return;
        }
        
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        })
    }

    render() {

        console.log(this.props);
        const { price, title, qty } = this.props.product;

        return (

            <div className="cart-item">

                <div className="left-block">
                    <img style={styless.image} />
                </div>

                <div className="right-block">

                    <div style={ {fontSize:25, color:'blue'}}>{price}</div>
                    <div style={ {color:'#777'}}>Rs: {title}</div>
                    <div style={ {color:'#777'}}>Qty: {qty}</div>

                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                            onClick={this.increaseQuantity}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/07/62/09/240_F_107620985_YEVa8uBObxyKA2DkTSiDL6llE0m0Uzqt.jpg"
                            onClick={this.decreaseQuality}
                        />

                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"
                            onClick={this.handleClick}
                        />

                    </div>
                </div>

            </div>
        );
    }
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
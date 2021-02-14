import React from 'react';
class CartItem extends React.Component{
   constructor(){
       super();
    this.state={
        price:999,
        title:'Mobile Phone',
        qty:1,
        img:''
    }
    //this.increaseQuantity=this.increaseQuantity.bind(this)
   }
   increaseQuantity=()=>{
       console.log('this', this.state);
   }
    render(){
        const{price,title,qty}=this.state;
       return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*button*/}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://as1.ftcdn.net/jpg/02/51/03/82/500_F_251038282_CLb3d8tk99bGoU9ILEYS8vY215fgRmGT.jpg"
                        onClick={this.increaseQuantity}
                        />
                        
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        />
                        
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/03/73/50/09/500_F_373500918_7vISJB85YXvvu7SgnpktP752LWRrLzyI.jpg"
                        /> 
                    </div>
                </div>
            </div>
       );
   }
}
const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc',
    }
}
export default CartItem;
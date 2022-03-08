
import {Context} from '../Context/context';
import {useContext} from 'react';
import {useState} from "react";
import { Modal, Button } from 'antd';
import "./style.css"

export const Cartpage=()=>{
    const {cart,deleteData,saveItems,quantity,setCart}=useContext(Context);
    const [user,setUser]=useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChange=(e)=>{
        let {name,value}=e.target;
        console.log(name,value);
        setUser({...user,[name]:value})
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if(user.name===undefined && user.email===undefined && user.address===undefined && user.number===undefined){
            alert("Please enter all details");
            
        }else{

            setIsModalVisible(false);
            setCart([]);
            setTimeout(()=>{
                alert("Thanks for purchasing your order will be delivere soon😊🥳🥳");
            },2000);
        }

    };


    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return cart.length>0?<div  className="cart">
        
        <div className="cartItems">
            <h3>Cart Items</h3>
            {
                cart.map((e)=>
                    <div  key={e.id}>

                        <div>
                        <img style={{width:"50px",height:"100px"}} src={e.image} alt=""  />
                        </div>

                        <div>
                        <div>
                            {e.wine}
                        </div>

                        <div>
                            quantity:{e.quantity}
                        </div>
                        <div style={{display: 'flex'}}>
                        <button onClick={()=>saveItems(e)}>Add to wish list</button>
                        &nbsp;
                        <button onClick={()=>deleteData(e)}>Delete</button>
                        </div>
                        </div>
                    </div>
                )
            }
        </div>

        <div >
            <div>Total quantity:{quantity}</div>
          
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                
                    <input className="inputfield"  type="text" name="name"  onChange={handleChange} placeholder="Enter your name" />
                    <br />
                    <br />
                    <input className="inputfield" type="email" name="email" onChange={handleChange} placeholder="Enter your email" />
                    <br />
                    <br />
                    <input className="inputfield" type="text" name="address" onChange={handleChange} placeholder="Enter your address" />
                    <br />
                    <br />
                    <input className="inputfield" type="number" name="number" onChange={handleChange} placeholder="Enter your phone number" />

                    
            </Modal>
            <Button type="primary" onClick={showModal}>Checkout</Button>
        </div>

        

    </div>:
    <div className="cartgif">
        <img src="https://www.kindpng.com/picc/m/174-1749396_empty-cart-your-cart-is-empty-hd-png.png" alt="" />
    </div>
}
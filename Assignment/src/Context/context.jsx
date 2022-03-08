import { createContext ,useState} from "react";

export const Context=createContext();

export const ContextProvider=({children})=>{
    const [cart,setCart]=useState([]);
    const [save,setSave]=useState([]);
    const [allData,setAllData]=useState([]);
    const [quantity,setQuantity]=useState(0);

    const saveItems=(data)=>{
        setSave([...save,data]);
        deleteData(data);
    }

    const deleteData=(e)=>{

        let count=0;

        let a=cart.filter(item=>
            item.winery!==e.winery
        )
        
        for(let i=0; i<a.length; i++){
            count=count+a[i].quantity;
        }
        setCart(a);
        setQuantity(count);

    }

    const dltItem=(e)=>{
        let a=save.filter((item)=>
            item.id!==e.id
        )
        setSave(a);
    }

    const addCart=(data)=>{
        let flag=false;
        for(let i=0; i<cart.length;i++){
            if(cart[i].id===data.id){
                flag=true;
                break;
            }
        }
        console.log(flag);
        if(flag===true){
            data.quantity=+data.quantity+1;
        }else{
            data.quantity=1;
            setCart([...cart,data])
        }
        setQuantity((prev)=>prev+1)
    }

    return <Context.Provider value={{addCart,cart,deleteData,saveItems,save,dltItem,setAllData,allData,quantity,setCart}}>{children}</Context.Provider>

}
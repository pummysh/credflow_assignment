import {Link} from "react-router-dom";
import {useState} from "react";
import {useContext} from "react";
import {Context} from "../Context/context";
import {AiFillHome,AiFillHeart} from "react-icons/ai";
import {ImCart} from "react-icons/im"
import "./style.css"
import { Input } from 'antd';
import { SearchOutlined  } from '@ant-design/icons';

export const Navbar=()=>{
    const {allData}=useContext(Context);
    const [search,setSearch] = useState("");
    const [res,setres]=useState([])

    const handleChange=(e)=>{
        
        if(e.target.value===""){
            setSearch("");
            setres([]);
        }else{
            setSearch(e.target.value);
            let searchData=allData.filter((e)=>(e.wine).includes(search));
            setres(searchData);
        }
       
    }

    return <div className="nav">

     

        <div className="nav-left-box">
        <div >
            <img style={{width:'100%'}} src="https://cdn-icons-png.flaticon.com/512/2553/2553705.png" alt="" />
            
        </div>
        </div>

        <div className="nav-right">
            <div className="nav-right-box">
                <div >
                <Input size="large" onChange={handleChange} placeholder="large size" prefix={<SearchOutlined />} />
                <div className="inputBox" style={{display:res.length>0?"block":"none"}}>
                    {   res?
                        res.map((e)=>
                            <p key={e.id}>
                                <Link params={{data:e}} to="">{e.wine}</Link>    
                            </p>
                        ):null
                    }    
                </div>
                </div>
                <Link className="link" to="/">
                    <AiFillHome/>
                </Link>
                <Link className="link" to="/cart">
                <ImCart/>
                </Link>
                <Link className="link" to="/save">
                <AiFillHeart/>
                </Link>
            </div>
            
        </div>
    </div>

}
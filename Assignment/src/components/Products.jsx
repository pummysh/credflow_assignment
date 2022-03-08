import {useEffect,useState} from "react";
import {Product} from "./Product";
import "./style.css"
import {useContext} from "react";
import {Context} from "../Context/context";
// import { Pagination } from 'antd';
// import {Pagination} from '@material-ui/core/Pagination';




export const Products =()=>{

    const {allData,setAllData}=useContext(Context);

    const [data,setData]=useState([]);
    const [change,setChange]=useState([]);
    const perPage=50;
    const [total,setTotal]=useState();
    const [currentPage,setCurrentPage]=useState(1);
    const offset = currentPage * perPage;

    useEffect(()=>{
        const baseURL = 'https://api.sampleapis.com/wines/reds';
        fetch(baseURL)
        .then(resp => resp.json())
        .then(data =>{ 
            setAllData(data)
            setTotal(Math.floor(data.length/perPage))
            const slice=data.slice(offset, offset+perPage);
            setData(slice);
            setChange(slice);
        });
    
    },[currentPage])


    const paginate=(num)=>{
        setCurrentPage(num);
    }

    const filterData=(e)=>{
        let num=+e.target.value;

        if(num===-500){
            let a=change.filter((e)=>
                e.rating.reviews.split(" ").map(Number)[0]<500
            )
            console.log(a)
            setData(a);
        }else{
            let a=change.filter((e)=>
                e.rating.reviews.split(" ").map(Number)[0]>=500
            )
            console.log(a)
            setData(a);
        }
    }

    return <div>

        <div className="backImg"></div>
        <h1 style={{color: '#7D0633'}}>Welcome to Wine.com</h1>
        <select className="filterbox"  onChange={filterData}>
            <option value="filter by reviews">filter by reviews</option>
            <option value={-500}> Reviews below 500 </option>
            <option value={+500}>Reviews above 500</option>     
        </select>
        <div>
            <button disabled={currentPage===0} onClick={()=>setCurrentPage(prev=>prev-1)}>prev</button>
            <span>{currentPage}</span>
            <button disabled={currentPage===total} onClick={()=>setCurrentPage(prev=>prev+1)}>next</button>
        </div>

        <div className="container">
            {
                data.length>0 ?
                data.map((e)=>
                    <Product key={e.id} data={e}/>
                ) : "No items available"
            }
        </div>

        <br />
        <div>
            <button disabled={currentPage===0} onClick={()=>setCurrentPage(prev=>prev-1)}>prev</button>
            <span>{currentPage}</span>
            <button disabled={currentPage===total} onClick={()=>setCurrentPage(prev=>prev+1)}>next</button>
        </div>



    </div>
}
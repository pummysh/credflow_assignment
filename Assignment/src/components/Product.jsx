import {Context} from "../Context/context";

import {useContext} from "react";

export const Product = ({data})=>{

    const {addCart}=useContext(Context);


    return <div>
        <img style={{width:"50px",height:"100px"}} src={data.image} alt="" />
        <div>
            {data.wine}
        </div>
        <div>
        Ratings : {data.rating.average}
        </div>
        <div>
        Reviews:{data.rating.reviews}
        </div>
        <button onClick={()=>addCart(data)}>Add to cart</button>
    </div>
}

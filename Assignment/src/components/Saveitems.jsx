import {Context} from '../Context/context';

import {useContext} from "react";

export const Saveitems=()=>{

    const {save,dltItem,addCart}=useContext(Context);

    console.log(save);

    const container={
        display:"grid",
        gridTemplateColumns: "repeat(4,22%)",
        gap:"0.1%"
    }

    return <div style={container}>
        {
            save.map((e)=>
            <div key={e.id}>
                <img style={{width:"50px",height:"100px"}} src={e.image} alt=""  />
                <div>
                    {e.winery}
                </div>
                <div>
                rating:{e.rating.average}
                </div>
                <div>
                reviews:{e.rating.reviews}
                </div>
                <div>
                    location:{e.location}
                </div>
                <button onClick={()=>addCart(e)}>Add to cart</button>
                <button onClick={()=>dltItem(e)}>Delete</button>
            </div>

            )
        }
    </div>

}
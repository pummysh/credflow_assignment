import {Routes,Route} from "react-router-dom";
import {Cartpage } from "../components/Cart";
import { Checkout } from "../components/checkout";
import { ProductDisplay } from "../components/ProductDisplay";
import { Products } from "../components/Products";
import { Saveitems } from "../components/Saveitems";

export const Myroutes=()=>{
    return <div>
        <Routes>
            <Route path="/cart" element={<Cartpage/>}></Route>
            <Route path="/" element={<Products/>}></Route>
            <Route path="/save" element={<Saveitems/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/display" element={<ProductDisplay/>}></Route>
        </Routes>
    </div>
}
import { PRODUCTS } from "../../products.js";
import Product from "./product";
import './shop.css'


const Shop = () => {
    return (
        <div className="shop">
            <div>
                <h1>Zafar's Shop</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    );
}

export default Shop;
import Image from "next/image"
import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard"


const ProductList = ({productList}) => {
  return (
    <div className = {styles.container}>
        <h1 className = {styles.title}>Americas #1 Used Halloween Store</h1>
        <p className = {styles.desc}>
            The Best Prices of the Season
        </p>

        <div id = "products" className = {styles.prodWrapper}>
          
          {productList.map((product)=>(
            <ProductCard key = {product.id} product = {product}/>

          ))};
          
            
            

        </div>

    </div>
  );
};

export default ProductList;
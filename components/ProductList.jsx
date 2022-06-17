import Image from "next/image"
import styles from "../styles/ProductList.module.css"
import ProductCard from "./ProductCard"


const ProductList = () => {
  return (
    <div className = {styles.container}>
        <h1 className = {styles.title}>America's #1 Used Halloween Store</h1>
        <p classNAme = {styles.desc}>
            The Best Prices of the Season
        </p>

        <div className = {styles.wrapper}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>

    </div>
  )
}

export default ProductList
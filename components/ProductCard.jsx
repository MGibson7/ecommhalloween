import Image from "next/image"
import styles from "../styles/ProductCard.module.css"

function ProductCard() {
  return (
    <div className = {styles.container}>
      <Image src = "/img/inferno.webp" alt = "" width = "500" height = "500"/>
      <h1 className={styles.title}>12 Foot Inferno Pumpkin Skeleton</h1>
      <span className = {styles.price}>$299.99</span>
      <p className = {styles.desc}>Gently used 12 foot inferno pumpkin skeleton originally from Home Depot</p>
    </div>
  )
}

export default ProductCard
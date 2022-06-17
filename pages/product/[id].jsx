import Image from "next/image"
import styles from "../../styles/Product.module.css"
import { useState } from "react"

const Product = () => {
    const[size, setSize] = useState(0);
    const[ship, setShip] = useState("Free Ground");
    const hallItem = {
        id: 1,
        img: "/img/inferno.webp",
        name: "Inferno Pumpkin Skeleton",
        price: [299.99, 350.19, 450.21],
        desc: "Gently used 12 foot inferno pumpkin skeleton originally from Home Depot",
        ship: ["Free Ground", "Express", "2 Day"]
    };
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src = {hallItem.img} alt = "" layout="fill" objectFit="contain"/>
            </div>
            
        </div>

        <div className={styles.right}>
            <h1 className={styles.title}>{hallItem.name}</h1>
            <span className = {styles.price}>${hallItem.price[size]}</span>
            <p className = {styles.desc}>{hallItem.desc}</p>
            <h3>Choose Your Shipping</h3>
            <h3>Current Selection: {hallItem.ship[size]}</h3>
            <div className={styles.sizes}>
            <div className = {styles.size} onClick = {()=> setSize(0)}>
                <span className = {styles.number} >Free Ground</span>
            </div>
            <div className = {styles.size} onClick = {()=> setSize(1)}>
                <span className = {styles.number}>Express</span>
            </div>
            <div className = {styles.size} onClick = {()=> setSize(2)}>
                <span className = {styles.number}>2 Day</span>
            </div>

            </div>
            
        </div>

    </div>
  )
}

export default Product
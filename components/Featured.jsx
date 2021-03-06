import Image from "next/image"
import styles from "../styles/Featured.module.css"
import { useState } from "react";



const Featured = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/skel.webp",
        "/img/lilnest.jpeg",
        "/img/inflatables.jpg",
    ];

    const handleArrow = (direction) =>{
        if (direction === "l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if (direction === "r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }
  return (
    <div className={styles.container}>
        
        
        <div className = {styles.wrapper} style = {{transform: `translateX(${-100*index}vw)`}}>
            
                {images.map((img, i)=>(
                    <div className = {styles.imgContainer} key = {i}>
                    <Image src = {img} alt = ""  layout = 'fill' objectFit = "contain"/>
                    <h2>10 Day Money Back Guarantee!</h2>
                    </div>

                ))}
                
            

        </div>

        <div className = {styles.floating} style = {{left:0}}>
        <Image src = "/img/evilpump.png" alt = "" layout = 'fill' objectFit = "contain"/>
            
        </div>
        <div className = {styles.floating} style = {{right:0}}>
        <Image src = "/img/evilpump.png" alt = "" layout = 'fill' objectFit = "contain"/>
            
        </div>
        <div className={styles.arrowContainer} style = {{right:0}} onClick={()=>handleArrow("r")}>
        <Image src = "/img/arrowl.png" alt = "" layout = 'fill' objectFit = "contain"/>

        </div>
    </div>
  )
}

export default Featured

import styles from "../../styles/Product.module.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice"
import Image from "next/image";


const Product = ({product}) => {
    const[size, setSize] = useState(0);
    const[quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [price, setPrice] = useState(product.prices[0]);
    const [shipping, setShipping] = useState('Free Ground');
    

    const ship = ["Free Ground", "Express", "2 Day"]
    

    const handleSize = (sizeIndex) =>{
      setSize(sizeIndex);
      setPrice(product.prices[sizeIndex]);
      setShipping(ship[sizeIndex]);
    }

    const handleClick = () => {
        dispatch(addProduct({...product, price, quantity, shipping}))

    };
    
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src = {product.img} alt = "" layout="fill" objectFit="contain"/>
            </div>
            
        </div>

        <div className={styles.right}>
            <h1 className={styles.title}>{product.title}</h1>
            <span className = {styles.price}>${product.prices[size]}</span>
            <p className = {styles.desc}>{product.desc}</p>
            <h3>Choose Your Shipping</h3>
            <h3>Current Selection: {ship[size]}</h3>
            <div className={styles.sizes}>
            <div className = {styles.size} onClick = {()=> handleSize(0)}>
                <span className = {styles.number} >Free Ground</span>
            </div>
            <div className = {styles.size} onClick = {()=> handleSize(1)}>
                <span className = {styles.number}>Express</span>
            </div>
            <div className = {styles.size} onClick = {()=> handleSize(2)}>
                <span className = {styles.number}>2 Day</span>
            </div>

            </div>
            <div className={styles.add}>
                <input onChange={(e)=> setQuantity(e.target.value)} type = "number" min = "1" defaultValue={1} className = {styles.quantity}/>
                <button onClick={handleClick} className={styles.button}>Add to Cart</button>
            </div>
            
        </div>

    </div>
  )
}

export const getServerSideProps = async({params}) => {
    const res = await axios.get(`https://ecommhalloween.vercel.app/api/products/${params.id}`);
    return{
      props:{
        product: res.data,
      },
    };
  
  };

export default Product
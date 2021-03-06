import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux"
import Link from "next/link"

const Navbar = () =>{
    const quantity = useSelector(state => state.cart.quantity);

    return(
        <div className = {styles.container}>
            <div className = {styles.item}>
            <Link href = "/" passHref>
            <div className = {styles.callButton}>
                    
                    <Image src = "/img/evilpump.png" alt ="contact" width ="32" height = "32"/>
                </div>

            </Link>
                
                <div className= {styles.texts}>
                    <div className= {styles.text}>Too Spooked, Call Us!</div>
                    <div className= {styles.text}>777-777-7777</div>

                </div>

            </div>

            <div className = {styles.item}>
                <ul className = {styles.list}>
                    <li className={styles.listItem}></li>
                    <li className={styles.listItem}></li>
                    <li className={styles.listItem}></li>
                    <Link href = "/" passHref>
                        <li className={styles.listItem}>Homepage</li>

                    </Link>
                    
                    
                    
                    <Link href = "/" passHref>
                    <div className = {styles.siteTitle}>
                        <Image src = "/img/logo.webp" alt ="contact" width ="125" height = "100"/>

                    </div>

                    </Link>
                    
                    <Link href = "/#products" passHref>
                    <li className={styles.listItem}>Products</li>
                    </Link>

                </ul>
            </div>
            <Link href = "/cart">
                <div className = {styles.cart}>
                <Image src = "/img/witch.png" alt ="" width ="30" height ="30px"/>
                <div className = {styles.counter}>{quantity}</div>
            

                </div>
            </Link>
        

        </div>
    )
}

export default Navbar
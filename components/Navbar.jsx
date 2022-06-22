import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import { useSelector } from "react-redux"
import Link from "next/link"

const Navbar = () =>{
    const quantity = useSelector(state => state.cart.quantity);

    return(
        <div className = {styles.container}>
            <div className = {styles.item}>
                <div className = {styles.callButton}>
                    <Image src = "/img/evilpump.png" alt ="contact" width ="32" height = "32"/>
                </div>
                <div className= {styles.texts}>
                    <div className= {styles.text}>Too Spooked, Call Us!</div>
                    <div className= {styles.text}>777-777-7777</div>

                </div>

            </div>

            <div className = {styles.item}>
                <ul className = {styles.list}>
                    <Link href = "/" passHref>
                        <li className={styles.listItem}>Homepage</li>

                    </Link>
                    
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <div className = {styles.siteTitle}>
                         <h1>SPOOKY SCARY HALLOWEEN</h1>

                    </div>
                   
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>

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
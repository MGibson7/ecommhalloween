import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () =>{
    return(
        <div className = {styles.container}>
            <div className = {styles.item}>
                <Image src = "/img/halloweenbackground.jpg" alt = "" layout = "fill" objectFit="cover"/>

            </div>
            <div className = {styles.item}>
                
                <div className = {styles.card}></div>
                    <h1 className={styles.title}>FIND OUR STORES</h1>
                    <p className={styles.text}>
                        45 Lampkin Lane 
                        <br />Haddonfield, Illinois 
                        <br/> 777-777-7777
                    </p>
                    <p className={styles.text}>
                        1428 Elm Street 
                        <br />Springwood, Ohio
                        <br/> 777-777-7777
                    </p>
                    <p className={styles.text}>
                        Camp Crystal Lake 
                        <br />Hardwick, New Jersey
                        <br/> 777-777-7777
                    </p>
                <div className = {styles.card}></div>
                <h1 className={styles.title}>WORKING HOURS</h1>
                <p className={styles.text}>
                        MONDAY-SATURDAY 
                        <br />9:00 am - 5:00 pm
                    </p>
                    <p className={styles.text}>
                        ONLINE 
                        <br />24/7
                    </p>

            </div>
        

        </div>
    )
}

export default Footer
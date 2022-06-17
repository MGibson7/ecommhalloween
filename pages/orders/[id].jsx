import Image from "next/image"
import styles from "../../styles/Order.module.css"

const Order = () => {

    const status = 0;
    const statusClass = (index)=>{
        if((index-status) <1) return styles.done;
        if((index-status) ===1) return styles.inProgress;
        if((index-status) >1) return styles.undone;

    };
  return (
    <div className ={styles.container}>
        <div className ={styles.left}>
            <div className={styles.row}>
            <table className = {styles.table}>
              <tbody>
              <tr className = {styles.tr}>
              <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <div className={styles.id}>
                    777897899
                  </div>
                </td>
                <td>
                  <div className={styles.name}>
                    Jason Vorhees
                  </div>
                </td>
                <td>
                  <div className={styles.address}>
                    1097 Elm Street 
                  </div>
                </td>
                <td>
                  <div className={styles.total}>
                    $299.99
                  </div>
                </td>
                
              </tr>

              </tbody>
              
                
            </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src = "/img/spider.png" height = {40} width = {40} alt = ""/>
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image src = "/img/check.png" height = {30} width = {30} alt = ""/>
                    </div>

                </div>
                <div className={statusClass(1)}>
                    <Image src = "/img/ghost.webp" height = {40} width = {40} alt = ""/>
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                        <Image src = "/img/check.png" height = {30} width = {30} alt = ""/>
                    </div>
                    
                </div>
                <div className={statusClass(2)}>
                    <Image src = "/img/witch.png" height = {40} width = {40} alt = ""/>
                    <span>On the Way</span>
                    <div className={styles.checkedIcon}>
                        <Image src = "/img/check.png" height = {30} width = {30} alt = ""/>
                    </div>
                    
                </div>

                <div className={statusClass(3)}>
                    <Image src = "/img/mummy.png" height = {40} width = {40} alt = ""/>
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                        <Image  src = "/img/check.png" height = {30} width = {30} alt = ""/>
                    </div>
                    
                </div>
            </div>
            



        </div>

        <div className ={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>SubTotal:</b>$299.99
                </div>
                <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>$0.00
                </div>
                <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>$299.99
                </div>
                <button disabled className={styles.button}>PAID</button>

            </div>
        </div>

    </div>
  )
}

export default Order
import Image from "next/image"
import styles from "../styles/Cart.module.css"

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className = {styles.table}>
              <tbody>
              <tr className = {styles.trTitle}>
              <th>Product</th>
                <th>Name</th>
                <th>Shipping</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              <tr className = {styles.tr}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image src = "/img/inferno.webp" layout = "fill" alt = "" objectFit="contain"/>
                  </div>
                </td>
                <td>
                  <div className={styles.name}>
                    Inferno Pumpkin
                  </div>
                </td>
                <td>
                  <div className={styles.extras}>
                    Free Ground
                  </div>
                </td>
                <td>
                  <div className={styles.price}>
                    $299.99
                  </div>
                </td>
                <td>
                  <div className={styles.quantity}>
                    1
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
        <div className={styles.right}>
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
            <button className={styles.button}>CHECKOUT NOW!</button>

          </div>



        </div>


    </div>
  )
}

export default Cart

import Image from "next/image"
import styles from "../styles/Cart.module.css"
import { useDispatch, useSelector} from "react-redux"


const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  
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
              {cart.products.map(product => (
                <tr className = {styles.tr} key = {product._id}>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image src = {product.img} layout = "fill" alt = "" objectFit="contain"/>
                    </div>
                  </td>
                  <td>
                    <div className={styles.name}>
                      {product.title}
                    </div>
                  </td>
                  <td>
                    <div className={styles.extras}>
                      {product.shipping}
                    </div>
                  </td>
                  <td>
                    <div className={styles.price}>
                      ${product.price}
                    </div>
                  </td>
                  <td>
                    <div className={styles.quantity}>
                      {product.quantity}
                    </div>
                  </td>
                  <td>
                    <div className={styles.total}>
                      ${product.price * product.quantity}
                    </div>
                  </td>
                </tr>
              ))};

              </tbody>
              
                
            </table>
        </div>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>SubTotal:</b>${cart.total}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>${cart.total}
            </div>
            <button className={styles.button}>CHECKOUT NOW!</button>

          </div>



        </div>


    </div>
  )
}

export default Cart;

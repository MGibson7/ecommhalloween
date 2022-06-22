import styles from "../../styles/Admin.module.css"
import Image from "next/image"
import axios from "axios"
import { useState } from "react";

const Index = ({orders, products}) => {
    const [productList, setProductList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const status = ["preparing", "on the way", "delivered"];
    const handleDelete = async(id) => {
        try{
            const res = await axios.delete("http://ecommhalloween3.vercel.app/api/products/"+id)
            setProductList(productList.filter(product=>product._id !== id))

        }catch(err){
            console.log(err)

        }
    }

    const handleStatus = async (id) =>{

        const item = orderList.filter(order=>order._id===id)[0]
        const currentStatus = item.status;
        try{
            const res = await axios.put("http://ecommhalloween3.vercel.app/api/products/orders/"+id, {status:currentStatus+1});
            setOrderList([
                res.data,
                ...orderList.filter((order)=>order._id !==id),
            ])


        }catch(err){
            console.log(err)
        }
    }



  return (
    <div className={styles.container}>
        <div className = {styles.item}>
            <h1 className = {styles.title}>Products</h1>
            <table className = {styles.table}>
                <tbody key ={products._id}>
                    <tr className = {styles.trTitle}>
                        <th>Image</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>

                </tbody>
                    {productList.map(product=>(
                    <tbody key={product._id}>
                    <tr className = {styles.trTitle}>
                        <td>
                            <Image
                            src = {product.img}
                            width = {50}
                            height = {50}
                            objectFit = "cover"
                            alt = ""
                            />
                        </td>
                        <td>{product._id.slice(0,5)}...</td>
                        <td>{product.title} </td>
                        <td>${product.prices[0]}</td>
                        <td>
                            <button className={styles.button}>Edit</button>
                            <button className={styles.button} onClick={()=>handleDelete(product._id)}>Delete</button>
                        </td>
                    </tr>
                    </tbody>
                    ))}
                


            </table>
        </div>


        <div className = {styles.item}>
            <h1 className = {styles.title}>Orders</h1>
            <table className = {styles.table}>
                    <tbody>
                        <tr className = {styles.trTitle}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                    </tbody>
                    {orderList.map((order)=>
                    <tbody key={order._id}>
                        <tr className = {styles.trTitle}>
                            <td>{order._id.slice(0,5)}...</td>
                            <td>{order.customer}</td>
                            <td>${order.total}</td>
                            <td>paid</td>
                            <td>{status[order.status]}</td>
                            <td>
                                <button className={styles.button} onClick = {()=>handleStatus(order._id)}>Next Stage</button>
                                
                            </td>
                        </tr>

                    </tbody>
                     )}


                </table>
            </div>

    </div>
  )
}

export const getServerSideProps = async(ctx) => {
    const myCookie = ctx.req?.cookies || "";
    if(myCookie.token !== process.env.ADMIN_TOKEN){
        return{
            redirect:{
                destination: "/admin/login",
                permanent: false,
            }
        }

    }
    const productRes = await axios.get("http://ecommhalloween3.vercel.app/api/products")
    const orderRes = await axios.get("http://ecommhalloween3.vercel.app/api/products/orders")

    return{
        props:{
            orders:orderRes.data,
            products: productRes.data,
        }
    }

}

export default Index
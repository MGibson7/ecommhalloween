import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import styles from '../styles/Home.module.css'
import axios from "axios"
import { useState } from "react"
import AddButton from '../components/AddButton'
import Add from '../components/Add'


export default function Home({productList, admin}) {
  const [close,setClose] = useState(true);


  
  return (
    <div className={styles.container}>

      <Head>
        <title>Halloween Store Online</title>
        <meta name="description" content="Best Halloween Store Around" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      {admin && <AddButton setClose={setClose}/>}
      <ProductList productList = {productList}/>
      {!close && <Add setClose={setClose}/>}
      

      
    </div>
  )
}

export const getServerSideProps = async(ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.ADMIN_TOKEN){
    admin = true;

  }

  const res = await axios.get("https://ecommhalloween.vercel.app/api/products");
  return{
    props:{
      productList: res.data,
      admin
    },
  };

};
import PageTitle from "../components/PageTitle/PageTitle"
import ProductCard from "../components/ProductCard/ProductCard";
import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";

export default function Home(props) {
  const products = props.products
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  return (
    <>
      <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Hephaestus PC</title>
      </Head>
      <PageTitle tagline="All-In-One PCs" title="Hephaestus PC"/>
      <main>
          {products.map(product=> <ProductCard key={product.uid} product={product}/>)}
      </main>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://hephaestus-pc-default-rtdb.firebaseio.com/products.json')
  const productData = await res.json();
  const products = Object.values(productData)
  return {
    props:{
      products
    },
    revalidate:60
  }
}
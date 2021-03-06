import Head from "next/head";

import { PRODUCT_QUERY } from "../lib/query";
import { useQuery } from "urql";
import Product from "../components/Product";
import { Gallery } from "../styles/Gallery";
import { useStateContext } from "../lib/Context";

const { motion, AnimatePresence } = require("framer-motion");

export default function Home() {

  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results

  if (fetching) return <h1>Loading</h1>
  if (error) return <h1>Oh No {error.message}</h1>
  const products = data.products.data


  return (
    <div>
      <Head>
        <title>  Idas konstbutik</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


          <motion.main
            initial={{ opacity: 0, scale: 1, y: "100%" }}
            animate={{ opacity: 1, scale: 1, y: "0%" }}
            transition={{  type: "spring", default: { duration: 0.5 }, }}>

            <Gallery>
              {products.map((product) => <Product key={product.attributes.slug} product={product} />)}
            </Gallery>
          </motion.main>

   
    </div>
  );
}

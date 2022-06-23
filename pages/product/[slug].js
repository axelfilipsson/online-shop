import { useQuery } from "urql"
import { GET_PRODUCT_QUERY } from "../../lib/query"
import { useRouter } from "next/router"
import { DetailsStyle, ProductInfo, Quantity, Buy } from "../../styles/ProductDetails"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import { useStateContext } from "../../lib/Context";
import { toast } from "react-hot-toast"
import {useEffect } from "react"

const { AnimatePresence } = require("framer-motion")
export default function ProductDetails() {




  const { qty, increaseQty, decreaseQty, onAdd, setQty } = useStateContext()

  useEffect(() => {
    setQty(1)
  }, [])

  const { query } = useRouter()

  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug }
  })

  const { data, fetching, error } = results

  if (fetching) return <h1>Loading</h1>
  if (error) return <h1>Oh No {error.message}</h1>

  const { title, description, image } = data.products.data[0].attributes

  const notify = () => {
    toast.success(`${title} lades till i din varukorg!`, { duration: 1500, })

  }

  return (

    <DetailsStyle
      initial={{ opacity: 0, scale: 0, }}
      animate={{ opacity: 1, scale: 1, x: "0%" }}
      transition={{ delay: 0, type: "tween" }}

    >
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h3>
          {title}
        </h3>
        <p>{description}</p>
        <Quantity>
          <span>
            Antal:
          </span>
          <button>
            <AiFillMinusCircle onClick={decreaseQty} />
          </button>
          <p>
            {qty}
          </p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy onClick={() => {
          notify()
          onAdd(data.products.data[0].attributes, qty);

        }}

        >Lägg till i varukorgen</Buy>
      </ProductInfo>

    </DetailsStyle>


  )
}

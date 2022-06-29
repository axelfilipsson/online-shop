import { useStateContext } from "../lib/Context"
import { CartWrapper, CartStyle, Card, CardInfo, EmptyStyle, Checkout, Cards } from "../styles/CartStyles"
import { FaShoppingCart } from 'react-icons/fa'
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import { Quantity } from "../styles/ProductDetails"
import getStripe from "../lib/getStripe"

const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { delay: 1 } },
}

const cards = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1
      }
    }
  }




 
export default function Cart() {

    const handleCheckout = async () => {
        const stripe = await getStripe()
        const response = await fetch('/api/stripe', {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(cartItems)
        })
        const data = await response.json()
        await stripe.redirectToCheckout({sessionId: data.id })
    
    }  

    const { cartItems, setShowCart, onAdd, onRemove, totalPrice } = useStateContext()

    return (
        <CartWrapper onClick={() => setShowCart(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <CartStyle onClick={(e) => e.stopPropagation()}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{ type: "tween" }}
                exit={{ x: "100%" }}
                
            >
                {cartItems.length < 1 && (
                    <EmptyStyle
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2> Här var det tomt.. </h2>
                        <FaShoppingCart />
                    </EmptyStyle>
                )}

                <Cards layout variant={cards} initial="hidden" animate="show">
                    {cartItems.length >= 1 && (
                        cartItems.map((item) => {
                            return <Card layout  variant={card} 
                                key={item.slug}>
                                <img src={item.image.data.attributes.formats.thumbnail.url} alt={item.title} />
                                <CardInfo>
                                    <h3> {item.title}</h3>
                                    <p>{item.price} SEK</p>
                                    <Quantity>
                                        <span>
                                            Antal
                                        </span>
                                        <button onClick={() => onRemove(item)}>
                                            <AiFillMinusCircle />
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button onClick={() => {
                                            onAdd(item, 1)
                                        }}>
                                            <AiFillPlusCircle />
                                        </button>
                                    </Quantity>
                                </CardInfo>
                            </Card>
                        })

                    )}
                </Cards>
                {cartItems.length >= 1 && (
                    <Checkout layout>
                        <h3>
                            Totalt: {totalPrice} SEK
                        </h3>
                        <button onClick={handleCheckout}>
                         Köp
                        </button>
                    </Checkout>
                )}
            </CartStyle>
        </CartWrapper>
    )
}
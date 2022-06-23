import styled from "styled-components";
import ida from "../public/ida.svg";
import Image from "next/image";
import { useRouter } from "next/router";
const { motion } = require("framer-motion");
// STRIPE_SECRET_KEY
const stripe = require("stripe")(
    `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
);

export async function getServerSideProps(params) {
    const order = await stripe.checkout.sessions.retrieve(
        params.query.session_id,
        {
            expand: ["line_items"],
        }
    );

    return { props: { order } };
}

export default function Success({ order }) {
    const route = useRouter();
    return (
        <Wrapper>
            <Card
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.75 } }}
                initial={{ opacity: 0, scale: 0.75 }}
            >
                <h1>Thank you for your order!</h1>
                
                <h3>A confirmation email has been sent to</h3>
                <p>{order.customer_details.email}</p>
                <InfoWrapper>

                    <OrderInfo>
                        <h3>Products</h3>
                        {order.line_items.data.map((item) => (
                            <div key={item.id}>
                                <p>Product: {item.description}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price.unit_amount}</p>
                            </div>
                        ))}
                    </OrderInfo>
                </InfoWrapper>
                <button onClick={() => route.push("/")}>Continue Shopping</button>
                <ImageWrapper><Image src={ida} alt="success" /></ImageWrapper>
            </Card>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
 

`;



const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 3rem 3rem;



  h1 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  h2 {
    color: var(--secondary);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  button {
    background: var(--primary);
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    margin-top: 2rem;
    border: none;
    width: 20rem;
    cursor: pointer;
  }
`;
const Address = styled.div`
  font-size: 1rem;
  width: 100%;
  
`;
const OrderInfo = styled.div`
    padding-top: 1rem;
  font-size: 1rem;
  width: 100%;
  div {

    padding-bottom: 1rem;
  }
`;
const InfoWrapper = styled.div`
  margin-top: 0rem;
  display: flex;
`;

const ImageWrapper = styled.div`
margin: 5rem;
  width: 20rem;
`;
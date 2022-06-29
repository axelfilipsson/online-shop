import Link from "next/link";
import { FiShoppingBag } from 'react-icons/fi'
import { NavStyles, NavItems } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/Context";
import User from "./User";
import{ useUser }from '@auth0/nextjs-auth0'
const { AnimatePresence, motion } = require("framer-motion")

export default function Nav() {

    const { showCart, setShowCart, totalQuantities } = useStateContext();

    return (
        <NavStyles>


            < Link href={'/'} >
                <h1>IDAS KONSTBUTIK</h1>
                
            </Link>
            




            <NavItems>
            {/* <User /> */}
                <div onClick={() => setShowCart(true)}>
                    {totalQuantities > 0 && <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>{totalQuantities}</motion.span>}
                    <FiShoppingBag />
                    <h5>Varukorg</h5>
                </div>
            </NavItems>

            <AnimatePresence> {showCart && <Cart />}</AnimatePresence>


        </NavStyles>)
}

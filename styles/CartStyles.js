import styled from "styled-components";

const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  
`;

export const CartStyle = styled(motion.div)`
  width:30%;
  background: #f1f1f1;
  padding: 2rem 2rem;
  overflow-y: scroll;
  position: relative;
  @media only screen and (max-width: 600px) {
    width: 80%;
    padding: 1rem 1rem;
 
}

`;

export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  background: white;
  padding: 0rem;
  margin: 2rem 0rem;

  @media only screen and (max-width: 600px) {
  height: 8rem;
  margin: 1rem 0rem;
  width:100%;;
  }

  span{
    margin-right: 0.2rem;
  }
  svg {

    font-size: 1rem;
    color: var(--secondary);
  }

  img {
        width:8rem;
  }
`;

export const CardInfo = styled(motion.div)`


div {
    margin-right: 2rem;
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 1rem;
    margin-top:2.5rem;

    div {

        justify-content: left;
      }

    }

  
  
`;

export const EmptyStyle = styled(motion.div)`




  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  svg {
    margin-top: 2rem;
    font-size: 5rem;
    color: var(--secondary);
  }
`;

export const Checkout = styled(motion.div)`

  button {
    background: var(--primary);
    padding: 1rem 2rem;
    width: 100%;
    color: white;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
  
  }
  @media only screen and (max-width: 600px) {  width: 100%;
   button {
  
    margin-top: 1rem;
   
  
  }
    margin-top: 1rem;
}
`;



export const Cards = styled(motion.div)`
`
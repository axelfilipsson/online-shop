import styled from "styled-components";

const { motion } = require("framer-motion");

export const DetailsStyle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 40%;
  }


  @media only screen and (max-width: 600px) {
    display: table-row;
  justify-content: center;
  margin-top: 3rem;
  img {
    width:100%;
  }

    }

`;

export const ProductInfo = styled.div`


  width: 40%;

  @media only screen and (max-width: 600px) {  width: 100%;
    margin-top: 1rem;
}
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  @media only screen and (max-width: 600px) {  width: 100%;
    margin-top: 2rem;
}

  
  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }

  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
  border: none;
`;
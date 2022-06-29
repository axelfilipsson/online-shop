import styled from "styled-components";

export const ProductStyle = styled.div`
    background-color: white;
    position: relative;
    display: flex; 
    flex-direction: column;
    padding: 1.5rem;
    
    
    img{
        width: 100%;
        cursor: pointer;
    }
    h2{
        padding: 0.5rem 0rem;

    }

    @media only screen and (max-width: 380px) {
        width: 94%;

    }
`;

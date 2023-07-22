import styled from "styled-components"


const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 


    p {
    color: #000;
    font-weight:500;
    max-width: 250px;
    text-align:center;
    }

    span {
        font-weight: 700;
        text-decoration: underline;
        cursor: pointer;
        color: #009; 
    }
`


export {
    Container
}
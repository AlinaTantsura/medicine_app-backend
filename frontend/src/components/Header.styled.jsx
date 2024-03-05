import styled from "styled-components"

export const HeaderStyled = styled.header({
    backgroundImage: "linear-gradient(to left, #553c9a, #b393d3)",
    maxWidth: "1200px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    padding: '10px',
    nav: {
        display: "flex",
        gap: "10px",
        a: {
            color: "black",
            fontWeight: 500,
            textDecoration: "none"
        },
       "a:hover": {
           color: "white",
           textDecoration: "underline"
        },

    }
})
import styled from "styled-components";

export const ShopButton = styled.button({
    backgroundImage: "linear-gradient(to left, #553c9a, #b393d3)",
    border: "none",
    borderRadius: "10px",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "250px",
    height: "50px",
    fontSize: "15px",
    "&:hover": {
        color: "white",
        fontSize: "18px",
    },
    '&.activeShop': {
        color: "white",
        fontSize: "18px",
        boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        border: "solid 2px white"
    }
});

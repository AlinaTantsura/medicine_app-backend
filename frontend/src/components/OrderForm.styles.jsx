import styled from "styled-components";

export const OrderForm = styled.form({
    border: "solid 1px red",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "1200px",
    padding: "15px",
    position: "relative",
    input: {
        width: "200px",
        border: "solid 1px lightgrey",
        borderRadius: "5px",
        outline: "none",
        
    },
    "input:focus": {
            border: "solid 2px grey",
    },
    button: {
                backgroundImage: "linear-gradient(to left, #553c9a, #b393d3)",
                border: "none",
                borderRadius: "10px",
                color: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "30px",
                fontSize: "10px",
            transform: "",
            position: "absolute",
            right: "10px",
                bottom: "15px",
                "&:hover": {
                    color: "white",
                    fontSize: "12px",
                    scale: "1.1",
                }
            }
})
export const FormInfoDiv = styled.div({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
});

export const MainDiv = styled.div({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
})
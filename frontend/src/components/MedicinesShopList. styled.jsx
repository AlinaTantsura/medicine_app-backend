import styled from "styled-components";

export const MedicinesShopListStyled = styled.ul({
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    li: {
        padding: 0,
        width: "calc(100 - 10px) / 3",
        maxWidth: "250px",
        border: 'solid 1px lightgrey',
        borderRadius: "5px",
        overflow: "hidden",
        paddingBottom: "10px",
        div: {
            padding: "0 10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            position: "relative",
        },
        p: {
            fontSize: "14px"
        },
        input: {
            maxWidth: "50px"
        },
        // button: {
        //         backgroundImage: "linear-gradient(to left, #553c9a, #b393d3)",
        //         border: "none",
        //         borderRadius: "10px",
        //         color: "black",
        //         display: "flex",
        //         alignItems: "center",
        //         justifyContent: "center",
        //         width: "100px",
        //         height: "30px",
        //         fontSize: "10px",
        //     transform: "",
        //     position: "absolute",
        //     right: "10px",
        //         bottom: 0,
        //         "&:hover": {
        //             color: "white",
        //             fontSize: "12px",
        //             scale: "1.1",
        //         }
        //     }
    }
})
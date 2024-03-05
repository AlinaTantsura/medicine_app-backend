import styled from "styled-components";

export const MedicinesListStyled = styled.ul({
    listStyle: "none",
    padding: "10px",
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center",
    li: {
        padding: 0,
        width: "calc(100 - 10px) / 3",
        maxWidth: "250px",
        border: 'solid 1px lightgrey',
        borderRadius: "5px",
        overflow: "hidden",
        paddingBottom: "10px",
        div: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // justifyContent: "center",
            margin: 0,
            padding: "10px",
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
                "&:hover": {
                    color: "white",
                    fontSize: "12px",
                    scale: "1.1",
                }
            }
        }
    }


})

export const InfoDiv = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    margin: 0,
})
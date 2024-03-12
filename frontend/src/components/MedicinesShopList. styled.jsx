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
        }
    }
})
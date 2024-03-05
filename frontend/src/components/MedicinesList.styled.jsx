import styled from "styled-components";

export const MedicinesListStyled = styled.ul({
    listStyle: "none",
    padding: "10px",
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center",
    // alignItems: "flex-start",
    li: {
        padding: 0,
        // width: "250px",
        width: "calc(100 - 10px) / 3",
        border: 'solid 1px lightgrey',
        borderRadius: "5px",
        overflow: "hidden",
        paddingBottom: "10px",
        div: {
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            
        }
    }


})
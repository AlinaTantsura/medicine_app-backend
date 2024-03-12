import { useContext } from "react"
import { ListContext } from "./Context"
import { HeaderStyled, NavLinkStyled } from "./Header.styled";

export const Header = () => {
    const { firstShopId } = useContext(ListContext);
    const path = `/${firstShopId}`
    return(<HeaderStyled>
            <nav>
            {firstShopId ? (<NavLinkStyled to={path}>Shop</NavLinkStyled>) : (<NavLinkStyled to="/">Shop</NavLinkStyled>)}
            {/* <NavLinkStyled to={firstShopId ? path : "/"}>Shop</NavLinkStyled> */}
            <NavLinkStyled to="/shopcard">Shopping card</NavLinkStyled>
            </nav>
        </HeaderStyled>)
}
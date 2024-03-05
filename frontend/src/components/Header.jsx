import { useContext } from "react"
import { Link } from "react-router-dom"
import { ListContext } from "./Context"
import { HeaderStyled } from "./Header.styled";

export const Header = () => {
    const { firstShopId } = useContext(ListContext);
    const path = `/${firstShopId}`
    return(<HeaderStyled>
            <nav>
            { firstShopId ? (<Link to={path}>Shop</Link>) : (<Link to="/">Shop</Link>)}
            {/* <Link to='/'>Shop</Link>    */}
            <Link to="/shopcard">Shopping card</Link>
            </nav>
        </HeaderStyled>)
}
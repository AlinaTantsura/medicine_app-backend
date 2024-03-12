import { useContext, useEffect, useState } from "react";
import { getShopsList } from "../api";
import { useNavigate } from "react-router-dom";
import { ListContext } from "./Context";
import { ShopListStyled } from "./ShopsList.styled";
import { ShopButton } from "./ShopButton.styled";

export const ShopsList = () => {
    const [data, setData] = useState(null);
    const {firstShopId, findFirstId} = useContext(ListContext)
    const navigate = useNavigate();
    const button = document.querySelector(".activeShop");

    useEffect(() => {
        const getShops = async () => {
            try {
                const resp = await getShopsList();
                if (!data) {
                    setData(resp.data);
                    findFirstId(resp.data[0]._id)
                }
                
            } catch (error) {
                alert(error.message);
            }
            
        }
        getShops();
        
        if (firstShopId) navigate(`/${firstShopId}`);
        findFirstId('');
       
    }, [data, firstShopId, navigate, findFirstId]);
   
    return (
        
        data && (
             <ShopListStyled>
                {   console.log(button)}
                {    data.map(item => (<li key={item._id}>
                    <ShopButton type="button" onClick={(e) => {
                        navigate(`/${item._id}`);
                        if(button) button.classList.remove('activeShop');
                        e.currentTarget.classList.add('activeShop')
                    }}>{item.shop_name}</ShopButton></li>))}
            </ShopListStyled>
        )
       
    )
}
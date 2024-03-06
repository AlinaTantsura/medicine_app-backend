import { useContext} from "react"
import { ListContext } from "./Context"
import { ShoppingListStyled } from "./ShoppingListStyled.styled";
import { MedicinesShopListStyled } from "./MedicinesShopList. styled";

export const ShoppingList = () => {
    const { medicinesList,totalPrice, removeMedicineFromTheList, changeMedicineAmount} = useContext(ListContext);
    
    const handleChange = (e) => {
       changeMedicineAmount(e.target.id, Number(e.target.value))
    }
    return (
        medicinesList && (
            <ShoppingListStyled>
            <MedicinesShopListStyled>
                {medicinesList.map(({id, name, price, store, amount })=> 
                    <li key={id}>
                            <img src="https://www.norma.uz/img/3a/7c/5129deecc99ae12ad7bc30bcad7b.jpg" alt="Medicines" width={250} />
                        <div>
                            <h4>{name}</h4>
                            <p>Drugstore name: "{store}"</p>
                            <p>Price by one: {price}</p>
                            <input id={id} type="number" step="1" min="1" defaultValue={amount} onChange={handleChange} />
                            <button type="button" onClick={() => {
                                removeMedicineFromTheList(id)
                            }}>Remove from the shopping list</button>
                        </div>
                    </li>
                )}
                </MedicinesShopListStyled>
                <p><b>Total price:</b> {totalPrice}</p>
            </ShoppingListStyled>
        )
    )
}
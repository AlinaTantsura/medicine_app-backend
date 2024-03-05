import { useContext} from "react"
import { ListContext } from "./Context"

export const ShoppingList = () => {
    const { medicinesList,totalPrice, removeMedicineFromTheList, changeMedicineAmount} = useContext(ListContext);
    
    const handleChange = (e) => {
        console.log(e.target.id);
       changeMedicineAmount(e.target.id, Number(e.target.value))
    }
    return (
        medicinesList && (
            <>
            <ul>
                {medicinesList.map(({id, name, price, store, amount })=> 
                    <li key={id}>
                        <div>
                            <h4>{name}</h4>
                            <p>Drugstore name: "{store}"</p>
                            <p>Price: {price}</p>
                            <input id={id} type="number" step="1" min="1" defaultValue={amount} onChange={handleChange} />
                            <button type="button" onClick={() => {
                                removeMedicineFromTheList(id)
                            }}>Remove</button>
                        </div>
                    </li>
                )}
                </ul>
                <p>Total price: {totalPrice}</p>
            </>
        )
    )
}

import { useContext } from "react";
import { ShoppingList } from "../components/ShoppingList"
import { ListContext } from "../components/Context";
import { postNewOrder } from "../api";
import { FormInfoDiv, MainDiv, OrderForm } from "../components/OrderForm.styles";

export const ShoppingCard = () => {
    const { medicinesList, totalPrice, clearLocalStorage } = useContext(ListContext);

    const createNewOrder = async(name, email, phone, address, medicines_list, total_price) => {
         try {
             const newOrder = await postNewOrder(name, email, phone, address, medicines_list, total_price);
             console.log(newOrder);
         } catch (error) {
             console.log(error)
             alert (error.message);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const phone = form.elements.phone.value;
        const address = form.elements.address.value;
        createNewOrder(name, email, phone, address, medicinesList || [], totalPrice );
       
        form.reset();
        clearLocalStorage();
}

    return (
        <>
        <OrderForm onSubmit={handleSubmit}>
                <MainDiv>
                <FormInfoDiv>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" required/>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" required/>
            <label htmlFor="phone">Phone</label>
            <input name="phone" type="tel" required/>
            <label htmlFor="address">Address</label>
            <input name="address" type="text" required />
                </FormInfoDiv>
                    <ShoppingList />
                </MainDiv>
            <button type="submit">Order</button>
        </OrderForm>
                
        </>
    )
}
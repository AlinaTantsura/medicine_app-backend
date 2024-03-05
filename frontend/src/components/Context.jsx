import { createContext, useEffect, useState } from "react";

export const ListContext = createContext();

export const ContextProvider = ({ children }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [medicinesList, setMedicinesList] = useState(null);
    const [firstShopId, setFirstShopId] = useState('');

    useEffect(() => {
        const medicinesListInLocalStorage = localStorage.getItem('medicinesList');
        if (medicinesListInLocalStorage && !medicinesList) setMedicinesList(JSON.parse(medicinesListInLocalStorage))
        if (medicinesList) {
            localStorage.setItem('medicinesList', JSON.stringify(medicinesList));
        setTotalPrice(medicinesList.reduce((acc, item) => acc + item.price*item.amount, 0));}

        
    }, [medicinesList]);
    
    function addMedicineToTheList(medicineInfo){
        if (!medicinesList) setMedicinesList([medicineInfo])
        else setMedicinesList([...medicinesList, medicineInfo]);
    }

    function removeMedicineFromTheList(medicineId){
        setMedicinesList([...medicinesList.filter(item => item.id !== medicineId)]);
    }

    function changeMedicineAmount(id, amount) {
        const index = medicinesList.findIndex(item => item.id === id);
        const changeItem = medicinesList[index];
        changeItem.amount = amount;
        setMedicinesList([...medicinesList.splice(0, index),
        changeItem, ...medicinesList.splice(index+1)])

    }

    function clearLocalStorage() {
        setMedicinesList(null);
        setTotalPrice(0);
        localStorage.removeItem('medicinesList')
    }

    function findFirstId(id) {
        setFirstShopId(id)
    }
    
    

    return (<ListContext.Provider value={{
        medicinesList,
        totalPrice,
        addMedicineToTheList,
        changeMedicineAmount,
        removeMedicineFromTheList,
        clearLocalStorage,
        firstShopId,
        findFirstId
    }}>
        {children}
    </ListContext.Provider>)
}
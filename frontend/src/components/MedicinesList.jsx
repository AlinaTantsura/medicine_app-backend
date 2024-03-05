import { useContext, useEffect, useState } from "react";
import { getMedicinesByShopId } from "../api";
import { useParams } from "react-router-dom";
import { ListContext } from "./Context";
import { nanoid } from 'nanoid'
import { InfoDiv, MedicinesListStyled } from "./MedicinesList.styled";


export const MedicinesList = () => {
    const [medicines, setMedicines] = useState(null);
    const { shopId } = useParams();
    const { medicinesList, addMedicineToTheList } = useContext(ListContext);

    const getMedicines = async (id) => {
        try {
            const resp = await getMedicinesByShopId(id);
            const list = resp.data.medicines_list.map(item => ({...item, _id: nanoid(), store: resp.data.shop_name}));
            setMedicines(list);
        } catch (error) {
            alert(error.message)
        }
    };

    useEffect(() => {
        if(shopId) getMedicines(shopId)
    }, [shopId]);

    return (
        
        (medicines && shopId) && (<MedicinesListStyled>
            {medicines.map(({ _id, name, price, store }) => <li key={_id}>
                <img src="https://www.norma.uz/img/3a/7c/5129deecc99ae12ad7bc30bcad7b.jpg" alt="Medicines" width={250} />
                <div>
                    <InfoDiv>
                        <h4>{name}</h4>
                        <p>Price: {price}</p>
                    </InfoDiv>
                {(medicinesList && medicinesList.find(item => item.name === name && item.store === store))
                    ? (<p>This medicine is already in your <a href="/shopcard">list</a></p>)
                    : (<button type="button" onClick={() => {
                        addMedicineToTheList({ "id": _id, "name": name, "price": price, "store": store, "amount": 1 });
                    }}>Add to the shopping list</button>)}
                    </div>
            </li>)}
        </MedicinesListStyled>))
}
import axios from "axios";

export const getShopsList = async () => {
    return await axios.get("/api/drugshops");
};

export const getMedicinesByShopId = async (shopId) => {
    return await axios.get(`/api/drugshops/${shopId}`)
};

export const postNewOrder = async (name, email, phone, address, medicines_list, total_price) => {
    return await axios.post('/api/orders/', {name, email, phone, address, medicines_list , total_price})

} 
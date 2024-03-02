import express from "express";
import { Medicine } from "../models/medicineModel.js";

export const medicineRouter = express.Router();

medicineRouter.get('/', async (req, res, next) => {
    try {
        const shopsList = await Medicine.find({}, "shop_name");
        res.status(200).json(shopsList);
        
    } catch (error) {
        next(error);
    }
});

medicineRouter.get('/:shopId', async (req, res, next) => {
    const {shopId }= req.params;
    console.log(shopId)
    try {
        const drugStore = await Medicine.findById(shopId);
        res.status(200).json(drugStore);
    } catch (error) {
        next(error); 
    }
})

// medicineRouter.post('/', async(req, res) => {
//     // const medicines = await Medicine.find();
//     const newMed = await Medicine.create({"name": "Diklofenak"})
//     // res.json(medicines)
// })

import express from "express";
import { Medicine } from "../models/medicineModel.js";
import { isValidObjectId } from "mongoose";

export const medicineRouter = express.Router();

medicineRouter.get('/', async (_, res, next) => {
    try {
        const shopsList = await Medicine.find({}, "shop_name");
        res.status(200).json(shopsList);
        
    } catch (error) {
        next(error);
    }
});

medicineRouter.get('/:shopId', async (req, res, next) => {
    const { shopId } = req.params;
    if (!isValidObjectId(shopId)) {
        const error = new Error();
        error.status = 400;
        error.message = "It's not a valid id";
        res.status(400).json({
            message: error.message
        })
        next(error) ;
    }
    try {
        const drugStore = await Medicine.findById(shopId);
        res.status(200).json(drugStore);
    } catch (error) {
        next(error); 
    }
})
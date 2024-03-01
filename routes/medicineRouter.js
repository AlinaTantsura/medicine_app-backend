import express from "express";
import { Medicine } from "../models/medicineModel.js";

export const medicineRouter = express.Router();

medicineRouter.get('/', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines)
        
    } catch (error) {
        
    }
});

medicineRouter.post('/', async(req, res) => {
    // const medicines = await Medicine.find();
    const newMed = await Medicine.create({"name": "Diklofenak"})
    // res.json(medicines)
})

// import express from "express";
// import { Orders, orderBodySchema } from "../models/orderModel.js";

// export const orderRouter = express.Router();

// orderRouter.get('/', async (req, res, next) => {
//     try {
//         const result = await Orders.find();
//         res.status(200).json(result);
//     } catch (error) {
//         next(error)
//     }
// })

// orderRouter.post('/', async (req, res, next) => {
//     const { error } = orderBodySchema.validate(req.body);
//     if (error){ res.status(400).json({
//         message: error.message
//     })
//     next(error)}
//     try {
//         const result = await Orders.create({ ...req.body });
//         res.status(201).json(result);
//     } catch (error) {
//         next(error)
//     }
// });




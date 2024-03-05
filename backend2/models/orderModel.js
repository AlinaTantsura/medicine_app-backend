import Joi from "joi";
import { Schema, model } from "mongoose";


export const orderSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
    medicines_list: {
        type: [Object],
        default: []
    },
    total_price: {
        type: Number,
        default: 0
    }
}, { versionKey: false, timestamps: true });


export const Orders = model('orders', orderSchema);

export const orderBodySchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    medicines_list: Joi.array(),
    total_price: Joi.number()
})
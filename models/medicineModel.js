import { Schema, model } from "mongoose";
const medicineSchema = new Schema({
    name: String
},
{versionKey: false})

export const Medicine = model('medicines', medicineSchema);
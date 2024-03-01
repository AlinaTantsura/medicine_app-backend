import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";
import { medicineRouter } from "./routes/medicineRouter.js";

const app = express();
const { DB_HOST, PORT } = process.env;

app.use(cors())
app.use(express.json());

app.use("/api/medicines", medicineRouter);
app.use('_', (_, res) => {
    res.status(404).json({
        message: "Route not found"
    })
});

app.use((err, req, res, next) => {
    const { status=500, message="Server error"} = err;
    res.status(status).json({ message });
})


mongoose.connect(DB_HOST).then(() => {
    console.log("Database connection succesful")
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    });
}).catch(err => {
    console.log(err.message);
    process.exit(1);
})
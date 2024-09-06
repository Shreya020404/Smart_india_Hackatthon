import mongoose from "mongoose";

export async function DbConnect() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        return conn;
    } catch (error) {
        throw new Error(error);
    }
}
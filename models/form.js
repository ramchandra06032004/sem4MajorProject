import mongoose from "mongoose";

const formSchema = new mongoose.Schema({});

export const Form = mongoose.model("Form", formSchema);

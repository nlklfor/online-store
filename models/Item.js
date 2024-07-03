import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
        title: {
        type: String,
        required: true
    }, price: {
        type: Number,
        required: true,
    }, currency: {
        type: String,
        required: true
    }, brand: {
        type: String,
        required: true
    }, gender: {
        type: String,
        required: true
    }, color: {
        type: String,
        required: true
    }, desc: {
        type: String,
        required: true
    }, type: {
        type: String,
        required: true
    }, size: {
        type: Array,
        required: true
    },
}, {
    timestamps: true,
})

export default mongoose.model("Item", ItemSchema);


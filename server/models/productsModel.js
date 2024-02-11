const mongoose=require("mongoose");

const ProductSchema = new mongoose.Schema({
    // image: {
    //     type: String,
    // },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    id:Number, 

    quantity:Number,
    price: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
}, { versionKey: false });
const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel

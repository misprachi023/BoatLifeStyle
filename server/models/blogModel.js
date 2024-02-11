const mongoose=require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    id:Number, 
    time: {
        type: String,
        required: true,
    },
    
}, { versionKey: false });
const BlogModel = mongoose.model("blog", BlogSchema);
module.exports = BlogModel

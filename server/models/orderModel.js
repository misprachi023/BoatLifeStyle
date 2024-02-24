const mongoose=require('mongoose');
const orderSchema=new mongoose.Schema({
    name:String,
    amount:Number,
    oreder_id:String,
    razorpay_payment_id:String,
    razorpay_order_id:String,
    razorpay_signature:String
},{versionKey:false});
const OrderModel=mongoose.model('order',orderSchema);
module.exports=OrderModel;
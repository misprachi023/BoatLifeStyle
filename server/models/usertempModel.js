const monogoose = require("mongoose");
const userTempSchema = new monogoose.Schema({
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: false
    },
    otp: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true,
    },
});
const UserTempModel = monogoose.model("tempUser", userTempSchema);
module.exports = UserTempModel;
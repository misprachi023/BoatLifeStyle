const monogoose = require("mongoose");
const userSchema = new monogoose.Schema({
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const UserModel = monogoose.model("user", userSchema);
module.exports = UserModel;
const express = require("express");
const bcrypt = require("bcrypt"); // Assuming you're using bcrypt for password hashing
const UserTempModel = require("../models/usertempModel");
const SibApiV3Sdk = require("@getbrevo/brevo");
const UserModel = require("../models/userModel");
// Import or define SibApiV3Sdk if you haven't already
const UsertempRouter = express.Router();
UsertempRouter.post("/verify", async (req, res) => {
    const { email, otp } = req.body;
    console.log(req.body)
    try {
        const findingUser = await UserTempModel.findOne({ email });
        if (!findingUser) {
            res.status(400).send({
                message: "User not found", 
            });
        } else {
            if (findingUser.otp == otp) {
                const hashedPassword = await bcrypt.hash(findingUser.password, 10);
                const user = new UserModel({
                    email: findingUser.email,
                    userName: findingUser.userName,
                    password: hashedPassword,
                });
                await user.save();
                await UserTempModel.deleteOne({ email }); 
                // Save the user to the database
                res.status(200).send({
                    msg: "User registered",

                });
            }
        }
    } catch (error) {
        res.status(400).send({
            msg: error.message
        });
    }
});
UsertempRouter.post("/register", async (req, res) => {
    console.log(req.body);
    const { email, password,userName } = req.body;
    res.cookie("email", email, { httpOnly: true, secure: true, sameSite: "none" });
    console.log(req.body);
    try {
        const findingUser = await UserModel.findOne({ email });
        if (findingUser) {
            res.status(200).send({
                msg: "User already exists",
            });
        } else {
            const otp = Math.floor(100000 + Math.random() * 900000);
            console.log(otp);
            const userTemp = new UserTempModel({
                email,
                otp,
                userName,
                password
            });
            await userTemp.save();
            let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
            let apiKey = apiInstance.authentications["apiKey"];
            apiKey.apiKey ="xsmtpsib-90b4fca418f8d080292b26b8ff375187cc0a4a10cef74c638691ddbf57c846d8-Drm7tcEKsTNbZFd1";
            let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
            sendSmtpEmail.subject = "My {{params.subject}}";
            sendSmtpEmail.htmlContent =
                "<html><body><h1>your verification OTP is  {{params.parameter}}</h1></body></html>";
            sendSmtpEmail.sender = { name: "Boat", email: "prachi@domain.com" };
            sendSmtpEmail.to = [{ email: email, name: userName }];
            sendSmtpEmail.cc = [ 
                { email: "example2@example2.com", name: "Janice Doe" }, 
            ];
            sendSmtpEmail.bcc = [{ name: "John Doe", email: "example@example.com" }];
            sendSmtpEmail.replyTo = { email: "replyto@domain.com", name: "John Doe" };
            sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
            sendSmtpEmail.params = {
                parameter: otp,
                subject: "OTP for verification",
            };
            apiInstance.sendTransacEmail(sendSmtpEmail).then(
                function (data) {
                    console.log(
                        "API called successfully. Returned data: " + JSON.stringify(data)
                    );
                },
                async function (error) {
                await UserTempModel.deleteOne({ email });
                    console.error(error);
                    
                }
            );
            // Your email sending logic using SibApiV3Sdk goes here
            res.status(200).send({
                msg: "OTP sent",
            });
        }
    } catch (error) {
        res.status(400).send({
            msg: error.message,
        });
    }
});
module.exports = UsertempRouter;

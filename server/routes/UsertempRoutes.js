const express = require("express");
const bcrypt = require("bcrypt");
const UserTempModel = require("../models/usertempModel");
const SibApiV3Sdk = require("@getbrevo/brevo");
const UserModel = require("../models/userModel");

const UsertempRouter = express.Router();

UsertempRouter.post("/verify", async (req, res) => {
    const { email, otp } = req.body;
    try {
        const findingUser = await UserTempModel.findOne({ email });
        if (!findingUser) {
            return res.status(400).send({
                message: "User not found", 
            });
        }

        if (findingUser.otp !== otp) {
            return res.status(400).send({
                message: "Incorrect OTP",
            });
        }

        const hashedPassword = await bcrypt.hash(findingUser.password, 10);
        const user = new UserModel({
            email: findingUser.email,
            userName: findingUser.userName,
            password: hashedPassword,
        });

        await user.save();
        await UserTempModel.deleteOne({ email }); 

        return res.status(200).send({
            message: "User registered",
        });
    } catch (error) {
        return res.status(400).send({
            message: error.message
        });
    }
});

UsertempRouter.post("/register", async (req, res) => {
    const { email, password, userName } = req.body;
    try {
        const findingUser = await UserModel.findOne({ email });
        if (findingUser) {
            return res.status(200).send({
                message: "User already exists",
            });
        }

        const otp = Math.floor(100000 + Math.random() * 900000);
        const userTemp = new UserTempModel({
            email,
            otp,
            userName,
            password
        });

        await userTemp.save();

        const apiKey = "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";
        const sendinblue = new SibApiV3Sdk.TransactionalEmailsApi();
        SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey = apiKey;

        const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
        sendSmtpEmail.subject = "OTP for verification";
        sendSmtpEmail.htmlContent = `<html><body><h1>Your verification OTP is ${otp}</h1></body></html>`;
        sendSmtpEmail.sender = { email: "prachi@domain.com", name: "Boat" };
        sendSmtpEmail.to = [{ email, name: userName }];

        await sendinblue.sendTransacEmail(sendSmtpEmail);

        return res.status(200).send({
            message: "OTP sent",
        });
    } catch (error) {
        return res.status(400).send({
            message: error.message,
        });
    }
});

module.exports = UsertempRouter;

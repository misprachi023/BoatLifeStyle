const express = require("express");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer"); // Assuming you're using bcrypt for password hashing
const UserTempModel = require("../models/usertempModel");
// const SibApiV3Sdk = require("@getbrevo/brevo");
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
    const { email, password, userName } = req.body;
    res.cookie("email", email, { httpOnly: true, secure: true, sameSite: "none" });
    console.log(req.body);
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "sahilroyal91@gmail.com",
          pass: "ybtwdogzakknnuja",
        },
      });
    UserRouter.post("/register", async (req, res) => {
        console.log(req.body);
        const user = await UserModel.findOne({ email: req.body.email });
        const { email, password, userName } = req.body;
        try {
            const findingUser = await UserModel.findOne({ email });
            if (findingUser) {
                res.status(200).send({
                    msg: "user already exists",
                });
            } else {
                const otp = Math.floor(100000 + Math.random() * 900000);
                console.log(otp);
                const userTemp = new UserTempModel({
                    email,
                    password,
                    userName,
                });
                await userTemp.save();
                const mailOptions = {
                    from: "sahilroyal91@gmail.com",
                    to: email,
                    subject: "OTP Verification",
                    text: `Your OTP for email verification is: ${otp}`,
                  }
                  await transporter.sendMail(mailOptions);
                  res.status(200).send({msg:'otp sent'})
            }
        } catch (error) {
            res.status(200).send({
                message: error.message,
            });
        }
    });
           
});
module.exports = UsertempRouter;

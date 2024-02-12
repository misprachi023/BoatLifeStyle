require("dotenv").config();
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const { connection } = require("./db");
const { userRouter } = require("./routes/UserRoutes"); 
const ProductModel = require("./models/productsModel");
const BlogModel = require("./models/blogModel");
const UsertemRouter = require("./routes/UsertempRoutes");
const {auth} = require("./middlewares/authMiddleware");
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(
	cors({ 
		origin: ["http://127.0.0.1:5173","https://boat-life-style-nine.vercel.app"],
		credentials: true,
	})
);
app.use(cookieParser()); 
app.get("/", (req, res) => {  
	res.status(200).send("this is a home page");
});
app.use("/user", userRouter);
app.get("/products", auth, async (req, res) => {
	try {
		const products = await ProductModel.find();
		res.status(200).send(products); 

	} catch (error) {
		res.status(500).send({
			message: error.message,
		});

	}
});
app.get("/products/search/:searchItem", async (req, res) => { 
    try {
        const {searchItem}  = req.params;
        console.log(searchItem)
        const products = await ProductModel.find({
            title: { $regex: searchItem, $options: "i" }, 
        });
		console.log(products)
        if (products) {
            res.status(200).send({products}); 
        } else {
            res.status(400).send({ msg: "data not found" });
        } 
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});
app.get("/blogs", async (req, res) => {
	try {
		const blogs = await BlogModel.find();
		console.log(blogs);
		res.status(200).send(blogs);
	} catch (error) {
		res.status(500).send({
			message: error.message,
		})
	}
})
app.use("/usertemp", UsertemRouter);

app.use((req, res) => {
	res.status(404).send("this is invalid request!");
});
app.listen(PORT, async (req, res) => {
	try {
		await connection;
		console.log(
			`server is running onn this port=>${PORT}, db is also connected`
		);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});
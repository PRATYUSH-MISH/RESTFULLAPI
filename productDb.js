const connectDb=require("./db/connect")
const Product = require("./models/Model")
require("dotenv").config();
const productJson=require("./products.json")
const start = async()=>{
    try {
        await connectDb(process.env.MONGODB_URL)
       //delte previous data and add new data
       await Product.deleteMany();
        await Product.create(productJson);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}
start();
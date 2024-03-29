const express=require('express')
require("dotenv").config();
const app =express();
const PORT=process.env.PORT|| 5000;
const products_routes=require("./routes/Products")
const connectDB=require("./db/connect");
app.get("/",(req,res)=>{
    res.send ("Its Working!");
});
//after defing all we need to set middleware or to set router
app.use ("/api/products",products_routes)
const start =async()=>{
    try {               //these parameter process .env.DATABASE_URL is for the database url it show security
        
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
  console.log(  `${PORT}  YES ITS CONNECTED!`  );
        });
    } catch (error) {
        console.log (error);
    }
}
start();
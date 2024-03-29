const express=require('express')
const router=express.Router()

const {getallproducts,getallproductTesting}=require("../controllers/products");
//this const will get data of  all products from the database   


              //if someone goes to home  page,send them the index file in views folder
router.route('/').get(getallproducts);//getallproducts is function
router.route('/testing').get(getallproducts);
module.exports=router;
const Product = require("../models/Model")



const getallproducts = async (req, res) => {
    const { company, name, feature, sort, select } = req.query
    const queryObject = {};
    //filtering ///refer moongoose website

if (company) { queryObject.company = company; };
    if (name) { queryObject.name = { $regex: name, $options: "i" } };
    if (feature) { queryObject.feature = feature; }
    let apidata = Product.find(queryObject)
    //Sorting! algorithm:

    if (sort) {
        let selectFix = sort.split(",").join(" ")
        apidata = apidata.sort(sortFix)
    }
    if (select) {
       //let selectFix = select.replace(",", " ");
        let selectFix=select.split(",").join(" ")
        apidata = apidata.sort(selectFix)
    }

    console.log(queryObject);


    //will show whole data!
    const myData = await apidata;
    res.status(200).json({ myData ,nbHits:myData.length})
};
const getallproductTesting = async (req, res) => {



console.log(req.query);


    const myData = await Product.find(req.query).select("name company")
    //will show whole data!
    // console.log(req.query);
    res.status(200).json({ myData,nbHits:myData.length })
}
module.exports = { getallproducts, getallproductTesting };
//this two const variable and its data will go to Products.js
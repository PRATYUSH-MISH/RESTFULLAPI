const moongose = require("mongoose")
const productSchema = new moongose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: [true, 'Price must be required!'] },
    feature: { type: Boolean, default: false },
    rating: { type: Number, default: 4.9 },
    created: { type: Date, default: Date.now() },
    company: {
        type: String, enum: {
            values: ["apple", "dell", "mi", 'samsung'],
            message: `{VALUE} is not supported`,
        },
    },

});                          //Product will go to collection!
module.exports=moongose.model('Product',productSchema)
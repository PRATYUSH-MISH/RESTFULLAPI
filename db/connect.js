const moongoose=require("mongoose");
uri ='mongodb+srv://pratyush:pratyush@pratyush.v7o29hk.mongodb.net/?retryWrites=true&w=majority&appName=Pratyush'
//uri is used to call the database in atlas!
//no space  between "=" and uri because it's a keyword. 
//update the database curd operation if throw error
  



const connectDB=()=>{
   // console.log("conncetDB")
    
    return moongoose.connect(uri);
       

};
module.exports=connectDB;
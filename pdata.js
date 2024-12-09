const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/hoa-online-store")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    }
})

const Product = mongoose.model("product",newSchema)

module.exports=Product
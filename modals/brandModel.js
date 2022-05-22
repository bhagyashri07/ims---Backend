const mongoose=require('mongoose')

const brandSchema=mongoose.Schema({
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Users",
        required:true,
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    },
    category:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Categories",
        
    }
})

brandSchema.pre(/^find/,function(next){
    this.populate({
        path:"category"
    })
    next()
})
brandSchema.pre('save',function(next){
    this.populate({
        path:"user",
        select:"firstname"
})
next()
})
module.exports=mongoose.model("Brands",brandSchema)


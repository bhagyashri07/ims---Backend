const mongoose=require('mongoose')

const supplierSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"suppliers name cannot be empty"]

    },
    company:{
        type:String,
        required:[true,"company name cannot be empty"]

    },
    address:{
        type:String,
        required:[true,"Address cannot be empty"]

    },
    phone:{
        type:Number,
        required:[true,"please provide phone number"]
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Users",
        required:[true,"supplier should always be associated with the user ,this field cant be empty"]
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"active"
    }

})

supplierSchema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:'firstname lastname'
    })
    next()
})

module.exports=mongoose.model("Suppliers",supplierSchema);
const mongoose=require('mongoose')
const rezultat=new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    raceTime:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true

    },
    placement:{
        type:Number,
        required:true
    },
    utrka:{type:mongoose.Schema.Types.ObjectId,ref:'Utrka'}

    },
     {
    timestamps: true,
    });

  module.exports=mongoose.model('Rezultat',rezultat);
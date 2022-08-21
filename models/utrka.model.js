const mongoose=require('mongoose')
const utrka=new mongoose.Schema({
    raceName:{
        type:String,
        required:true
    },
    raceDate:{
        type:String,
        required:true
    },rezultats:[
        {
          type:mongoose.Schema.Types.ObjectId,
          ref:'Rezultat'
        }
      ]
    },
     {
    timestamps: true,
    });

  module.exports=mongoose.model('Utrka',utrka);
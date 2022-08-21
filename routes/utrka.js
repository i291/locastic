const express=require('express')
const router = express.Router()
const utrka=require('../models/utrka.model')
router.route('/saveutrka').post(async(request,response)=>{
        const novautrka=new utrka({
            raceName:request.body.raceName,
            raceDate:request.body.raceDate
        })
        await novautrka.save().then(() => response.json('race added!'))
        .catch(err => response.status(400).json('Error: ' + err));
       

  
})

module.exports=router;
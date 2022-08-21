const express=require('express')
const router = express.Router()
const rez=require('../models/rezultat.model')
const utrk=require('../models/utrka.model')
router.post('/saverezultat',async(request,response)=>{
    var uu= await utrk.find({raceName:request.body.name})
    const novirezultat=new rez({
        fullName:request.body.fullName,
        raceTime:request.body.raceTime,
        distance:request.body.distance,
        placement:request.body.placement,
        utrka:uu._id
    })
    await novirezultat.save().then(() => response.json('result added!'))
    .catch(err => response.status(400).json('Error: ' + err));
    

})
router.route('/long').get(async(req, res) => {
    const rezz=await rez.find({distance:'long'})
    res.json(rezz)
    
  });
  router.route('/medium').get(async(req, res) => {
    const rezz=await rez.find({distance:'medium'})
    res.json(rezz)
    
  });
  router.route('/update/:id').post(async(req, res) => {
    const fullName = req.body.fullName;
    const raceTime = req.body.raceTime;
    const id = req.params.id

  const rezu={
    fullName,
    raceTime,
  

  }
  const novirez=await rez.findByIdAndUpdate(id,rezu,{new:true})
  res.json(novirez)
  });



module.exports=router;
const Family = require('../models/familySchema')
const Vote = require('../models/votesSchema')

const ctrl = {}

ctrl.renderIndex = (req,res)=>{
    res.render('index')
}



ctrl.renderPercent = (req,res)=>{
    res.render('percent')
}
ctrl.sendFamily = async (req,res)=>{
    const findFamily = await Family.find({Grado:req.params.grade})
    res.send(findFamily)
}
ctrl.sendVote = async (req,res)=>{
    console.log(req.body);
    const fam = await Family.findOne({Familia:req.body.family})
    const result = await Vote.findOne()
    fam.Voto = true

    if(req.body.vote === 'no'){
        result.No += 1
    }else if(req.body.vote === 'yes'){
        result.Yes += 1
    }else{
        console.log('error');
    }
    fam.save()
    result.save()
    message = true
    res.redirect('result')
}

ctrl.renderResult = (req,res)=>{
    res.render('result')
}

ctrl.sendResults = async (req,res)=>{
    const result = await Vote.findOne()
    res.send(result)
}
module.exports = ctrl


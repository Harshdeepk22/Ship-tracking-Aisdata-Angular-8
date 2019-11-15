const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    
    numFragments :{type:Number},

    fragmentNum :Number,

    type:{type:Number},
    
    mmsi:{type:Number},
    
    mid:{type:Number}
})


module.exports=mongoose.model('data',userSchema)
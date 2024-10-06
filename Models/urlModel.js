const { timeStamp } = require("console")
const { Timestamp } = require("mongodb")
const mongoose = require("mongoose")
const urlSchema = new mongoose.Schema({
  shortId:{
    type:String,
    required:true,
    unique:true
  },
  originalId:{
    type:String,
    required:true
  },
  clicksHistory:[{timeStamp:{type:Number}}],
  totalclicks: {type:Number,default:0}
})

const URL = mongoose.model("URL",urlSchema)
module.exports = URL
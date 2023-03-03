const mongoose = require("mongoose")
const usuario = require("./usuario")
const Schema = mongoose.Schema
const userSchema  = new Schema({
    task:String,
    description:String,
    estado: Boolean,
    _idUser: { type: Schema.ObjectId, ref: usuario },
})


module.exports = mongoose.model("taskList", userSchema)
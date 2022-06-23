const mongoose = require('mongoose')

const ConselhoSchema = new mongoose.Schema({
    con_name: String,
    con_email:String,
    con_senha:String,
})
mongoose.model("conselho",ConselhoSchema)
const mongoose = require('mongoose')

const ReportSchema = new mongoose.Schema({
    name_student:String,
    cpf_student:String,
    endereco_student:String,
    cep_student:String,
    num_student:String,
    tel_student:String,
    moti_student:String,
    med_student:String,
})


mongoose.model("report",ReportSchema)
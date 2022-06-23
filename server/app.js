const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('./Conselho');
require('./ReportStudents');

app.use(express.json({ limit: '10kb' }), cors());

const Conselho = mongoose.model('conselho');
const ReportStudents = mongoose.model('report');



const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('conectado ao banco de dados mongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log('error', err);
});


// retorna escola
app.get('/conselho', (req, res) => {
  Conselho.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
// retornar reportstudents
app.get('/report', (req, res) => {
  ReportStudents.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// postar/enviar conselheiro
app.post('/conselho/send', (req, res) => {
  const conselho = new Conselho({
    con_name: req.body.con_name,
    con_email: req.body.con_email,
    con_senha: req.body.con_senha,
  });
  conselho
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


// postar/enviar report
app.post('/report/send', (req, res) => {
  const reportstudents = new ReportStudents({
    name_student: req.body.name_student,
    cpf_student: req.body.cpf_student,
    endereco_student: req.body.endereco_student,
    cep_student: req.body.cep_student,
    num_student: req.body.num_student,
    tel_student: req.body.tel_student,
    moti_student: req.body.moti_student,
    med_student: req.body.med_student,

  });
  reportstudents
    .save()
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

// excluir escola
app.post('/conselho/delete', (req, res) => {
  Conselho.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


// excluir report
app.post('/report/delete', (req, res) => {
  ReportStudents.findByIdAndRemove(req.body.id)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});



// criar nova escola
app.post('/conselho/update', (req, res) => {
  Conselho.findByIdAndUpdate(req.body.id, {
    con_name: req.body.con_name,
    con_email: req.body.con_email,
    con_senha: req.body.con_senha,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});


// atualizar reportagem
app.post('/report/update', (req, res) => {
  ReportStudents.findByIdAndUpdate(req.body.id, {
    name_student: req.body.name_student,
    cpf_student: req.body.cpf_student,
    endereco_student: req.body.endereco_student,
    cep_student: req.body.cep_student,
    num_student: req.body.num_student,
    tel_student: req.body.tel_student,
    moti_student: req.body.moti_student,
    med_student: req.body.med_student,
  })
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});





const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('server running');
});

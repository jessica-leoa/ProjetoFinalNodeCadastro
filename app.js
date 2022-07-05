//Importacção commonJS modules (Firebase)
require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const firebase = require('./firebase');

//Porta 
const port = 3000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//Criando aplicação WEB express
const app = express();

// Diretório padrao de views na raiz da aplicação
app.set('views', path.join(__dirname, 'views'));
// Template engine a ser utilizado pelo Express
app.set('view engine', 'pug');

app.listen(port, () => {
  console.log('Servidor rodando na porta '+ port);
});

//Rotas (End Points)
app.get('/', (req,res) => {
  res.render('index.pug');
});

//usando
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

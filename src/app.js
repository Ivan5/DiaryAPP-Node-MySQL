const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const customerRoutes = require('./routes/customer');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
  host:'localhost',
  user:'root',
  password:'',
  port:3306,
  database:'crud_node_mysql'
},'single'));

//routes
app.use('/',customerRoutes);

//Static files
app.use(express.static(path.join(__dirname,'public')));
//starting server
app.listen(app.get('port'),()=>{
  console.log('Server on port: ',app.get('port'));
});

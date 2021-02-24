const express =  require("express");
const mysql = require('mysql');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json);

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user : "root",
    password: "",
    database: "school"
})

mysqlConnection.connect((err)=>{
if(!err)
console.log("DB connection succeeded!!");
else
console.log("Connection failed \n Error: " );
})


app.get("/musili",(req,res)=>{
    mysqlConnection.query(`SELECT * FROM students`,(err,rows,fields)=>{
        if(err)
        res.send(err);
        else
        console.log(rows);
    });
});

app.listen(3000);
console.log("Listening to port 3000");
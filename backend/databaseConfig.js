const mysql =require('mysql')

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Suraj123',
    database:'laptop'
})

module.exports=connection
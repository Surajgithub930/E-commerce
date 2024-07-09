const express = require('express')
const db = require('./databaseConfig')
const productRouter = require('./routes/productRoute.js')
const adminRouter = require('./routes/adminRoute.js')
const cartRouter = require('./routes/cartRoute.js')
const clientRouter=require('./routes/clientRoute.js')
const cors = require('cors')


let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))



db.connect((err) => {
    if (err) throw err
    else {
        console.log('Database Connected')
    }
})

let productTableQuery = `create table if not exists product(
id int not null auto_increment,
productBrand varchar(255) null,
productConfig varchar(255) null,
productType varchar(255) null,
productPrice int null,
productRating varchar(255) null,
image varchar(255) null,
primary key(id));`

db.query(productTableQuery, (err, result) => {
    if (err) throw err
    else {
        console.log('Product Table Created')
    }
})

let adminTableQuery = `create table if not exists admin(
id int not null auto_increment,
Email varchar(255) null,
Password varchar(255) null,
primary key(id));`

db.query(adminTableQuery, (err, result) => {
    if (err) throw err
    else {
        console.log('Admin Table Created')
    }
})

let cartTableQuery = `create table if not exists cart(
id int not null auto_increment,
productBrand varchar(255) null,
productConfig varchar(255) null,
productType varchar(255) null,
productPrice int null,
productRating varchar(255)null,
image varchar(255)null,
primary key(id));`

db.query(cartTableQuery,(err,result)=>{
    if(err) throw err
    else{
        console.log('Cart Table Created')
    }
})


let clientTableQuery=`create table if not exists client(
id int not null auto_increment,
username varchar(255)null,
email varchar(255)null,
password varchar(255)null,
image varchar(255)null,
primary key(id));`

db.query(clientTableQuery,(err,result)=>{
    if(err) throw err
    else{
        console.log('Client Table Created')
    }
})

app.use('/api', productRouter)
app.use('/api', adminRouter)
app.use('/api', cartRouter)
app.use('/api',clientRouter)


app.listen(3500, () => {
    console.log('Server is running at on port 3500')
})
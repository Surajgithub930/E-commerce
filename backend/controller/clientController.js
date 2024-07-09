let db=require('../databaseConfig')

exports.saveClient=(req,res)=>{
    let {username,email,password}=req.body
    let image=req.file.filename
    let value=[[username,email,password,image]]
    let sql='insert into client(username,email,password,image)values?'
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send('Client Data Saved')
        }
    })
}


exports.clientLogin=(req,res)=>{
    let email=req.body.email
    let password=req.body.password
    let sql='select * from client where email=? and password=?'
    db.query(sql,[email,password],(err,result)=>{
        if(err) throw err
        else{
            if(result.length>0){
                res.send(true)
            }else{
                res.send(false)
            }
        }
    })
}





exports.createClient=(req,res)=>{
    let unique=req.params.unique

    let createTableQuery=`create table if not exists ${unique}(
    id int not null auto_increment,
    productBrand varchar(255)null,
    productConfig varchar(255)null,
    productPrice varchar(255)null,
    productType varchar(255)null,
    productRating varchar(255)null,
    image varchar(255)null, 
    primary key(id));`

    db.query(createTableQuery,(err,result)=>{
        if(err) throw err
        else{
            console.log('Client Table Created')
        }
    })
}


// exports.getClient=(req,res)=>{
//     let unique=req.params.unique
//     let sql='select * from client_detail where email=?'
//     db.query(sql,[unique+'@gmail.com'],(err,result)=>{
//         if(err) throw err
//         else{
//             res.json(result)
//         }
//     })
// }

exports.getClient=(req,res)=>{
    let unique=req.params.unique
    let sql='select * from client where email=?'
    db.query(sql,[unique + '@gmail.com'],(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}
let db = require('../databaseConfig')

exports.saveProduct = (req, res) => {
    let { productBrand, productConfig, productType, productPrice, productRating } = req.body
    let image=req.file.filename

    // let productBrand=req.body.productBrand
    // let productConfig=req.body.productConfig
    // let productPrice=req.body.productPrice
    // let productType=req.body.productType
    // let productRating=req.body.productRating
    // let image=req.file.filename
    let value = [[productBrand, productConfig, productType, productPrice, productRating,image]]
    let sql = 'insert into product(productBrand,productConfig,productType,productPrice,productRating,image) values?'
    db.query(sql, [value], (err, result) => {
        if (err) throw err
        else {
            res.send('Product Data Saved')
        }
    })
}

exports.getProduct = (req, res) => {
    let sql = 'select* from product'
    db.query(sql, (err, result) => {
        if (err) throw err
        else {
            res.json(result)
        }
    })
}

exports.deleteProduct = (req, res) => {
    let id = req.params.id
    let sql = 'delete from product where id=?'
    db.query(sql, [id], (err, result) => {
        if (err) throw err
        else {
            res.send('Product Data Deleted')
        }
    })
}

exports.updateProduct = (req, res) => {
    let id = req.params.id
    let newData = req.body
    let sql = 'update product set ? where id =?'
    db.query(sql, [newData, id], (err, result) => {
        if (err) throw err
        else {
            res.send('Product Data Updated')
        }
    })
}

exports.getProductById = (req, res) => {
    let id = req.params.id
    let sql = 'select * from product where id=?'
    db.query(sql, [id], (err, result) => {
        if (err) throw err
        else {
            res.json(result)
        }
    })
}

exports.searchProduct = (req, res) => {
    let inp = req.params.inp
    let sql = 'select * from product where   productType like ?'
    db.query(sql, ["%" + inp + "%"], (err, result) => {
        if (err) throw err
        else {
            res.json(result)
        }
    })
}
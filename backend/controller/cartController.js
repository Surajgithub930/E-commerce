let db = require('../databaseConfig')


exports.cartSave = (req, res) => {
    let { productBrand, productConfig, productType, productPrice, productRating } = req.body
    let unique=req.params.unique
    let image=req.body.image
    let value = [[productBrand, productConfig, productType, productPrice, productRating,image]]
    let sql = `insert into ${unique}(productBrand,productConfig,productType,productPrice,productRating,image) values?`
    db.query(sql, [value], (err, result) => {
        if (err) throw err
        else {
            res.send(true)
        }
    })
}

exports.getCart = (req, res) => {
    let unique=req.params.unique
    let sql = `select* from ${unique}`
    db.query(sql, (err, result) => {
        if (err) throw err
        else {
            res.json(result)
        }
    })
}

exports.deleteCart = (req, res) => {
    let id = req.params.id
    let unique=req.params.unique
    let sql = `delete from ${unique} where id =?`
    db.query(sql, [id], (err, result) => {
        if (err) throw err
        else {
            res.send('Cart Data Deleted')
        }
    })
}
const db = require('../databaseConfig')

// new added

exports.adminSave = (req, res) => {
    let { Email, Password } = req.body
    let value = [[Email, Password]]
    let sql = 'insert into admin(Email,Password) values ?'
    db.query(sql, [value], (err, result) => {
        if (err) throw err
        else {
            res.send('Admin Data Saved')
        }
    })
}

exports.adminLogin = (req, res) => {
    // let { Email, Password } = req.body
    let Email=req.body.Email
    let Password=req.body.Password
    let sql = 'select * from admin where Email= ? and Password=?'
    db.query(sql, [Email, Password], (err, result) => {
        if (err) throw err
        else {
            if (result.length > 0) {
                res.send(true)
            } else {
                res.send(false)
            }
        }
    })
}


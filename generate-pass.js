const bcrypt = require('bcrypt')
const saltRounds = 10
const password = process.argv.slice(2)[0]

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash)
    })
})

//lv@123
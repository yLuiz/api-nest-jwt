const crypt = require("crypto")
const baser64Url = require('base64url')

const header = {
    alg: 'HS256',
    typ: 'JWT'
}

//CORPO DE DADOS => Principais dados do token
const payload = {
    username: "yluiz@user.com",
    name: "Luiz Victor",
    exp: new Date().getTime() //Timestamp
}

const headerEncoded = baser64Url.encode(JSON.stringify(header))
const payloadEncoded = baser64Url.encode(JSON.stringify(payload))

const key = "yOq7gdXc8M9pNc0cT4DbNtHkJXCIZCxp"


const signature = crypt
     .createHmac('sha256', key)
     .update(`${headerEncoded}.${payloadEncoded}`)
     .digest("bin")


console.log(`${headerEncoded}.${payloadEncoded}.${baser64Url.encode(signature)}`)
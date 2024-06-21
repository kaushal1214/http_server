const expressjwt = require('express-jwt')
var jwt = require('jsonwebtoken');


const authenticate = expressjwt.expressjwt({ secret: "shhhhhhared-secret", algorithms: ["HS256"] })
var token = ()=>{
    return jwt.sign({ user: 'cdac' }, "shhhhhhared-secret");
}


module.exports = {
    authenticate,
    token
}
// All the methods related to the login will be here
const loginService = require('../services/loginService');

module.exports ={
    greetings(){
        return loginService.greetings(); //Method to return a simple message
    },
    authenticate(req, res){
        //Add additional checks here
        if(req.payload.email){
            return loginService.authentiate(req, res);  //Authenticate user and return jwt
        }else{
            return res.response({"error":"Please enter your email"}).code(500);
        }
        
    }
}

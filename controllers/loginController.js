// All the methods related to the login will be here
const loginService = require('../services/loginService');

module.exports ={
    greetings(){
        return loginService.greetings();
    },
    authenticate(req, res){
        //Add additional checks here
        if(req.payload.email){
            return loginService.authentiate(req, res);
        }else{
            return res.response({"error":"Please enter your email"}).code(500);
        }
        
    }
}

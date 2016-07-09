var myEcho = function() {};   

myEcho.prototype.alert = function() {  
    alert("I am a js plugin");  
};  

var myEcho = new myEcho();  
module.exports = myEcho;
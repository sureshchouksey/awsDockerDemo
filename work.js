var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(express.static('public'));

app.get('/login.html', function (req, res) {
    res.sendFile( __dirname + "/" + "login.html" );
 })
 app.get('/app.html', function (req, res) {
    res.sendFile( __dirname + "/" + "app.html" );
 })

 app.get('/fullname.html', function (req, res) {
    res.sendFile( __dirname + "/" + "fullname.html" );
})  

app.get('/process_get', function (req, res) {
    // Prepare output in JSON format
    response = {
       user_name:req.body.user_name,
       pass_ward:req.body.pass_ward
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

app.get('/',function(req,res){
    res.send('welcome to city')
});
app.get('/home',function(req,res){
    res.send("HOME")
});

app.get('/print',function(req,res){
    res.send('Prashant nair')
});

app.get('/add',function(req,res){
    var a = req.query.firstNumber;
    var b = req.query.secondNumber;
    var c = parseInt(a) + parseInt(b); 
    //var c = a+b;
    res.send("add="+c)});
app.get('/sub',function(req,res){
    var a = req.query.firstNumber;
    var b = req.query.secondNumber;
    var c = parseInt(a) - parseInt(b);
    res.send("sub="+c)});
app.get('/multi',function(req,res){
        var a = req.query.firstNumber;
        var b = req.query.secondNumber;
        var c = parseInt(a) * parseInt(b);
        res.send("multi="+c)});
app.get('/div',function(req,res){
            var a = req.query.firstNumber;
            var b = req.query.secondNumber;
            var c = parseInt(a) / parseInt(b);
            res.send("Div="+c)});

app.get('/printfullname',function(req,res){
                var a = req.query.firstname;
                var b = req.query.lastname;
                var c = a +' '+ b;
                res.send("print full name="+" "+c)});

app.get('/checkusernamepassward',function(req,res){
                    var username = req.query.username;
                    var passward = req.query.passward;
                    //var action = req.query.check;
                    var unp = {"usernamepassward":[
                            {"username":"john","passward":"j@town",},
                            {"username":"Smitha","passward":"live"},
                            {"username":"ronith","passward":"rwash"},
                            {"username":"roma","passward":"roy"},
                            {"username":"flue","passward":"luck"},
                            {"username":"sam","passward":"sonam",}]};
var z;
for (z=0; z<unp.usernamepassward.length; z++){
    var t = unp.usernamepassward[z].username; 
    var p = unp.usernamepassward[z].passward;
     if (username == t){
         if (passward == p){
        res.send("check="+true);
        break;
     }
     else{
         res.send("check="+false);
        break;
          } }
     else{
         if (z== (unp.usernamepassward.length-1)){
        res.send("check="+false);
        break;
         }
    }    
    }});

    app.get('/checkemailid',function(req,res){
        var emailid = req.query.emailid;
        //var action = req.query.check; 
        var eid = {"emailid":[{"email":"john@gmail.com"},
        {"email":"rayan@gmail.com"}]};
var m;
for (m=0; m<eid.emailid.length; m++){
var e = eid.emailid[m].email; 
if (emailid == e){
res.send("check="+"valid");
break;
}
else{if (m == (eid.emailid.length-1)){
res.send("check="+"invalid");
break;
}}}});

app.get('/otp.html', function (req, res) {
    res.sendFile( __dirname + "/" + "otp.html" );
})  
var seq;

app.get('/generateaotp',function(req,res){
    seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    res.send(seq);
})
app.get('/verifyotp.html', function (req, res) {
    res.sendFile( __dirname + "/" + "verifyotp.html" );
})
app.get('/verifyotp',function(req,res){
    var a = req.query.Enterotp;
    if (seq == a){
        res.send("otp no.="+"verified");
    }
    else{
        res.send("otp no. ="+"not verified");
    }});
    
    app.get('/family.html', function (req, res) {
        res.sendFile( __dirname + "/" + "family.html" );
    });
    app.get('/family',function(req,res){
    var firstname = req.query.firstname;
    var lastname = req.query.lastname;
    var age = req.query.age;
    var designation = req.query.designation;
    var relation = req.query.relation;
    var living = req.query.living;
    var z;
    var x = {"family":[
         	{"firstname":"john","lastname":"roy","age":56,"designation":"engineer","relation":"father","living":"londan"},
        	{"firstname":"Smitha","lastname":"roy","age":50,"designation":"house wife","relation":"mother","living":"londan"},
         	{"firstname":"ronith","lastname":"roy","age":32,"designation":"engineer","relation":"brother","living":"new york"},	
         	{"firstname":"roma","lastname":"roy","age":26,"designation":"artitect","relation":"sister","living":["canada","londan","America"]},
         	{"firstname":"flue","lastname":"luck","age":30,"designation":["artitect","engineer"],"relation":"brother in law","living":["canada","londan","America"]},
             {"firstname":"sam","lastname":"luck","age":6,"designation":"-","relation":"nephew","living":["canada","londan","America"]}]};
    
         x.family.push({"firstname":firstname,"lastname":lastname,"age":age,"designation":designation,
             "relation":relation,"living":living})   
    //res.send(x.family.push({"firstname":"firstname"+
    // "lastname":"lastname"+
    // "age":"age"+
    // "designation":"designation"+
    // "relation":"relation"+
    // "living":"living"}));
    var names='';
    for (z=0; z<x.family.length; z++){
        names+=x.family[z].firstname;
        
    }
    res.send(names) ;
});
        

// app.get('/calculator',function(req,res){
//     var a = req.query.firstnumber;
//     var b = req.query.Secondnumber;
//     var c = parseInt(a) + parseInt(b);
   
//     res.send('calculator= ' +c, req.query.firstnumber, req.query.secondnumber);
// });
// app.get('/calc',function(req,res){
//     //     var a=5,b=6;
//     // var c =a+b;
//          var a = req.query.firstNumber;
//          var b = req.query.secondNumber;
//         var c = parseInt(a) + parseInt(b);
//         // console.log(req.query);
//         res.send('calc= ' +c, req.query.userName, req.query.userName);
//         // res.send(req.query.userName);
//         // res.send(req.query.emailId);
//     });

/*app.get('/calc',function(req,res){
    //     var a=5,b=6;
    // var c =a+b;
         var a = req.query.firstNumber;
         var b = req.query.secondNumber;
        var c = parseInt(a) + parseInt(b);
        // console.log(req.query);
        res.send('calc= ' +c, req.query.userName, req.query.userName)
});*/

// app.get('/calc',function(req,res){
        
//          var a = req.query.firstNumber;
//          var b = req.query.secondNumber;
//         var c = parseInt(a) + parseInt(b);
//          //console.log(req.query);
//         //res.send('calc= ' +c, req.query.userName, req.query.userName)});
//         res.send('calc= ' +c)});

      
        /*app.get('/calc',function(req,res){
        
            var a = req.query.firstNumber;
            var b = req.query.secondNumber;
            var action = req.query.action;
           //var c = parseInt(a) + parseInt(b);
           
           //res.send('calc= ' +c)
           switch(action){
            case "add":
            var add = parseInt(a) + parseInt(b);
            res.send('add=' +add);
            break;
            case "sub":
            var sub = parseInt(a) - parseInt(b);
            res.send('sub=' +sub);
            break;
            case "multi":
            var multi = parseInt(a) * parseInt(b);
            res.send('multi=' +multi);
            break;
            case "div":
            var div = parseInt(a) / parseInt(b);
            res.send('div=' +div);
            break;
            default:
            res.send('try again');
            }});*/


var server = app.listen(8080,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("App is created and running the port 8080")
});

/*var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8085, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})*/



/*var cars = ["BMW","Volvo","m","e"];
var text = "";
var i;
console.log(cars.length);
for (i=0; i<cars.length;i++){
	//text = cars[i];
	console.log(cars[i]);
}
var a=4;
var b=3;

var x = multipication(4, 3);
console.log(x);
function multipication(a, b) {
	var p =  a * b;
	return p;
}
var a=1;
var b=2;
if (a<b){
	console.log("true");
}
else{
	console.log("false")
}
var a=1;
while ( a<10) {
	console.log("this is increaseing")
	a++;
}
function display() {
    var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}*/

/*First Name: <input type="text" id="myText" value="Mickey">

<p>Click the button to display the value of the value attribute of the text field.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}*/


/** Array,Object ,Json , For Loop
 * 
 * It is ordered list and stored in continues memore location.  

*/

/*var arrPerson = ['suresh','praveet','prashant','sandeep'];
//console.log(arrPerson[3]);

// String Method
//console.log(arrPerson.toString());


var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));

// Join Method
console.log(arrPerson.join("/"));

var fruits;
fruits = ["b","o","A","M"];
fruits[6]= "l";

console.log(fruits);*/

//var cars = ["audi","volvo","Bmw"];
//console.log(cars[0]);

//var person = {firstname:"jone", lastname:"Doe"};
//console.log(person["firstname"]);

//var fruits =["banana","orange","apple","mango"];
//console.log(fruits.toString());

//var fruits =["banana","orange","papaya"];
//console.log(fruits.join("*"));

// var fruits = ["banana","oranage","apple","mango"];
/*console.log(fruits.pop());
console.log(fruits.toString());

console.log(fruits.push("kiwi"));
console.log(fruits);

console.log(fruits.shift());
console.log(fruits.toString());*/

/*console.log(fruits.unshift("red"));
console.log(fruits.toString());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log (fruits[2]="kiwi");
//console.log(fruits.toString());
console.log(delete fruits[1]);
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.splice(2,0,"lemon"));
//console.log(fruits);
//console.log(fruits.splice(0,1));
//console.log(fruits);

var mygirls =["cecilie","lone"];
var myboys = ["Email","Tobias","linus"];
var mytoys = ["dogs"]
var mychildren = mygirls.concat(myboys,mytoys);
console.log(mychildren);*/

//var fruits = ["4","2","8","5","1"];
//var citrus = fruits.slice(1,3);
//console.log(citrus);
//console.log(fruits.sort());
//var app = fruits.sort();

//console.log(app.reverse());

/*var iplteam =["team a","team b","team c","team d"];
console.log(iplteam.toString());
console.log(iplteam.pop());
console.log(iplteam.toString());
console.log(iplteam.push("team e"));
console.log(iplteam.toString());
iplteam.unshift("team 0");
console.log(iplteam.toString());
iplteam.splice(2,0,"team t");
console.log(iplteam.toString());
iplteam.shift();
console.log(iplteam.toString());*/

/*var ipl =["delhi dare devils","banglore chalengers","chenai super kings","pune super kings","kolkata charges"];
//console.log(ipl);

if (ipl[3] == "pune super kings"){
	console.log("found");
}
else{
	console.log("no team found")
}*/

//var txt = "abcdefghijklmnopqrstuvwxyz";
//console.log(txt.length);

//var x = 'we are the 'lions' in world';
//console.log(x);

/*console.log("\"Hello \nDolly!\"");
var x="toll";
var y= new String("hignt");
console.log(typeof x, typeof y,x,y)


var x ="john";
var y = new String("john");

if (x==y){
	console.log("true")
}
else{
	console.log("false")
}

var str = "please locate where locate occurs"
var pos = str.search("locate");
//console.log(pos);
console.log(str.replace(/locate/g,"find"));
console.log(str.toUpperCase());
var x= new Date();
var days =["s","m","t","w","t","f","s",]
console.log(x.getDay());

var d = new Date();
console.log(d.getDate() + 50);
console.log(d);*/
// var d =new Date()
// var x =d.getDay()
//console.log(d.getDay());
/*if (x==0){
	console.log("sunday");
}
else {
	if (x==1){
		console.log("monday");
	}
	else{
		if(x==2){
			console.log("tuesday");
		}
		else{
			if(x==3){
				console.log("wednesday");
			}
			else{
				if(x==4){
					console.log("thursday");
				}
				else{
					if (x==5){
						console.log("friday");
					}
					else{
						if (x==6){
							console.log("saturday")
						}
					}
				}
			}
		}
	}
}

switch(x){
	case 10:
	console.log("sunday");
	break;
	case 11:
	console.log("monday");
	break;
	case 22:
	console.log("tuesday");
	break;
	case 34:
	console.log("wednesday");
	break;
	case 44:
	console.log("thursday");
	break;
	case 53:
	console.log("friday");
	break;
	case 62:
	console.log("saturday");
	break;
	default:
	console.log("try again")	
}

var a = 1;
var z = typeof a;
var m = a.toString()
console.log(z,m,typeof m);

var a = "99.9"
var v = typeof a;
var q = a.parseF

console.log()

var z = multi(100,200);
function multi(a,b){
	return(a*b);
}
console.log(z);

var d = new Date();
var x = d.getDay();
var z = daypresent(x)
console.log(z);

function daypresent(u){
	switch(u){
	case 0:
	return("sunday");
	break;
	case 1:
	return("monday");
	break;
	case 2:
	return("tuesday");
	break;
	case 3:
	return("wednesday");
	break;
	case 4:
	return("thursday");
	break;
	case 5:
	return("friday");
	break;
	case 6:
	return("saturday");
	break;
	default:
	return("try again")
	}
}

var x = {"employees":[
	{"firstname":"john","lastname":"doe"},
	{"firstname":"anna","lastname":"smith"},
	{"firstname":"peter","lastname":"jones"}]};


	console.log(x.employees[1].firstname+" "+
	x.employees[1].lastname);

var s = {"yas":[{"id":"car","name":"tata"},
{"id":"bus","name":"volvo"},
{"id":"bike","name":"bajaj"}]};

console.log(s.yas[1].id+" "+s.yas[1].name);

var s = {"id":"car","name":"tata",
"id1":"bus","name1":"volvo",
"id2":"bike","name2":"bajaj"};

console.log(s.id1+s.name1);

var arrPerson = [];
var person = {"name":"prashant","city":"pune","phoneNumber":99999999,
console.log(person)*/







// var x = {"family":[
// 	{"firstname":"john","lastname":"roy","age":56,"designation":"engineer","relation":"father","living":"londan"},
// 	{"firstname":"Smitha","lastname":"roy","age":50,"designation":"house wife","relation":"mother","living":"londan"},
// 	{"firstname":"ronith","lastname":"roy","age":32,"designation":"engineer","relation":"brother","living":"new york"},	
// 	{"firstname":"roma","lastname":"roy","age":26,"designation":"artitect","relation":"sister","living":["canada","londan","America"]},
// 	{"firstname":"flue","lastname":"luck","age":30,"designation":["artitect","engineer"],"relation":"brother in law","living":["canada","londan","America"]},
// 	{"firstname":"sam","lastname":"luck","age":6,"designation":"-","relation":"nephew","living":["canada","londan","America"]}]};

// //console.log(x.family.push({"firstname":"dany","lastname":"luck","age":4,"designation":"-","relation":"nephew","living":["canada","londan","America"]}));
// // console.log(x);
// // console.log(x.family);
// x.family.push({"firstname":"dany","lastname":"luck","age":4,"designation":"-","relation":"nephew","living":["canada","londan","America"]});
// var z;
// var l;
// for (z=0; z<x.family.length; z++){
// //console.log(x.family[z].age);
// //console.log(x.family[z].firstname+" "+x.family[z].lastname);
// //console.log(x.family[z].firstname+" - "+x.family[z].living);
// //console.log(x.family[z].firstname+" "+x.family[z].living);
// var q =x.family[z].living
// if (typeof q == "string"){
// console.log(x.family[z].firstname+" "+ q);
// }
// else { 
// 	//for(l=0;l<1;l++){
// 		console.log(x.family[z].firstname+" "+x.family[z].living[0])
// //	}
// }
// }

	//console.log(x.family[0].firstname+" "+x.family[0].lastname);
	//console.log(x.family[3].relation+" "+x.family[3].living);
//console.log(x.family[4].designation[1]+","+x.family[4].living[1]);
/*console.log(x.family[0].firstname+","
+x.family[1].firstname+","
+x.family[2].firstname+","
+x.family[3].firstname+","
+x.family[4].firstname+","
+x.family[5].firstname);*/


/*var cars = ["BMW","Volvo","m","e"];
var text = "";
var i;
console.log(cars.length);
for (i=0; i<cars.length;i++){
	//text = cars[i];
}*/



//for(z=0; z<x.family.length; z++){
//	console.log(x.family[z].firstname)
//}
//console.log(x.family[3].living);

// for(z=0; z<x.family[3].living.length;z++) {
// 	console.log(x.family[3].living[z] )
// }




// var http = require ("http");
// var express = require ("express");
// http.createServer(function(request,response){
// response.writeHead(200,{"content-type":"text/plain"});
// response.end("welcome to my programming world which is running by prashant");
// }).listen(8082);
// console.log("server is running on port 8082");



        






























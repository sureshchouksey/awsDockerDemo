
//    var seq =5741;
//    var a = 4567;
//    if (seq == a){
//        console.log("otp="+"verified");
//    }
//    else{
//        console.log("otp="+"not verified");
//    };
// 
var firstname = "ram";
    var lastname = "sigh";
    var age = 9;
    var designation = "police";
    var relation = "no";
    var living = "india"; 
    var z;
var x = {"family":[
    {"firstname":"john","lastname":"roy","age":56,"designation":"engineer","relation":"father","living":"londan"},
   {"firstname":"Smitha","lastname":"roy","age":50,"designation":"house wife","relation":"mother","living":"londan"},
    {"firstname":"ronith","lastname":"roy","age":32,"designation":"engineer","relation":"brother","living":"new york"},	
    {"firstname":"roma","lastname":"roy","age":26,"designation":"artitect","relation":"sister","living":["canada","londan","America"]},
    {"firstname":"flue","lastname":"luck","age":30,"designation":["artitect","engineer"],"relation":"brother in law","living":["canada","londan","America"]},
    {"firstname":"sam","lastname":"luck","age":6,"designation":"-","relation":"nephew","living":["canada","londan","America"]}]};

  x.family.push({"firstname":"firstname","lastname":"lastname","age":"age","designation":"designation",
    "relation":"relation","living":"living"})   
   
    var a = "reema";
    for (z=0; z<x.family.length; z++){
        //console.log(x.family[z].firstname);};
      //  console.log(x.family[z].firstname+" "+x.family[z].lastname+" "+x.family[z].age+" "+x.family[z].designation+
        //" "+x.family[z].relation+" "+x.family[z].living);};
        //console.log(x.family[0].firstname);
        
        if (a == x.family[z].firstname){
          console.log("same");
        }
        else{
          if ( a == (x.family[z].firstname.length-1))
          console.log("not same and try again")
          
        }};

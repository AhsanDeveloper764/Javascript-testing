///there are two types of data types first is primtive and second is non-primtive
//differen btw them call by value and call by refrence 
//ye difference is lye diya gya hy takay ap ye jan sko kay data ko store kis tarah krty hein or access kis trah krtay hein isi
//kee basis pr officialy two categorize rkhein hein non primtive is also known as refrence type
//primtive call by value hoty hein

//there are 7 primtive types
// string ,boolean,number,null ====> ye empty hota hy ,undefined ==> iska mtlb ap koi cheez declare krogay but abhi tak apny 
// define nhi kri hay or jab ap ksi variable ko undefined assign krty ho tw iska mtlb apka memory space declare hogya hay us variable ma
// ,symbol ===> ye ksi bhi value kom unique banany ma use hota hay jab ap advance javascript ma different jagah pr same vaariabel
// use krty hein tw uska hum 1 symbol dadatey hein unique krdatay heinz , BigInt ye simple number kee data type kee tah hota hy
// bas ismy hum scientific notation values declare krskty hein

//refrence types ====>> Arrays,Objects,function
//JavaScript is a dynamically typed language, meaning variable types are determined at runtime without explicit type declarations.

const score = 33;
const scoreValue = 100.3;
const isLoggedIn = false;
const temp = null;
let email;
const id = Symbol("124");
const anotherId = Symbol("124") //symbol liknay pr value false arhi hay but symbol hata dein tw value true hogee that's mean unique
console.log(id==anotherId);


const hero =['shaktiman','shahrukh',"salman"] //====>Array
const bigNumber = 1223453647384328239n /// ye small n likhny say javascript ma by default big int declare hoajta hay
const myObj ={
    name:"Ahasn_Ali",
    age: 22,
} 

const myFunction = function(){
    console.log("Hello_world")
}

const score = 400;
//  console.log(score);

 const balance =  new Number(100); //ye pattern kisi bhi datatype say identify kra skta hay
//  console.log(balance);

 const Curr_balance = 50000;
 const Widthdraw_amount = 30000;
 let declare_amount = Curr_balance - Widthdraw_amount;
 console.log(`Your transaction proceed has been completed and finally your save amount is,${declare_amount}`);
//  console.log(declare_amount.toString().length);
//  console.log(declare_amount.toFixed(2)); //ye hmein mostly ecommerce production pr use mai ata hay
// console.log(declare_amount.toPrecision(5));
// console.log(declare_amount.toLocaleString("en-IN")); ///ye hamari values ko string ma convert krdeta hay
 
 
// const number = new Number(300000);
// console.log(number.toString().length);
 

//***************MATH******************//
//math java ma built in hay or ye apnay ap ma 1 obj hay
console.log(Math);
console.log(Math.abs(-4)); //ye minus kee value ko plus ma change krdeta hay
console.log(Math.round(43.499));
console.log(Math.ceil(43.499));
console.log(Math.floor(43.499));
console.log(Math.max(43,543,23,442));
console.log(Math.min(43,543,23,442));
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1); // +1 say ab hamari value kbhi bhi zero nhi ahagee
const min = 10;
const max = 20;
console.log(Math.floor(Math.random(max * min + 1) * min));

// let myDate = new Date() //we have create a instance is date kay method say hum real time date nikal skty hein
// console.log(myDate);
// console.log(myDate.toString()); // i have checked every method one by one 
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,4) //javascript ma month zero say start
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocalString('en-pk'));
// console.log(myCreatedDate.toLocalString());

// let TimeStamp = Date.now()
// console.log(Math.floor(TimeStamp/1000));

let date = new Date()
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getTime());

//toLocalString Kay andr hum object define krtay hein

console.log(date.toLocaleString('Default',{
    weekday:"short",
    year:"numeric"
}))


//press ctrl + space and then show all properties 
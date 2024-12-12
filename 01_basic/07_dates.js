// Dates

const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)  //0 = jan ,1 = feb ......
let myNewCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString());
// console.log(myNewCreatedDate.toLocaleString());

let myCreatedDateTwo = new Date("01-14-2023")
// console.log(myCreatedDateTwo.toLocaleString());

let myTimeStamp =Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDateTwo.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); //week day like mon, tue, wed, thur, fri, sat, sun


console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}));
 




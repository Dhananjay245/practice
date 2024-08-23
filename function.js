/*function print(){
    console.log("welcome to website");
}
print();

function printloop(){
    for(let i=0;i<=5;i++){
        console.log(i);
    }
}
printloop();

function dice(){
    let ran=Math.floor(Math.random()*6)+1;
    console.log(ran);
}
dice();



//function expression ---> we define functionn but in a variable

let name= "amol";

let sum = function(a,b){
    return a + b;
}
sum(2,3);


//
let hello = function(){
    console.log("hello");
}


// high order functions
// a function that does one or both:
//takes one or multiple functions as arguments
/// return a function

/// arrow functions

const sum1 = (a,b) =>{
    console.log("sum of a and b is ",a+b);
};

///implicit arrow function

const mul = (a,b) => a*b;




// set timeOut Function
//This is an inbuilt function , window object function

console.log("HI IM YOUR DAD");

setTimeout(()=>{
    console.log("Amol");
},5000);

//set interval --> execute statement multiple times...

let id =setInterval(()=>{
    console.log("Hi im there");
},4000);
console.log(id); 


// closure 
// function along with it's lexical scope is called closure

function x(){
    let a = 7;
    function y(){
        console.log(a);
    }
    y()
}
x();

function y(){
let a =5;
 setTimeout(function x(){
    console.log(a);

 },5000);
 console.log("hII ")

}
y();


//higher order function
//-----> function that takes another function as argument and returns ffuncton from it is know as higher order function 
// call back function
function x(){
    console.log("kbi");
}

// higher order function
function y(x){
    (x);
}

let ar= [1,2,3,5];

function cal(ar){
    for (let i=0;i<ar.length;i++)
    console.log(Math.PI*radius*radius);
}

// map exapmple

let arr2 = [
    {firstname:"amol",lastname:"mhasane",age:21},
    {firstname:"dhananjay",lastname:"raut",age:24},
    {firstname:"shanla",lastname:"purohit",age:26}
    

];


//const a = arr2.map((x)=>{
//    return x.firstname+" "+x.lastname

//} );
//console.log(a);

//const b = arr2.reduce((age,elem)=>{
//    if (elem>age){
//        console.log(b)
        
//    }

//},0);

//b(22);

//filter and map together

const b = arr2.filter((x)=>x.age>22).map((x)=>x.firstname);
console.log(b);


//function call

function one(){
    return 1;

}

function two(){
    return one() + one ();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}
three();
*/

// h1 =document.querySelector('h1');
// setTimeout(()=>{
//     h1.style.color='red';
    
// },2000);


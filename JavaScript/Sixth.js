//Function -> a block of code which do some work

//create a function name and give its parameters inside the bracket
function sum(a,b) {
    //local variable -> works only inside a function
    console.log(a + b);
}
//call the function
sum(5,9);

//Arrow Functions -> compact way of writing a function
const diff = (x,y) =>{
    return x-y;
}
let val = diff(8,5);
console.log(val);

//ForEach loop for arrays -> to perform some calculations
let arr = [1,2,3,4,5];
//inside the parenthesis we create a callback function.
//a function to execute for each element in the array is called callback function.
arr.ForEach(function value(val){ //there are three default arguments val,idx and arr itself.
    console.log(val);
})

//map function -> to create a new array
let num = [77,54,89,24];
let NewArr = num.map(function print(val){
    return val*3;
})
console.log(NewArr);

//filter method -> to filter the array based on some condition
let n = [3,4,6,8,7,9,10,13,14];
let Newn = n.filter(function print(val){
    if(val%2 == 0){
        return val;
    }
})
console.log(Newn);

//reduce method -> 
let n1 = [5,8,2,4,3];
let largest = n1.reduce(function printLarge(prev,curr){
    return prev > curr ? prev : curr;
})
console.log(largest);
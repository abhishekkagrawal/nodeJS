function addNumbers(num1, num2){
       return num1+num2
}
console.log(addNumber(100,200))


var ans =  function addNumbers(n1,n2){
    return n1+n2;
}

console.log(ans(100,200))

//Arrow Function(Lambda expression)

var calIntrest11=function(baseAmt,intrestRate){
    return (baseAmt*intrestRate)/100
}
console.log(calIntrest11(15000,10))


 var calIntrest12 =(baseAmt,intrestRate)=>{
     return (baseAmt*intrestRate)/100;
 }
console.log(calIntrest12(15000,10))


var calIntrest13 =(baseAmt,intrestRate)=>(baseAmt*intrestRate)/100;

console.log(calIntrest13(15000,10)) 


var numList =[10,20,30,40,50,60,70,80,90];
var list =[10,20,'Staish Mahajan' , 992];



for(let i =0 ;i<numList.length;i++){
    console.log(numList[i]);
} 

for(let i in numList){
    console.log(numList[i])
}

for(let i of numList){
   if(i%2==0){

   }
}



var outerFunction=function(innerFunctionRef){
    innerFunctionRef()
}
outerFunction(
    function(){console.log("Hello World from inner function");
})

outerFunction(()=>{console.log("Hello World from inner function")})



numList.forEach(num =>{
    if(num%2==0){
        console.log(num+ ' Even');
    }
    else{
        console.log(num+ ' Odd');
    }
})


numList.forEach(num => console.log(num))
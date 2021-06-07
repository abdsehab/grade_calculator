var MathNumber = 5;
var lessthan  = 100-MathNumber;

if(lessthan<=20){
    console.log("You Got A+");
}

else if(20<lessthan && lessthan<=30){
    console.log("You Got A");
}

else if(30<lessthan && lessthan<=40){
    console.log("You got B");
}

else if(40<lessthan && lessthan <=50){
    console.log("You Got C");
}

else if(50<lessthan && lessthan <=60){
    console.log("You Got D");
}

else{
    console.log("You Fail in the exam");
}
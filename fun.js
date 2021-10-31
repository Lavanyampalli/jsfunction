function add(a,b)
{
return a + b;
}
function sub(a,b)
{
return a-b;
}
function div(a,b)
{
return a/b;
}
function mul(a,b)
{
return a*b;
}
const prompt = require('prompt-sync')();

while(1)
{
    var choice = prompt("Enter your choice : ");

    switch(choice)
    {
        case "1": 
         var num1=parseInt(prompt("Enter first number : "));
         var num2=parseInt(prompt("Enter second number : "));
        console.log(add(num1,num2));
        break;
        case "2": 
        var num1=prompt("Enter first number : ");
        var num2=prompt("Enter second number : ");
        console.log(sub(num1,num2));
        break;
        case "3": 
        var num1=prompt("Enter first number : ");
        var num2=prompt("Enter second number : ");
        console.log(div(num1,num2));
        break;
        case "4": 
        var num1=prompt("Enter first number : ");
        var num2=prompt("Enter second number : ");
        console.log(mul(num1,num2));
        break;
        default : console.log("Invalid option");

    }

}

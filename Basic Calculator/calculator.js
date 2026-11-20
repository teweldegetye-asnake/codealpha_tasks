document.querySelector("#ac").addEventListener("click",empty);
function empty(){
    document.querySelector("input[name='number']").value = 0;
}
document.querySelector("#x").addEventListener("click",function(){
    input.value = input.value.replace(/([0-9+\-*/\.()]$)/g,"");
});
const input = document.querySelector("input[name='number']");
document.querySelectorAll(".basicOperations").forEach(operation => { operation.addEventListener("click",function(){
    input.value +=operation.getAttribute("value");
    replacer();
});
});
function checkParenthesis(){
    const value = input.value;
    let count = 0;
    for(let inputs of value){
        if(inputs === "(") count++;
        if(inputs === ")") count--;
        if(count < 0) return alert("please,check parenthesis!");
    }
    input.value = value + ")".repeat(count);
}
document.querySelector("#equal").addEventListener("click",calculate);
function calculate(){//function calculate
    checkParenthesis();
    const result = " = " + eval(input.value);
    input.value += result;
}
document.querySelectorAll(".number").forEach(number => {number.addEventListener("click",function(){
    input.value += number.textContent;
    replacer();
});
});
function afterEqual(value){
    input.value = value;
}
document.addEventListener("keydown",function(event){
    if(event.target.tagName === "INPUT"){
        if(event.key === "Enter"){//outer
            calculate();
        }
        if(event.key === "Backspace"){
            event.preventDefault();
            input.value = input.value.slice(0,-1);
        }
        return;
    }
    if(event.key === "Enter"){//inner
        calculate();
        return;
    }
    if(event.key === "Backspace"){
        event.preventDefault();
       input.value = input.value.slice(0,-1);
       return;
    }
    if(input.value.includes("=")){afterEqual();}
    input.value += event.key;
    replacer();
});
input.addEventListener("input",replacer);
    function replacer(){
    input.value = input.value.replace(/[^0-9.()+\-*\/]/g,"");//Allowed symbols
    input.value = input.value.replace(/[\.+\-*\/]+([\.+\-*\/])/g,"$1");//Avoid operation sequentialness
    input.value = input.value.replace(/(\d*\.\d*)\./g,"$1");//Avoid decimal repeatition
    input.value = input.value.replace(/(^|[+\-*/])\./g,(whenMatchSymbol,takeAsymbol) => takeAsymbol + "0");//Adding 0 before dot when it is the beginning
    input.value = input.value.replace(/(^|[+\-*/])0([1-9])/,"$1$2");//Replacing 0s when it comes before a number
    input.value = input.value.replace(/(^|[(])[+\-*/]/,"$1s");//Avoid operataions come at the beginning & after (
    input.value = input.value.replace(/([0-9])([(])/g,"$1*$2");//Adding multipilication before (
    input.value = input.value.replace(/([)])([0-9])/g,"$1*$2");//Adding multiplication before )
}
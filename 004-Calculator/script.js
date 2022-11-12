let history = document.getElementById('history');
let screen = document.getElementById('screen');

let numbers = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');

let backspace = document.getElementById('backspace');
let clear = document.getElementById('clear');
let brackets = document.getElementById('brackets');

let sign = document.getElementById('sign');
let equal = document.getElementById('op');
let percent = document.getElementById('percent');

let resultDisplayed = false; //flag to keep an eye on what o/p is displayed

//click handlers to number buttons
for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(e){
        let currStr = screen.value;
        let lastChar = currStr[currStr.length - 1];

        //if result is not displayed, just keep adding
        if(resultDisplayed === false){
            screen.value += e.target.textContent;
        }
        else if(resultDisplayed === true && lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷' || lastChar === '%'){
            resultDisplayed = false;
            screen.value += e.target.textContent;
        }
        else{
            resultDisplayed = false;
            screen.value = "";
            screen.value += e.target.textContent;
        }
    });
}

//adding click handlers to operator buttons
for (let i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(e){
        //let currStr = input.innerHTML;
        let currStr = screen.value;
        let lastChar = currStr[currStr.length - 1];

        if(lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷'){
            let newStr = currStr.substring(0, currStr.length - 1) + e.target.textContent;
            screen.value = newStr;
        }
        else if(currStr.length == 0){
            //if the first key pressed is an operator
            console.log("Enter a Number First");
        }
        else{
            screen.value += e.target.textContent;
        }
    });
}

//adding click handlers to equal button
equal.addEventListener("click", function(e){
    history.value = screen.value;
    let inStr = screen.value;

    //forming an array of numbers
    let numbers = inStr.split(/\+|\-|\x|\÷|\%|\(|\)/g);
    let nums = numbers.filter(function(e){
        return e != "";
    });

    //forming an array of operators
    let ops = inStr.replace(/[0-9]|\./g,"").split("");

    console.log(nums);
    console.log(ops);
    console.log("------------------------------");
    
    //loop through the array and doing one op at a time
    //brackets -> divide -> multiply -> subtraction -> addition
    //as we move we alter the og numbers and operators array
    //the final element is the result

    let open = ops.indexOf("(");
    let closed = ops.indexOf(")");
    let elements = closed - open;
    while(open != -1){
        let subNum = nums.splice(open, elements);
        let subOp = ops.splice(open, elements + 1);
        //divide
        let div = subOp.indexOf("÷");
        while(div != -1){
            subNum.splice(div-1, 2, subNum[div-1]/subNum[div]);
            subOp.splice(div, 1);
            div = subOp.indexOf("÷");
        }
        //multiply
        let mul = subOp.indexOf("x");
        while(mul != -1){
            subNum.splice(mul-1, 2, subNum[mul-1]*subNum[mul]);
            subOp.splice(mul, 1);
            mul = subOp.indexOf("x");
        }
        //sub
        let min = subOp.indexOf('-');
        while(min != -1){
            subNum.splice(min-1, 2, subNum[min-1]-subNum[min]);
            subOp.splice(min, 1);
            min = subOp.indexOf("-");
        }
        //sum
        let plus = subOp.indexOf("+");
        while(plus != -1){
            subNum.splice(plus-1, 2, parseFloat(subNum[plus-1])+parseFloat(subNum[plus]));
            subOp.splice(plus, 1);
            plus = subOp.indexOf("+");
        }
        //percent
        open = ops.indexOf("(");
    }

    let percent = ops.indexOf("%");
    while(percent != -1){
        nums.splice(percent, 1, nums[percent]/100);
        ops.splice(percent, 1);
        /*if(percent == (nums.length - 1)){
            ops.splice(percent, 1);
        }
        else{
            ops.splice(percent, 1, 'x');
        }*/
        console.log(nums);
        console.log(ops);
        percent = ops.indexOf('%');
    }

    let divide = ops.indexOf("÷");
    while(divide != -1){
        nums.splice(divide, 2, nums[divide] / nums[divide + 1]);
        ops.splice(divide, 1);
        divide = ops.indexOf("÷");
    }

    let multiply = ops.indexOf("x");
    while(multiply != -1){
        nums.splice(multiply, 2, nums[multiply] * nums[multiply + 1]);
        ops.splice(multiply, 1);
        multiply = ops.indexOf("x");
    }

    let sub = ops.indexOf("-");
    while(sub != -1){
        nums.splice(sub, 2, nums[sub] - nums[sub + 1]);
        ops.splice(sub, 1);
        sub = ops.indexOf("-");
    }

    let sum = ops.indexOf("+");
    while(sum != -1){
        nums.splice(sum, 2, parseFloat(nums[sum]) + parseFloat(nums[sum + 1]));
        ops.splice(sum, 1);
        sum = ops.indexOf("+");
    }

    screen.value = nums[0]; //display the output
    resultDisplayed = true; //flag true if result is displayed
});

//clearing the input
clear.addEventListener("click", function(){
    screen.value = "";
});

//click handler for backspace
backspace.addEventListener("click", function(){
    let currStr = screen.value;
    let newStr = currStr.slice(0, -1);
    screen.value = newStr;
    if(currStr === ""){
        screen.value = "";
    }
});

//click handler for sign
sign.addEventListener("click", function(){
    let currStr = screen.value;
    //console.log(currStr);
    let newStr = currStr.slice(0, -3) + "(-";
    screen.value = newStr;
    //console.log(newStr);
});

//click handler for brackets
brackets.addEventListener("click", function(){
    let currStr = screen.value;
    let lastChar = currStr[currStr.length - 1];
    console.log(currStr);
    let bracket = currStr.includes('(');
    console.log(bracket);
    if(currStr == "" || lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷' || lastChar === '%'){
        let newStr = currStr + "(";
        screen.value = newStr;
    }
    else if(bracket === false){
        newStr = currStr + "x(";
        screen.value = newStr;
    }
    else{
        newStr = currStr + ")";
        screen.value = newStr;
    }
});

let number1 = 5;
let number2 = 10;
let number3 = 15;
let number4 = 20;

function checkEvenOdd(number) {

    if (number % 2 === 0) {
        console.log("The number " + number + " is even.");
        return "The number " + number + " is even.";
    } 
    else {
        console.log("The number " + number + " is odd.");
        return "The number " + number + " is odd.";
    }
}


checkEvenOdd(number1);
checkEvenOdd(number2);
checkEvenOdd(number3);
checkEvenOdd(number4);


function checkNumber() {

    let userNumber = document.getElementById("number").value;

    if (userNumber === "") {
        document.getElementById("result").innerText =
            "Please enter a number.";
        return;
    }

    let result = checkEvenOdd(Number(userNumber));

    document.getElementById("result").innerText = result;
}
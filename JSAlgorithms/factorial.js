const factorial = number => {
    return number < 2 ? 1 : number * factorial(number - 1);
};

document.getElementById("ex1").innerHTML = "Factorial 0: " + factorial(0);
document.getElementById("ex2").innerHTML = "Factorial 2: " + factorial(2);
document.getElementById("ex3").innerHTML = "Factorial 4: " + factorial(4);
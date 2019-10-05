const reverseInt = integer =>
    parseInt(
        integer
            .toString()
            .split("")
            .reverse()
            .join("")
    ) * Math.sign(integer);

document.getElementById("ex7").innerHTML = "Reverse 1234: " + reverseInt(1234);
document.getElementById("ex8").innerHTML = "Reverse -4321: " + reverseInt(-4321);
document.getElementById("ex9").innerHTML = "Reverse 192837465: " + reverseInt(192837465);
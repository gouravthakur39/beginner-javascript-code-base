const reverse = string =>
    string
        .split("")
        .reverse()
        .join("");

document.getElementById("ex4").innerHTML = "Reverse Hello: " + reverse("Hello");
document.getElementById("ex5").innerHTML = "Reverse World: " + reverse("World");
document.getElementById("ex6").innerHTML = "Reverse Javascript: " + reverse("Javascript");
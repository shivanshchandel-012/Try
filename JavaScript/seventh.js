let butt = document.createElement("button");
console.log(butt);
butt.innerHTML = "click me!";
document.querySelector("body").prepend(butt);
butt.style.backgroundColor = "red";
butt.style.color = "white";
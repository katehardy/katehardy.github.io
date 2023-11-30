

function darkMode() {
    if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white"; 
        document.body.style.color = "black";
        document.getElementById("dark-mode-button").textContent = "Dark Mode"; 
    } else {
        document.body.style.backgroundColor = "black"; 
        document.body.style.color = "white";
        document.getElementById("dark-mode-button").textContent = "Light Mode"; 
    }
}

function sayHello() {
    const name = prompt("what is your name?");
    alert("Hello, " + name + "!\n Welcome to Navigating Career Change ! ");
}

sayHello();
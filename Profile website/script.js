function sayHello() {
    const name = prompt("what is your name?");
    alert("Hello, " + name + "!\n Welcome to my website");
}

sayHello();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("you have rolled a " + dice + "!");
}

rollDice();

function jobsearch() {
    let months = 0;
    let dice = Math.floor(Math.random() * 6) + 1; 
    months += dice;
    alert("It will take you " + months + " months to get your first job as a developer");
}

jobsearch()

function comfortlevel(html, css, js) {
    const average = (html + css + js) / 3;
    if (average >= 7) {
        console.log("You are a pro !");
    } else if (average >= 4) {
        console.log("Don't worry, you're nearly there!");
    } else {
        console.log("If you keep trying you will get there!");
    }
}

comfortlevel(4,4,1);

function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundImage = "none";
    document.getElementById("#").style.color = "white";
}

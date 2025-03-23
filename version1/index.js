console.log('javascript linked ig');

const userInput = document.getElementById('userInput1');
const label1 = document.getElementById('label1');
const diddy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4sjr7wjbzMT8g2nNFLPoo5f785AGUtxDGQ&s";
const imagePlace = document.getElementById('image1');
const niggers = "https://cdn.discordapp.com/attachments/1335846784903286859/1353443574427025549/e060ac4a-f759-49ae-bd36-f18b5f7e82a0.png?ex=67e1ac0d&is=67e05a8d&hm=b40f2e92d2ed7aa0bf9a934883dd01570cd60b48a45cf4cfcda92acfc8f64170&";
const effect1 = document.getElementById('vine-boom');
const music1 = document.getElementById('music1');
const board = document.getElementById('board');
const hogRider = "https://c.tenor.com/Yy7am2uWXw0AAAAd/tenor.gif";

const commands = {
    'nigger': () => {
        music1.play();
        effect1.play();
        label1.textContent = "SUCCESS";
        imagePlace.style.display = "inline";
        imagePlace.src = niggers;
        imagePlace.height = counter;
        counter = counter + 50;
    },
    'reset': () => {
        location.reload();
    },
    'stop the music': () => {
      music1.pause();
    },
    'cheatsheet': () => {
        board.innerText = "ALL commands:\n" +
            "nigger/niggers/sajana : Summons niggers\n" +
            "reset/refresh/reload : reloads the page\n" +
            "stop the music : stops the music from playing\n" +
            "cheatsheet/cheat/sheet/codes/commands/help : Displays the cheatsheet(this)\n" +
            "hog rider/hoggy : Summons a hog rider\n" +
            "diddy/oil : Summons diddy\n";
        setTimeout(() => {
            board.innerHTML = "";
        }, 5000);
    },
    'hog rider': () => {
        music1.pause();
        imagePlace.style.display = "inline";
        imagePlace.height = 600;
        imagePlace.src = hogRider;
    },
    'diddy': () => {
        music1.pause();
        imagePlace.style.display = "inline";
        imagePlace.height = 600;
        imagePlace.src = diddy;
    }
}
const alternatives = {
    "niggers": "nigger",
    "sajana": "nigger", // command 1 fin
    "reload": "reset",
    "refresh": "reset", // command 2 fin
    // command 3 fin
    "cheat": "cheatsheet",
    "sheet": "cheatsheet",
    "codes": "cheatsheet",
    "commands": "cheatsheet",
    "help": "cheatsheet", // command 4 fin
    "hoggy": "hog rider", // command 5 fin
    "oil": "diddy", // command 6 fin
};

let counter = 50;

function submit()
{

    if (counter >= 200)
    {
        counter = counter - 100;
    }
    const actionKey = alternatives[userInput.value] || userInput.value;

    if (commands[actionKey]) {
        commands[actionKey]();
    } else {
        alert("Error try again?");
    }
}

function remove()
{
    let userInput2 = prompt("Enter one requirement for a nigger: ");
    if (userInput2 === "watermelon" || userInput2 === "kfc")
    {
        music1.pause();
        imagePlace.style.display = "none";
        alert("Correct, Niggers removed");
    } else {
        alert("WRONG !!!!");
    }
}
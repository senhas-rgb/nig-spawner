console.log("Javascript connected and working hopefully");

const holder = document.getElementById("imageHolder");
const userInput = document.getElementById("userInput");
const music1 = document.getElementById("music1");
const correct_emoji = "https://c.tenor.com/lqGQNlRz6g0AAAAd/tenor.gif";
const correct_emoji_sound = document.getElementById("effect1");
const wrong_emoji = "https://c.tenor.com/hIZ3rTWUGGoAAAAd/tenor.gif"
const wrong_emoji_sound = document.getElementById("effect2");

userInput.value = "";

function correct()
{
    holder.style.display = "inline";
    holder.src = correct_emoji;
    correct_emoji_sound.play();
    setTimeout(() => {
        holder.src = null;
    }, 3000);
}

function wrong()
{
    holder.style.display = "inline";
    holder.src = wrong_emoji;
    wrong_emoji_sound.play();
    setTimeout(() => {
        holder.src = null;
    }, 3000);
}

function main()
{
    userInput.style.display = "inline";
    music1.play();
    music1.loop = true;
    if (userInput.value === "") {
    } else if (userInput.value === "wrong") {
        wrong();
    } else if (userInput.value === "correct") {
        correct();
    } else {
        alert("Error");
    }
}
console.log('javascript linked ig');

const userInput = document.getElementById('userInput1');
const label1 = document.getElementById('label1');
const diddy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4sjr7wjbzMT8g2nNFLPoo5f785AGUtxDGQ&s";
const imagePlace = document.getElementById('image1');
const niggers = "https://cdn.discordapp.com/attachments/1335846784903286859/1353443574427025549/e060ac4a-f759-49ae-bd36-f18b5f7e82a0.png?ex=67e1ac0d&is=67e05a8d&hm=b40f2e92d2ed7aa0bf9a934883dd01570cd60b48a45cf4cfcda92acfc8f64170&";
const effect1 = document.getElementById('vine-boom');
const music1 = document.getElementById('music1');
const button1 = document.getElementById('button1');
const board = document.getElementById('board');
const hogRider = "https://c.tenor.com/Yy7am2uWXw0AAAAd/tenor.gif";

let counter = 20;

function submit()
{
    if (counter === 20 && userInput.value !== '')
    {
        music1.play();
    }
    if (userInput.value === "nigger" || userInput.value === "niger" || userInput.value === "sajana") {
        effect1.play();
        label1.textContent = "SUCCESS";
        imagePlace.style.display = "inline";
        imagePlace.src = niggers;
        imagePlace.height = counter;
        counter = counter + 50;

    } else if (userInput.value === "reset")
    {
        location.reload();
    } else if (userInput.value === "stop the music") {
        music1.pause();
    } else if (userInput.value === "cheatsheet") {
        board.innerHTML = "reset - reloads the page<br>stop the music - stops the background music <br> nigger/niger/sajana - summons niggers";
    } else if (userInput.value === "hog rider") {
        music1.pause();
        imagePlace.style.display = "inline";
        imagePlace.src = hogRider;
    } else {
        alert("wrong, try again");
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
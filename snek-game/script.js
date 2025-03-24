const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const upbtn = document.getElementById('up-btn');
const downbtn = document.getElementById('down-btn');
const leftbtn = document.getElementById('left-btn');
const rightbtn = document.getElementById('right-btn');


player.style.position = 'absolute';
player.style.top = '40px';
player.style.left = '225px';
player.style.right = '0px';
player.style.bottom = '0px';
player.style.width = '40px';
player.style.height = '45px';

const defaultTop = parseInt(player.style.top) || 0;
const defaultLeft = parseInt(player.style.left) || 0;
const defaultBottom = 500 - (parseInt(player.style.top) || 0);
const defaultRight = 645;


function up()
{
    let currentTop = parseFloat(player.style.top) || 0;
    if (currentTop === defaultTop) {
        player.style.top = defaultTop + 'px';
    } else {
        player.style.top = (currentTop - 20) + 'px';
    }
}

function down()
{
    let currentTop = parseFloat(player.style.top) || 0;
    if (currentTop === defaultBottom) {
        player.style.top = defaultBottom + 'px';
    } else {
        player.style.top = (currentTop + 20) + 'px';
    }
}
function left()
{
    let currentLeft = parseFloat(player.style.left) || 0;
    if (currentLeft === defaultLeft) {
        player.style.left = defaultLeft + 'px';
    } else {
        player.style.left = (currentLeft - 20) + "px";
    }
}
function right()
{
    let currentLeft = parseFloat(player.style.left) || 0;
    if (currentLeft === defaultRight) {
        player.style.left = defaultRight + 'px';
    } else {
        player.style.left = (currentLeft + 20) + "px";
    }
    console.log(currentLeft);
}

function game() {
    upbtn.addEventListener('click', up);
    downbtn.addEventListener('click', down);
    leftbtn.addEventListener('click', left);
    rightbtn.addEventListener('click', right);
}

game();
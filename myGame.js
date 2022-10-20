let player1 = document.getElementById("playerName1");
let player2 = document.getElementById("playerName2");
let firstPlayerName = document.getElementById("firstPlayerName");
let secondPlayerName = document.getElementById("secondPlayerName");
let firstPlayerPrompt = prompt("First player enter your name", "Adex");
let secondPlayerPrompt = prompt("Second player enter your name", "Adeolu");

firstPlayerName.innerHTML = firstPlayerPrompt;  secondPlayerName.innerHTML = secondPlayerPrompt;


function playerName() {
    if (firstPlayerPrompt != "" && secondPlayerPrompt != "") {
        player1.innerHTML = firstPlayerPrompt + " " + "time of clicked for successful draw";
        player2.innerHTML = secondPlayerPrompt + " " + "time of clicked for successful draw"
    }else {
        player1.innerHTML = "Player1 " + "time of clicked for successful draw";
        player2.innerHTML = "Player2 " + "time of clicked for successful draw";
    }

    if (firstPlayerPrompt == "" || null) {firstPlayerPrompt = "Player1"};
    if (secondPlayerPrompt == "" || null) {secondPlayerPrompt = "Player2"};
};window.onload = playerName;



function closeMe() {
    window.opener = self;
    window.close();
    
};




let openSidebar = document.getElementById("mySidebar");
let navIcon = document.getElementById("openBtn");
function openNav() {
  openSidebar.style.width = "30%";
  navIcon.style.marginLeft = "30%";
}

function closeNav() {
  openSidebar.style.width = "0";
  navIcon.style.marginLeft= "0";
};




let counter = 0;
let count = 0;
const play = document.getElementById("playbtn");
play.addEventListener("click", playLudo);
function playLudo() {
    counter+= 1;
    const firstOutput = document.querySelector("#output1");
    const secondOutput = document.querySelector("#output2");
    let fstDisplayTxt = document.getElementById("displayTxt1");
    let scdDisplayTxt = document.getElementById("displayTxt2");
    firstOutput.innerHTML = Math.floor(Math.random() * 6) + 1;
    secondOutput.innerHTML = Math.floor(Math.random() * 6) + 1;
    if (firstOutput.innerHTML >= 6 && secondOutput.innerHTML >= 6) {
        scdDisplayTxt.innerHTML = " You've successfully found double 6 after clicking in " + counter + " times";
        let display = " Your output is ";
        fstDisplayTxt.innerHTML =  display;
		alert("Hey! save your count times or time of clicked as " + counter + " before the next player start to click ")
        firstOutput.style.color = "blue";
        secondOutput.style.color = "blue";
        firstOutput.style.backgroundColor = "white";
        secondOutput.style.backgroundColor = "white";
		counter = 0;
    } else if (firstOutput.innerHTML <= 6 && secondOutput.innerHTML <= 6) {
        scdDisplayTxt.innerHTML = "Continue rolling the dies";
        display = " Your clicked output is ";
        fstDisplayTxt.innerHTML = display;
        firstOutput.style.color = "red";
        secondOutput.style.color = "red";
        firstOutput.style.backgroundColor = "black";
        secondOutput.style.backgroundColor = "black";
    }
    else {
        alert("Continue rolling the dies")
    }
 document.getElementById("displayTxt3").textContent = "You Just Clicked " + counter + " Times";
};


function save() {
    let saveEl = document.getElementById("save-el"); // previous element:
    let countStr = document.getElementById("input1").value + " - "; //anything input  + -  eg 2 -
    saveEl.textContent = saveEl.textContent + " " + countStr; // previous element + countStr    e.g  5 - 2 -
 };


 function save2() {
    let saveEl2 = document.getElementById("save-el2"); // previous element:
    let countStr2 = document.getElementById("input2").value + " - "; //anything input  + -  eg 2 -
    saveEl2.textContent = saveEl2.textContent + " " + countStr2; // previous element + countStr    e.g  5 - 2 -
 };


 function generate() {
   /*let image = document.createElement("img");
   image.src = "ade.png";
    let div = document.getElementById("gen-area1");
    div.appendChild(image);*/
    document.getElementById("totalVal").innerHTML = parseInt(document.getElementById("totalVal").innerHTML) + parseInt(document.getElementById("inpVal").value);
    document.getElementById("inpVal").value = count;
 };


function degenerate() {
     document.getElementById("totalVal").innerHTML = count;
};

function generate2() {
   /*let image = document.createElement("img");
   image.src = "adeadex.png";
    let div = document.getElementById("gen-area2");
    div.appendChild(image);*/
    document.getElementById("totalVal2").innerHTML = parseInt(document.getElementById("totalVal2").innerHTML) + parseInt(document.getElementById("inpVal2").value);
    document.getElementById("inpVal2").value = count;
 };


function degenerate2() {
     document.getElementById("totalVal2").innerHTML = count;
};


let winner = document.getElementById("finalbtn");
let totalValue1 = document.getElementById("totalVal");
let totalValue2 = document.getElementById("totalVal2");
let congratImage = document.getElementById("congratImg");
let displayCongratMsg = document.querySelector("#congratTxt")
let gif = document.getElementById("footer");
winner.addEventListener("click", whoWin);
function whoWin() {
    if (totalValue1.innerHTML < totalValue2.innerHTML) {
        displayCongratMsg.innerHTML = "Congratulation! " + firstPlayerName.innerHTML + " is the winner, " + secondPlayerName.innerHTML + " lost this time" ;
        congratImage.style.display = "block";
        gif.style.backgroundImage = "url('pic/congrats3.gif')";
    } else if (totalValue1.innerHTML == totalValue2.innerHTML) {
         displayCongratMsg.innerHTML = "No one is the winner, you both have the same scores, play the game for atleast one more time to decide the winner";
         congratImage.style.display = "none";
         gif.style.backgroundImage = "url(pic/congrats33.gif)";
    } else{
         displayCongratMsg.innerHTML = "Congratulation! " + secondPlayerName.innerHTML + " is the winner, " + firstPlayerName.innerHTML + " lost woefully to " + secondPlayerName.innerHTML ;
        congratImage.style.display = "block";
        gif.style.backgroundImage = "url('pic/congrats3.gif')";
    }
};

function whyClick() {
    alert("The save button is used to save each of your time of clicked or click time for a successful draw and they are entered into the space provided at the side of the save button.\n\nThe generate button is used to Input each digit from your time of clicked and for every digit you enter, click the Genearte button to decide the winner and once you are done inputing them, click the Winner button to see the winner. \n\nNote: The Reset button is used to clear the generated value")
}




function changeName() {
    newfirstPlayerName = prompt("Do you really want to change your name from, "  + firstPlayerName.innerHTML + " to another name? What's your new name as player1");
    newsecondPlayerName = prompt("Do you really want to change your name from, " + secondPlayerName.innerHTML + " to another name? Whats your new name as player2");
    firstPlayerName.innerHTML = newfirstPlayerName;  secondPlayerName.innerHTML = newsecondPlayerName;
    if (newfirstPlayerName != ""  && newsecondPlayerName != "") {
         player1.innerHTML = newfirstPlayerName + " " + "time of clicked for successful draw";
         player2.innerHTML = newsecondPlayerName + " " + "time of clicked for successful draw";
    } if (newfirstPlayerName == null || newsecondPlayerName == null) {
        firstPlayerName.innerHTML = firstPlayerPrompt//"player1";
        secondPlayerName.innerHTML = secondPlayerPrompt//"player2";
        player1.innerHTML = firstPlayerName.innerHTML + " " + "time of clicked for successful draw";
        player2.innerHTML = secondPlayerName.innerHTML + " " + "time of clicked for successful draw";
    }
};


function aboutUs() {
    alert("This game is designed and developed by Amole Adeolu. The game was developed in year 2022 by Adex. \n If you want to assist and encourage me, you can reach me @adeoluamole@gmail.com or at +2347033959586 ")
};


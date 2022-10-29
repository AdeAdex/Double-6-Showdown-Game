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
}window.onload = playerName;





/*let waitingTime = setTimeout(5000){
    function loading() {
        document.getElementById("main-container").innerHTML = null;//"Please wait, the game is loading";
    }
};*/












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
const firstOutput = document.querySelector("#output1");
const secondOutput = document.querySelector("#output2");
let fstDisplayTxt = document.getElementById("displayTxt1");
let scdDisplayTxt = document.getElementById("displayTxt2");
let check = document.getElementById("demo");
const play = document.getElementById("playbtn");
play.addEventListener("click", playLudo);
function playLudo() {
    counter+= 1;
    let sound = new Audio("Notification.wav");
    congratImage.style.display = "none";
    gif.style.backgroundImage = "url(pic/congrats33.gif)";
    displayCongratMsg.innerHTML = "";
    firstOutput.innerHTML = Math.floor(Math.random() * 6) + 1;
    secondOutput.innerHTML = Math.floor(Math.random() * 6) + 1;
    check.innerHTML = counter;
    if (firstOutput.innerHTML == 6 && secondOutput.innerHTML == 6) {
        scdDisplayTxt.innerHTML = " You've successfully found double 6 after clicking in " + counter + " times";
        let display = " Your output is ";
        fstDisplayTxt.innerHTML =  display;
		alert("Hey! save your count times or time of clicked as " + counter + " before the next player start to click ")
        firstOutput.style.color = "blue";
        secondOutput.style.color = "blue";
        firstOutput.style.backgroundColor = "white";
        secondOutput.style.backgroundColor = "white";
        sound.play();
        counter = 0;
    } else {
        scdDisplayTxt.innerHTML = "Continue rolling the dies";
        display = " Your clicked output is ";
        fstDisplayTxt.innerHTML = display;
        firstOutput.style.color = "red";
        secondOutput.style.color = "red";
        firstOutput.style.backgroundColor = "black";
        secondOutput.style.backgroundColor = "black";
    }
 
 document.getElementById("displayTxt3").textContent = "You Just Clicked " + counter + " Times";
};


let myinput = [];
document.getElementById("inputArray").innerHTML = myinput;
let input1 = document.getElementById("input1");
function save() {
    if (firstOutput.innerHTML != 6 && secondOutput.innerHTML != 6 ) {
        alert("You've not gotten anything to save. \nPlay the game untill you found double 6 \nThanks")
    } else if (input1.value != check.innerHTML) {
        alert("Kindly please check what you are inputting and makesure that your total number of click for a successful draw is the same as what your are inputting\nYour input should be:\n\n" + check.innerHTML )

    } else {
        let saveEl = document.getElementById("save-el"); // previous element:
        let countStr = input1.value + " - "; //anything input  + -  eg 2 -
        saveEl.textContent = saveEl.textContent + " " + countStr; // previous element + countStr    e.g  5 - 2 -
        

        let newinput = document.getElementById("input1").value;
        myinput[myinput.length] = newinput;
        document.getElementById("inputArray").innerHTML = myinput;
    }
    return input1.value = null;
 };




let myinput2 = [];
document.getElementById("inputArray2").innerHTML = myinput2;
let input2 = document.getElementById("input2");
 function save2() {
    if (firstOutput.innerHTML != 6 && secondOutput.innerHTML != 6 ) {
        alert("You've not gotten anything to save. \nPlay the game untill you found double 6 \nThanks")
    } else if (input2.value != check.innerHTML) {
        alert("Kindly please check what you are inputting and makesure that your total number of click for a successful draw is the same as what your are inputting\nYour input should be:\n\n" + check.innerHTML )

    } else {
        let saveEl2 = document.getElementById("save-el2"); // previous element:
        let countStr2 = input2.value + " - "; //anything input  + -  eg 2 -
        saveEl2.textContent = saveEl2.textContent + " " + countStr2; // previous element + countStr    e.g  5 - 2 -

        let newinput2 = document.getElementById("input2").value;
        myinput2[myinput2.length] = newinput2;
        document.getElementById("inputArray2").innerHTML = myinput2;
    }
     return input2.value = null;
 };


 function generate() {
    let geninputval = document.getElementById("inpVal");
    if(myinput.includes(geninputval.value)){
        totalValue1.innerHTML = parseInt(totalValue1.innerHTML) + parseInt(geninputval.value);
        geninputval.value = count;
    } else if (myinput == "") {
        alert("You've not gotten anything on your 'time of clicked for successful draw' Play the game and input your time of clicked there and then come back to generate some value here")
    }
    else{
        alert("Kindly please check the values in your 'time of clicked for successful draw' and makesure what you are inputting match a value there\n" + "Your values in your 'time of clicked for successful draw' are:\n" + myinput);
    }
};


function degenerate() {
    totalValue1.innerHTML = count;
};

function generate2() {
    let geninputval2 = document.getElementById("inpVal2");
    if(myinput2.includes(geninputval2.value)){
        totalValue2.innerHTML = parseInt(totalValue2.innerHTML) + parseInt(geninputval2.value);
        geninputval2.value = count;
    } else if (myinput2 == "") {
        alert("You've not gotten anything on your 'time of clicked for successful draw' Play the game and input your time of clicked there and then come back to generate some value here")
    }
    else{
        alert("Kindly please check the values in your 'time of clicked for successful draw' and makesure what you are inputting match a value there\n" + "Your values in your 'time of clicked for successful draw' are:\n" + myinput2);
    }
 };


function degenerate2() {
    totalValue2.innerHTML = count;
};


let winner = document.getElementById("finalbtn");
let totalValue1 = document.getElementById("totalVal");
let totalValue2 = document.getElementById("totalVal2");
let congratImage = document.getElementById("congratImg");
let displayCongratMsg = document.querySelector("#congratTxt");
let counterincrease = 0;
let counterincrease2 = 0;
let gif = document.getElementById("footer");
winner.addEventListener("click", whoWin);
function whoWin() {
    let firstcounter = document.getElementById("firstCount");
    let secondcounter = document.getElementById("secondCount");
    if (totalValue1.innerHTML < totalValue2.innerHTML) {
        displayCongratMsg.innerHTML = "Congratulation! " + firstPlayerName.innerHTML + " is the winner, " + secondPlayerName.innerHTML + " lost this time" ;
        congratImage.style.display = "block";
        gif.style.backgroundImage = "url('pic/congrats3.gif')";
        counterincrease+= 1;
        firstcounter.innerHTML = counterincrease;
    } else if (totalValue1.innerHTML == totalValue2.innerHTML) {
         displayCongratMsg.innerHTML = "No one is the winner, you both have the same scores, play the game for atleast one more time to decide the winner";
         congratImage.style.display = "none";
         gif.style.backgroundImage = "url(pic/congrats33.gif)";
         counterincrease+= 0;
         counterincrease2+= 0;
         firstcounter.innerHTML = counterincrease;
         secondcounter.innerHTML = counterincrease2;  
    } else{
         displayCongratMsg.innerHTML = "Congratulation! " + secondPlayerName.innerHTML + " is the winner, " + firstPlayerName.innerHTML + " lost woefully to " + secondPlayerName.innerHTML ;
         congratImage.style.display = "block";
         gif.style.backgroundImage = "url('pic/congrats3.gif')";
         counterincrease2+= 1;
         secondcounter.innerHTML = counterincrease2;
    }

    if (firstcounter.innerHTML <= 0 && secondcounter.innerHTML <= 0) {
        alert("Winner can not be decided untill you generate users numbers of click.\nClick the 'Click To Play' button to play and get the required values")
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
        firstPlayerName.innerHTML = "player1"//firstPlayerPrompt//"player1";
        secondPlayerName.innerHTML = "player2"//secondPlayerPrompt//"player2";
        confirm("Since you cancel and decided not to input any name, your name has been Reset back to default. \nIf you really want to change your name, kindly re-click 'Change Name' button and input your new name. Thanks")
        player1.innerHTML = firstPlayerName.innerHTML + " " + "time of clicked for successful draw";
        player2.innerHTML = secondPlayerName.innerHTML + " " + "time of clicked for successful draw";
    }
    if (newfirstPlayerName == "" || newsecondPlayerName == "") {
        firstPlayerName.innerHTML = "player1"//firstPlayerPrompt//"player1";
        secondPlayerName.innerHTML = "player2"//secondPlayerPrompt//"player2";
        confirm("The name space can not be empty and since you decided not to input any name, your name has been Reset back to default. \nIf you really want to change your name, kindly re-click 'Change Name' button and input your new name. Thanks")
        player1.innerHTML = firstPlayerName.innerHTML + " " + "time of clicked for successful draw";
        player2.innerHTML = secondPlayerName.innerHTML + " " + "time of clicked for successful draw";
    }
};


function aboutUs() {
    alert("This game is designed and developed by Amole Adeolu. The game was developed in year 2022 by Adex. \n If you want to assist and encourage me, you can reach me @adeoluamole@gmail.com or at +2347033959586 ")
};


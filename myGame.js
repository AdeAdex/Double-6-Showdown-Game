
function openNav() {
  document.getElementById("mySidebar").style.width = "30%";
  document.getElementById("main").style.marginLeft = "30%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
};


let firstPlayer = prompt("First player enter your name", "Adex")
let secondPlayer = prompt("Second player enter your name", "Adeolu")
let counter = 0;
let count = 0;
function playLudo() {
    counter+= 1;
    document.getElementById("num1").innerHTML = Math.floor(Math.random() * 6) + 1;
    document.getElementById("num2").innerHTML = Math.floor(Math.random() * 6) + 1;
    if (document.getElementById("num1").innerHTML >= 6 && document.getElementById("num2").innerHTML >= 6) {
        document.getElementById("num3").innerHTML = " You've successfully found double 6 after clicking in " + counter + " times";
        let display = "Your output is "
        document.getElementById("num").innerHTML = display
		alert("Hey! save your count times or time of clicked as " + counter + " before the next player start to click ")
        document.getElementById("num1").style.color = "green";
        document.getElementById("num2").style.color = "green";
        document.getElementById("num1").style.backgroundColor = "white";
        document.getElementById("num2").style.backgroundColor = "white";
		counter = 0;
    } else if (document.getElementById("num1").innerHTML <= 6 && document.getElementById("num2").innerHTML <= 6) {
        document.getElementById("num3").innerHTML = "Continue rolling the dies"
        let display =  "Your clicked output is "
        document.getElementById("num").innerHTML = display
        document.getElementById("num1").style.color = "red";
        document.getElementById("num2").style.color = "red";
        document.getElementById("num1").style.backgroundColor = "black";
        document.getElementById("num2").style.backgroundColor = "black";
    }
    else {
        alert("Continue rolling the dies")
    }
 document.getElementById("dGame2").textContent = "You Just Clicked " + counter + " times";
};


function save() {
    let saveEl = document.getElementById("save-el"); // previous element:
    let countStr = document.getElementById("inp").value + " - "; //anything input  + -  eg 2 -
    saveEl.textContent = saveEl.textContent + " " + countStr; // previous element: + space + 2 -
 };


 function save2() {
    let saveEl2 = document.getElementById("save-el2"); // previous element:
    let countStr2 = document.getElementById("inp2").value + " - "; //anything input  + -  eg 2 -
    saveEl2.textContent = saveEl2.textContent + " " + countStr2; // previous element: + space + 2 -
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



function who() {
    if (document.getElementById("totalVal").innerHTML < document.getElementById("totalVal2").innerHTML) {
        document.getElementById("final2").innerHTML = "Congratulation! " + firstPlayer + " is the winner";
    } else if (document.getElementById("totalVal").innerHTML == document.getElementById("totalVal2").innerHTML) {
         document.getElementById("final2").innerHTML = "No one is the winner, you both have the same scores, play the game for atleast one more time to decide the winner"
    }
    else{
         document.getElementById("final2").innerHTML = "Congratulation! " + secondPlayer + " is the winner";
    }
};

function whyClick() {
    alert("The save button is used to save each of your time of clicked or click time for a successful draw and they are entered into the space provided at the side of the save button.\n\nThe generate button is used to Input each digit from your time of clicked and for every digit you enter, click the Genearte button to decide the winner and once you are done inputing them, click the Winner button to see the winner. \n\nNote: The Reset button is used to clear the generated value")
}



function playerName() {
     document.getElementById("dft").innerHTML = firstPlayer + " " + "time of clicked for successful draw";
     document.getElementById("dft2").innerHTML = secondPlayer + " " + "time of clicked for successful draw"
}
window.onload = playerName;



function changeName() {
    firstPlayer = prompt("Whats your new name player 1");
    secondPlayer = prompt("Whats your new name player 2") 
};


function aboutUs() {
    alert("This game is designed and developed by Amole Adeolu. The game was developed in year 2022 by Adex. \n If you want to assist and encourage us, you can reach us @adeoluamole@gmail.com or at +2347033959586 ")
};

function playerName() {
    if (firstPlayer != "" && secondPlayer != "") {
     document.getElementById("dft").innerHTML = firstPlayer + " " + "time of clicked for successful draw";
     document.getElementById("dft2").innerHTML = secondPlayer + " " + "time of clicked for successful draw"
 }else{
    alert("nothing")
 }
};

function closeMe() {
    window.opener = self;
    window.close();
    
};

//my question list
var qList = [
    ["What is the capital Nebraska?", "Lincoln", "Omaha", "Sioux Falls", "Sioux City", "Lincoln"],
    ["What is the capital Virginia?", "Arlington", "Fairfax", "Richmond", "Charlottesville", "Richmond"],
    ["What is the capital New York?", "New York City", "Albany", "Syracuse", "Buffalo", "Albany"],
    ["What is the capital New Mexico?", "Albuquerque", "New Mexico City", "Roswell", "Santa Fe", "Santa Fe"],
    ["What is the capital Idaho?", "Potato City", "Boise", "Helena", "Portland", "Boise"]
];
// keep score
var score = 0;
//keep count of questions
var qCounter = 0;
// this function is for loading questions and options to html
function qLoader() {
    var showQhere = document.getElementById("questions");
    var option1 = document.getElementById("choice1");
    var option2 = document.getElementById("choice2");
    var option3 = document.getElementById("choice3");
    var option4 = document.getElementById("choice4");
    var qText, ansOpt1, ansOpt2, ansOpt3, ansOpt4
    
    
    qText = qList[qCounter][0];
    ansOpt1 = qList[qCounter][1];
    ansOpt2 = qList[qCounter][2];
    ansOpt3 = qList[qCounter][3];
    ansOpt4 = qList[qCounter][4];

    showQhere.innerHTML = qText;
    option1.innerHTML = ansOpt1;
    option2.innerHTML = ansOpt2;
    option3.innerHTML = ansOpt3;
    option4.innerHTML = ansOpt4;
};
    evalAns();
    window.addEventListener("load", qLoader);
    
//this function is for comparing anwers

function evalAns () {
    var userAns, correctAns
    var bttn = document.querySelector(".button-grp");

    bttn.addEventListener("click", function() {
        if (bttn.click() === true) {
        bttn.children.innerHTML = userAns;};
        correctAns = qList[qCounter][5];
        if (userAns === correctAns) {
            score++;
            alert ("Your Score:" +" " +score + "\n" + "CORRECT!!")
        } else alert ("WRONG!!");});

        qCounter++;
    
    
};
qLoader();

var minDisplay = document.getElementById("minute");
var secDisplay = document.getElementById("second");
var playButton = document.getElementById("play");
var elapseTime = 0;
var secLeft = 20;
var totalSec


minDisplay.textContent = "00";


function timer(){
    
    elapseTime++
    secDisplay.textContent = (secLeft - elapseTime);
};

function startTimer() {

if (secLeft > 0){
totalSec = setInterval(timer, 1000);}

else clearInterval (totalSec);

};

playButton.addEventListener("click", startTimer);
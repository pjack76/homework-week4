//my question list
var qList = [
    ["What is the capital Nebraska?", "Lincoln", "Omaha", "Sioux Falls", "Sioux City", "A"],
    ["What is the capital Virginia?", "Arlington", "Fairfax", "Richmond", "Charlottesville", "C"],
    ["What is the capital New York?", "New York City", "Albany", "Syracuse", "Buffalo", "B"],
    ["What is the capital New Mexico?", "Albuquerque", "New Mexico City", "Roswell", "Santa Fe", "D"],
    ["What is the capital Idaho?", "Potato City", "Boise", "Helena", "Portland", "B"]
];
// keep score
var score = 0;
//keep count of questions
var qCounter = 0;
// this function is for loading questions and options to html
function qLoader() {
    var showQhere = document.getElementById("#questions");
    var option1 = document.getElementById("#choice1");
    var option2 = document.getElementById("#choice2");
    var option3 = document.getElementById("#choice3");
    var option4 = document.getElementById("#choice4");
    var qText, answer, ansOpt1, ansOpt2, ansOpt3, ansOpt4

    qText = qList[qCounter][0];
    ansOpt1 = qList[qCounter][1];
    ansOpt2 = qList[qCounter][2];
    ansOpt3 = qList[qCounter][3];
    ansOpt4 = qList[qCounter][4];

    showQhere.innerHTML += qText;
    option1.textContent += ansOpt1;
    option2.innerHTML += ansOpt2;
    option3.innerHTML += ansOpt3;
    option4.innerHTML += ansOpt4;
};

    window.addEventListener("load", qLoader);
    
//this function is for comparing anwers

function evalAns () {





qLoader();
};






//Creating variables for our code
let linesOfCode = 0;

let clickPower = 1;
let upgradeCost = 50;

let interns = 0;
let internCost = 100;

let erase = 0;
let eraseCost = linesOfCode;

function writeCode()
{
    linesOfCode = linesOfCode + clickPower;
    updateScreen();
}

function buyKeyboard()
{
    if(linesOfCode >= upgradeCost)
    {
        linesOfCode = linesOfCode - upgradeCost;
        clickPower = clickPower + 1;
        upgradeCost = upgradeCost * 1.5;
        updateScreen();
    }
}

function buyIntern()
{
    if(linesOfCode >= internCost)
    {
        linesOfCode = linesOfCode - internCost;
        interns = interns + 1;
        internCost = internCost * 1.5;
        updateScreen();
    }
}

function eraseProgress()
{
    if(linesOfCode >= eraseCost)
    {
        linesOfCode = linesOfCode - linesOfCode;
        erase = erase + 1;
        updateScreen();
    }
}

function updateScreen()
{
    document.getElementById("score-display").innerText = linesOfCode + " lines of code";

    document.getElementById("power-display").innerText = clickPower;
    document.getElementById("cost-display").innerText = upgradeCost;

    document.getElementById("intern-display").innerText = interns;
    document.getElementById("cost-intern-display").innerText = internCost;


    document.getElementById("erase-display").innerText = erase + " time(s)";
    document.getElementById("cost-erase-display").innerText = eraseCost;
}

//testing
setInterval(function() {
    if(interns > 0)
    {
        linesOfCode = linesOfCode + interns;
        updateScreen();
    }
},
1000
);
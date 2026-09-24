let amountRemaining = 100;
const amountDeposited = 10;
const amountWithdrawn = 10;

function depositMoney() {
    amountRemaining = amountRemaining + amountDeposited;

    const remainingText = document.getElementById("amount-remaining");
    const statusText = document.getElementById("status-message");

    remainingText.innerText = amountRemaining;

    if(amountRemaining > 0)
    {
        remainingText.innerText = amountRemaining;
        statusText.innerText = "Cha-Ching!";
    }
}


function withdrawMoney() {
    amountRemaining = amountRemaining - amountWithdrawn;

    const remainingText = document.getElementById("amount-remaining");
    const statusText = document.getElementById("status-message");

    remainingText.innerText = amountRemaining;

    if(amountRemaining > 0)
    {
        remainingText.innerText = amountRemaining;
        statusText.innerText = "Get Yourself Something Nice!";
    }
    else
    {
        remainingText.innerText = 0;
        statusText.innerText = "Bankrupt!";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("buttton").disabled = true;
        document.querySelector("buttton").innerText = "Broke";
    }
}
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
        statusText.style.color = "#ffffff";

        document.body.style.backgroundColor = "#008b8b";
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
        statusText.style.color = "#ffffff";

        document.body.style.backgroundColor = "#008b8b";
    }
    else
    {
        remainingText.innerText = 0;
        amountRemaining = 0;
        statusText.innerText = "Bankrupt!";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        // should we take this out??//
        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "Broke";
    }
}
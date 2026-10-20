let currentLevel = 1;

function levelUp()
{
    currentLevel++;
    //currentLevel = currentLevel + 1;
    document.getElementById("level").innerHTML = currentLevel;
}

function saveLevel()
{
    localStorage.setItem("savedLevel", currentLevel);
    alert("Level data saved!"); //put alert in function will help you tell if its worked or not//
}

function loadLevel()
{
    let retrievedData = localStorage.getItem("savedLevel"); //quotes must match the above function//

    if(retrievedData !== null)
    {
        currentLevel = retrievedData;
        document.getElementById("level").innerText = currentLevel;
    }
    else
    {
        alert("No save data found...");
    }
}
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
    let retrievedData = localStorage.getItem("savedLevel"); //quotes must match the setItem in above function//

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

function saveData()
{
    let typedText = document.getElementById("data-input").value; //id must match the one from index.html//
    sessionStorage.setItem("tempData", typedText);

    document.getElementById("data-input").value = ""; //to clear it//
}

function loadData()
{
    let savedText = sessionStorage.getItem("tempData");

    if(savedText !== null)
    {
        document.getElementById("data").innerText = savedText;
    }
    else
    {
        alert("No session data found");
    }
}
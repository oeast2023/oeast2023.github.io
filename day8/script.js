//Instead of creating a bunch of individual variables
//We can put multiple pieces of data in one place using arrays
//Arrays are created using []
//Arrays ensure you don't have to make a bunch of new variables, can be added to over time
const_contents = [
    "Health Potion",
    "Sword",
    "Shield",
    "Magic Book",
    "Pet Lizard"
];

function loadInventory() {
    const listElement = document.getElementById("item-list");

    listElement.innerHTML "";

    for(let i = 0; i < contents.length; 1++)
    // i = temporary variable; < = true/false statement; 1++ = adding 1 to i for each loop until the condition is no longer met
    {
        let currentItem = contents[i];

        let htmlToInject = "<li>" + currentItem + "</li>";
    // listElement = listElemenet + htmlToInject
        listElement += htmlToInject
    }

    document.querySelector("button").disabled = true;
    document.querySelector("button").innerText "Backpack Full";
}
// Initial data for things to see and do
const thingsToSee = ["Palais de la Nation", "Cathédrale Notre-Dame du Congo"];
const thingsToDo = [
    "Visit Lola ya Bonobo sanctuary",
    "Explore art at Académie des Beaux-Arts",
    "Shop at Marché Central"
];

// Function to display a list dynamically
function displayList(list, elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear existing content
    list.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        element.appendChild(li);
    });
}

// Initial display of the lists
displayList(thingsToSee, "thingsToSeeList");
displayList(thingsToDo, "thingsToDoList");

// Handle "Say Hi!" Button Click
document.getElementById("greetButton").addEventListener("click", () => {
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.textContent = "Hi there! Greetings from Kinshasa!";
});

// Handle "More Info" Button Click
document.getElementById("moreInfoButton").addEventListener("click", () => {
    const extraInfo = document.getElementById("extraInfo");
    if (extraInfo.textContent === "") {
        extraInfo.textContent = "Kinshasa, located along the Congo River, is known for its vibrant culture, music, and cuisine.";
    } else {
        extraInfo.textContent = "";
    }
});

// Handle "Add a Thing to Do" Button Click
document.getElementById("addThingToDoButton").addEventListener("click", () => {
    const newThing = prompt("Enter a new thing to do in Kinshasa:");
    if (newThing) {
        thingsToDo.push(newThing); // Add the new thing to the list
        displayList(thingsToDo, "thingsToDoList"); // Update the display
    }
});

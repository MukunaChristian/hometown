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


var total, rolls, dice, randomRoll, status2;

// Describe this function...
function calculateSum() {
    return rolls.reduce((a, b) => a + b, 0);
}

// Random roll function
function randomMember2(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Update the display logic
function updateDisplay() {
    total = calculateSum();
    let element_rolls = document.getElementById('rolls');
    element_rolls.innerText = rolls.join(", ") || "None";
    let element_sum = document.getElementById('sum');
    element_sum.innerText = total;
    let element_status = document.getElementById('status');

    if (total === 11) {
        element_status.innerText = 'You won!';
        document.getElementById('button_roll').disabled = true; // Disable the roll button when winning
    } else if (total > 11) {
        element_status.innerText = 'You lost!';
        document.getElementById('button_roll').disabled = true; // Disable the roll button when losing
    } else {
        element_status.innerText = 'Keep playing...';
    }
}

dice = [1, 2, 3, 4, 5];
rolls = [];
total = 0;
status2 = '';
updateDisplay();

// Event listener for the roll button
document.getElementById('button_roll').addEventListener('click', () => {
    if (total >= 11) return; // Prevent rolling when total is >= 11

    randomRoll = randomMember2(dice);
    rolls.push(randomRoll);
    updateDisplay();
});

// Event listener for the remove last roll button
document.getElementById('button_remove_last').addEventListener('click', () => {
    if (rolls.length > 0) {
        rolls.pop(); // Remove the last roll from the array
        updateDisplay(); // Update the display after removing the roll
    }
});

// Event listener for the restart button
document.getElementById('button_restart').addEventListener('click', () => {
    rolls = [];
    total = 0;
    document.getElementById('button_roll').disabled = false; // Enable the roll button again
    updateDisplay();
});

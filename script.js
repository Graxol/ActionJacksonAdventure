// Initialize the story text and buttons
let storyText = document.getElementById("story-text");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

// First scenario
function showScenario1() {
    storyText.innerText = "You find yourself at the entrance of a dark, mysterious cave. Strange sounds echo from inside. What will you do?";
    button1.innerText = "Enter the cave";
    button2.innerText = "Leave the cave";
    button1.onclick = showScenario2A;
    button2.onclick = showScenario2B;
}

// Scenario 2A: Enter the cave
function showScenario2A() {
    storyText.innerText = "You bravely enter the cave, ready for whatever it holds. Suddenly, you find a hidden door with glowing symbols.";
    button1.innerText = "Open the door";
    button2.innerText = "Leave the door alone";
    button1.onclick = showScenario3A;
    button2.onclick = showScenario3B;
}

// Scenario 2B: Leave the cave
function showScenario2B() {
    storyText.innerText = "You decide not to take any risks and leave the cave, looking for another way. You end up on a forest path.";
    button1.innerText = "Continue exploring the forest";
    button2.innerText = "Head home";
    button1.onclick = showScenario5A;
    button2.onclick = showScenario5B;
}

// Add further scenarios as needed...

// Start the story
showScenario1();

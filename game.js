// This function is called when the "Start the Adventure" button is clicked
document.getElementById("button1").onclick = startAdventure;

function startAdventure() {
    const storyText = document.getElementById("story-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    // Initial Story Text
    storyText.innerText = "You are at the entrance of a dense forest. Do you enter or turn back?";
    button1.innerText = "Enter the forest";
    button2.innerText = "Turn back";
    button2.style.display = "inline"; // Make button2 visible

    button1.onclick = enterForest;
    button2.onclick = turnBack;
}

// Scenario 1A: Enter the forest
function enterForest() {
    const storyText = document.getElementById("story-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    storyText.innerText = "The forest is dark and mysterious. You see a cave and a path. What do you do?";
    button1.innerText = "Enter the cave";
    button2.innerText = "Follow the path";

    button1.onclick = enterCave;
    button2.onclick = followPath;
}

// Scenario 1B: Turn back
function turnBack() {
    const storyText = document.getElementById("story-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    storyText.innerText = "You turn back and see a peaceful village. Do you explore the village or sit by a nearby lake?";
    button1.innerText = "Explore the village";
    button2.innerText = "Sit by the lake";

    button1.onclick = exploreVillage;
    button2.onclick = sitByLake;
}

// Scenario 2A: Enter the cave
function enterCave() {
    const storyText = document.getElementById("story-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    storyText.innerText = "The cave is dark. You find a glowing artifact and a locked chest.";
    button1.innerText = "Take the artifact";
    button2.innerText = "Try to open the chest";

    button1.onclick = takeArtifact;
    button2.onclick = openChest;
}

// Scenario 2B: Follow the path
function followPath() {
    const storyText = document.getElementById("story-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    storyText.innerText = "The path leads to a clearing with two strange creatures.";
    button1.innerText = "Talk to the creatures";
    button2.innerText = "Avoid them";

    button1.onclick = talkToCreatures;
    button2.onclick = avoidCreatures;
}

// Scenario 3A: Take the artifact
function takeArtifact() {
    const storyText = document.getElementById("story-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    storyText.innerText = "The artifact grants you incredible powers! What do you do?";
    button1.innerText = "Use the powers for good";
    button2.innerText = "Keep them secret";

    button1.onclick = usePowersForGood;
    button2.onclick = keepPowersSecret;
}

// Scenario 3B: Try to open the chest
function openChest() {
    const storyText = document.getElementById("story-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    storyText.innerText = "The chest is filled with gold coins. What do you do?";
    button1.innerText = "Take the gold";
    button2.innerText = "Leave it behind";

    button1.onclick = takeGold;
    button2.onclick = leaveGold;
}

// Scenario 3C: Talk to the creatures
function talkToCreatures() {
    const storyText = document.getElementById("story-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    storyText.innerText = "The creatures are friendly and guide you to a hidden treasure.";
    button1.innerText = "Follow their guidance";
    button2.innerText = "Decline their offer";

    button1.onclick = followCreatures;
    button2.onclick = declineCreatures;
}

// Scenario 3D: Avoid the creatures
function avoidCreatures() {
    const storyText = document.getElementById("story-text");
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    storyText.innerText = "You avoid the creatures and find a peaceful meadow.";
    button1.innerText = "Rest in the meadow";
    button2.innerText = "Continue exploring";

    button1.onclick = restInMeadow;
    button2.onclick = continueExploring;
}

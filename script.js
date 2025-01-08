const storyText = document.getElementById('story-text');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

let currentSituation = 0;

// Story situations
const situations = [
    {
        text: "You're exploring the jungle when you stumble upon a mysterious cave. Inside, you hear strange noises. What do you do?",
        option1: "Enter the cave cautiously.",
        option2: "Run away and find another adventure.",
        next1: 1,
        next2: 2
    },
    {
        text: "You enter the cave, and inside, you see a glowing treasure chest! Suddenly, the chest starts moving!",
        option1: "Open the chest carefully.",
        option2: "Run away and escape the cave.",
        next1: 3,
        next2: 4
    },
    {
        text: "You run away but trip over a vine, and the ground starts shaking. Something huge is coming!",
        option1: "Stand and fight the monster.",
        option2: "Hide and wait until it passes.",
        next1: 5,
        next2: 6
    },
    {
        text: "The treasure chest was a trap, and it opens to reveal a huge snake! You barely escape but are lost in the jungle.",
        option1: "Try to find your way out.",
        option2: "Climb a tree to look for help.",
        next1: 7,
        next2: 8
    },
    {
        text: "You manage to find a way out, but you're deep in the jungle now. A mysterious stranger offers you a magical amulet.",
        option1: "Take the amulet and trust the stranger.",
        option2: "Politely refuse and keep going.",
        next1: 9,
        next2: 10
    },
    {
        text: "You challenge the monster and manage to scare it off with a loud roar! You're a hero!",
        option1: "Go back to town and tell everyone about your adventure.",
        option2: "Keep exploring the jungle for more treasure.",
        next1: 11,
        next2: 12
    },
    // Continue adding situations...
];

// Function to update the story text and button options
function updateStory() {
    const situation = situations[currentSituation];
    storyText.textContent = situation.text;
    button1.textContent = situation.option1;
    button2.textContent = situation.option2;
}

// Function to handle the user's choice
function chooseOption(option) {
    const situation = situations[currentSituation];
    if (option === 1) {
        currentSituation = situation.next1;
    } else if (option === 2) {
        currentSituation = situation.next2;
    }
    updateStory();
}

// Initialize the first situation
updateStory();

const emojiData = [
  { description: "Smiling Face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
];

let currentEmoji = 0;
let finalScore = 0;
const guessEmoji = document.getElementById("guess");
const emoji = document.getElementById("emoji");
const results = document.getElementById("results");
const score = document.getElementById("score");

function displayEmoji() {
  emoji.textContent = emojiData[currentEmoji].emoji;
}

function checkGuess() {
  const guess = guessEmoji.value.trim().toLowerCase();
  const correctEmoji = emojiData[currentEmoji].description.trim().toLowerCase();

  if (correctEmoji === guess) {
    results.textContent = "Correct!";
    finalScore++;
  } else {
    results.textContent = `Wrong! The correct answer was: ${correctEmoji}`;
  }

  // Update the score
  score.textContent = `Score: ${finalScore}`;

  // Move to the next emoji after a delay of 2 seconds (2000 milliseconds)
  setTimeout(() => {
    currentEmoji = (currentEmoji + 1) % emojiData.length;
    displayEmoji();
    results.textContent = ""; // Clear the result text
    guessEmoji.value = ""; // Clear the input field for the next guess
  }, 2000);
}

// Call displayEmoji initially to show the first emoji
displayEmoji();

// Add event listener for the submit button
document.getElementById("submitGuess").addEventListener("click", checkGuess);

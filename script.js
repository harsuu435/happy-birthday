// Birthday wishes function
// Birthday wishes function without repeat
let usedWishes = []; // track used wishes

function wishBirthday() {
  const wishes = [
    "Happy Birthday! 🎉🎈",
    "May your day be full of joy and smiles!",
    "Janmdin Mubarak! 🎂",
    "Aapki zindagi khushiyon se bhari rahe ✨",
    "Wishing you success, health & happiness 🥳",
    "May all your dreams come true! 🎁",
    "Another year older, another year wiser 😄",
    "Stay blessed and keep smiling always 😊🎉",
    "Enjoy your special day to the fullest 🥳🎊",
    "Lots of love, laughter and cake for you 🎂❤️",
    "May God bless you with everything you deserve 🙏🎉"
  ];

  // Clear previous message
  const messageEl = document.getElementById("message");
  messageEl.innerHTML = "";

  // If all wishes used, reset
  if (usedWishes.length === wishes.length) {
    usedWishes = [];
  }

  // Pick next unused wish line by line
  let startIndex = usedWishes.length; // start from next unused line
  usedWishes.push(wishes[startIndex]);

  // Display all used lines sequentially
  usedWishes.forEach((line, index) => {
    const span = document.createElement("span");
    span.textContent = line;
    span.style.display = "block";
    span.style.opacity = 0;
    span.style.transition = "opacity 0.5s";
    messageEl.appendChild(span);

    setTimeout(() => {
      span.style.opacity = 1;
    }, index * 50); // 600ms gap between lines
  });

  document.getElementById("cake").classList.remove("hidden");
}

// Background color change every 3 seconds
const colors = [
 "linear-gradient(135deg, #2b1055, #7597de)", // romantic night purple
"linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)", // romantic pink-purple
"linear-gradient(135deg, #1f1c2c, #e84393)", // dark pink love
"linear-gradient(135deg, #41295a, #2F0743)", // deep romantic violet
"linear-gradient(135deg, #000428, #004e92)" // moonlight blue
];

let index = 0;
setInterval(() => {
  document.body.style.background = colors[index];
  index = (index + 1) % colors.length;
}, 3000);

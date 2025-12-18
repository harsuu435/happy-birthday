// Birthday wishes function
function wishBirthday() {
  const wishes = [
    "Happy Birthday! 🎉🎈 May your day be full of joy and smiles!",
    "Janmdin Mubarak! 🎂 Aapki zindagi khushiyon se bhari rahe ✨",
    "Wishing you success, health & happiness on your birthday 🥳",
    "May all your dreams come true! Happy Birthday 🎁",
    "Another year older, another year wiser 😄 Happy Birthday!",
    "Stay blessed and keep smiling always 😊🎉",
    "Aaj ka din sirf aapke naam! Happy Birthday 🎂🎈",
    "Enjoy your special day to the fullest 🥳🎊",
    "Lots of love, laughter and cake for you 🎂❤️",
    "May God bless you with everything you deserve 🙏🎉"
  ];

  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
  document.getElementById("message").innerText = randomWish;
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

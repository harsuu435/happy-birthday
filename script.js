
    // 🎯 Typewriter effect for title
    const titleText = "Welcome 🎉";
    const titleEl = document.getElementById("title");
    let i = 0;
    function typeWriter() {
      if (i < titleText.length) {
       
        i++;
        setTimeout(typeWriter, 120);
      }
    }
    typeWriter();

    // 🎯 Random blessing changer
    const blessings = [
      "Khush raho, muskurate raho ✨",
      "Zindagi me hamesha aage badhte raho 🚀",
      "Har din naya mauka lekar aata hai 🌞",
      "Dost hamesha saath hote hain 🤝",
      "Dil se dua hai tumhari safalta ke liye 💫"
    ];
    document.getElementById("changeBlessing").addEventListener("click", () => {
      const blessingEl = document.getElementById("blessing");
      const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];
      blessingEl.textContent = randomBlessing;
    });

    // 🎯 Background gradient auto change
    const gradients = [
      "linear-gradient(to top right, #fbc2eb, #a6c1ee)",
      "linear-gradient(to top right, #ff9a9e, #fad0c4)",
      "linear-gradient(to top right, #a1c4fd, #c2e9fb)",
      "linear-gradient(to top right, #d4fc79, #96e6a1)",
      "linear-gradient(to top right, #fddb92, #d1fdff)"
    ];
    let g = 0;
    setInterval(() => {
      document.body.style.background = gradients[g];
      g = (g + 1) % gradients.length;
    }, 5000); // 5 sec me background change hoga
const moodData = {
  Happy: { bg: "#FFD93D", font: "#222222", img: "images/happy-emo.png" },
  Sad: { bg: "#3E6C9B", font: "#FFFFFF", img: "images/sad-emo.png" },
  Hungry: { bg: "#D64B00", font: "#FFFFFF", img: "images/hungry-emo.png" },
  Sleepy: { bg: "#5B4B8A", font: "#FFFFFF", img: "images/sleepy-emo.png" },
  Mad: { bg: "#A30000", font: "#FFFFFF", img: "images/mad-emo.png" },
  Excited: { bg: "#E63E6D", font: "#FFFFFF", img: "images/excited-emo.png" },
  Tired: { bg: "#6E707A", font: "#FFFFFF", img: "images/tired-emo.png" },
  Calm: { bg: "#5AAE9E", font: "#102019", img: "images/calm-emo.png" },
  Proud: { bg: "#6930C3", font: "#FFFFFF", img: "images/proud-emo.png" },
  Embarrassed: { bg: "#E7A1AF", font: "#222222", img: "images/embarrassed-emo.png" }
};

const greet = document.getElementById("greet");
const nameInput = document.getElementById("nameInput");
const moodDropdown = document.getElementById("moodDropdown");
const matchMood = document.getElementById("matchMood");
const emojiBox = document.getElementById("emojiBox");

nameInput.addEventListener("keyup", function () {
  const name = nameInput.value.trim();
  if (name) {
    greet.textContent = "Hey " + name + "! Choose your mood below.";
  } else {
    greet.textContent = "Hi, Welcome to Mood Changer App!";
  }
});

matchMood.addEventListener("click", function () {
  const selectedMood = moodDropdown.value;
  if (!selectedMood) return;

  const data = moodData[selectedMood];
  document.body.style.backgroundColor = data.bg;
  document.body.style.color = data.font;

  const userName = nameInput.value || "User";
  greet.textContent = userName + ", you are feeling " + selectedMood.toLowerCase() + "!";


  var img = document.createElement("img");
  img.src = data.img;
  img.alt = selectedMood + " emoji";
  img.style.width = "100px";
  img.style.height = "100px";
  img.style.transition = "transform 0.3s ease";

  //  onmouseover and onmouseout Hover effects
  img.onmouseover = function () {
    img.style.transform = "scale(1.3)";
  };
  img.onmouseout = function () {
    img.style.transform = "scale(1)";
  };

  // Create new text for the slected mood
  var text = document.createElement("p");
  text.className = "box-text";
  text.textContent = selectedMood;

  // Clearing previous content and adding new
  emojiBox.innerHTML = "";
  emojiBox.appendChild(img);
  emojiBox.appendChild(text);
});

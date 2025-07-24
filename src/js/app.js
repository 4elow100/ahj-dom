import goblinImage from "../img/goblin.png";

document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.querySelector(".game-container");
  let currentHole = null;
  let img;

  for (let i = 0; i < 16; i++) {
    const holeDiv = document.createElement("div");
    holeDiv.classList.add("hole");
    gameContainer.appendChild(holeDiv);
  }

  const holes = document.querySelectorAll(".hole");

  function getRandomHole() {
    return holes[Math.floor(Math.random() * holes.length)];
  }

  function createImage() {
    img = document.createElement("img");
    img.src = goblinImage;
    img.alt = "Goblin Image";
  }

  function moveImage() {
    let newHole;
    do {
      newHole = getRandomHole();
    } while (newHole === currentHole);
    newHole.append(img);
    currentHole = newHole;
  }
  createImage();
  moveImage();
  setInterval(moveImage, 2000);
});

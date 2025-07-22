import goblinImage from "../img/goblin.png"

document.addEventListener("DOMContentLoaded", () => {
  const holes = document.querySelectorAll(".hole");
  let currentHole = null;
  let img;

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

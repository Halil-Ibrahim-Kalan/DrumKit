function removeActiveClass(e) {
  e.target.classList.remove("activeKey");
}

function keyPressed(e) {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!key) return;
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  if (
    e.keyCode === 65 ||
    e.keyCode === 83 ||
    e.keyCode === 68 ||
    e.keyCode === 70 ||
    e.keyCode === 71 ||
    e.keyCode === 72 ||
    e.keyCode === 74 ||
    e.keyCode === 75 ||
    e.keyCode === 76
  ) {
    key.classList.add("activeKey");
  }
}

const keys = Array.from(document.querySelectorAll(".key"));

keys.forEach(key => key.addEventListener("transitionend", removeActiveClass));

window.addEventListener("keydown", keyPressed);






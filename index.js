const trueBtn = document.getElementById("true");
const falseBtn = document.getElementById("false");
const firework = document.getElementById("fireworks");
const auraCtr = document.getElementById("aura-counter");
const auraColor = document.getElementById("aura-color");
const gays = document.querySelectorAll(".gays");

let aura = 0;

trueBtn.addEventListener("click", () => {
  aura = aura + 1000;
  firework.style.display = "block";
  firework.style.animation = "fadeInOut 1s ease-in-out";
  //auraCtr.innerHTML = `IMOHANG AURA: <span id="aura-color">${aura}</span>`;
  auraColor.textContent = aura;

  if (aura > 0) {
    auraColor.style.color = "green";
  }

  setTimeout(() => {
    firework.style.animation = "";
    firework.style.display = "none";
  }, 1000);
});

falseBtn.addEventListener("click", () => {
  aura = aura - 1000;

  auraColor.textContent = aura;

  if (aura <= 0) {
    auraColor.style.color = "red";
  }

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const falseBtnWidth = falseBtn.offsetWidth;
  const falseBtnHeight = falseBtn.offsetHeight;

  let randomX = Math.random() * (screenWidth - falseBtnWidth);
  let randomY = Math.random() * (screenHeight - falseBtnHeight);

  falseBtn.style.position = "absolute";
  falseBtn.style.left = `${randomX}px`;
  falseBtn.style.bottom = `${randomY}px`;

  let randomGay = Math.floor(Math.random() * 3);

  gays[randomGay].style.display = "block";

  setTimeout(() => {
    gays[randomGay].style.display = "none";
  }, 200);
});

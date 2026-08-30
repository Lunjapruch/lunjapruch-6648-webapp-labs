// lib/problem4.js
const catEl = document.querySelector("#cat");
const staticCatSrc = "https://www.kasandbox.org/programming-images/animals/cat.png";
const speed = 200;

const startWalk = () => {
  let startTime = null;
  const catWidth = catEl.offsetWidth;
  const stopDistance = window.innerWidth - catWidth;

  const walkTheCat = (timestamp) => {
    if (startTime === null) startTime = timestamp;
    const secondsElapsed = (timestamp - startTime) / 1000;
    const distance = speed * secondsElapsed;

    if (distance >= stopDistance) {
      catEl.style.transform = `translateX(${stopDistance}px)`;
      catEl.style.width = catWidth + "px";
      catEl.src = staticCatSrc;
      return;
    } else {
      catEl.style.transform = `translateX(${distance}px)`;
      requestAnimationFrame(walkTheCat);
    }
  };

  requestAnimationFrame(walkTheCat);
};

window.addEventListener("load", startWalk);
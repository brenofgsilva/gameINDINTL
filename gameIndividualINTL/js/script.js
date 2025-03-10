const crabbo = document.querySelector(".crabbo");
const spike = document.querySelector(".spike");

const jump = () => {
  crabbo.classList.add("jump");

  setTimeout(() => {
    crabbo.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const spikePos = spike.offsetLeft;
  const crabboPos = window.getComputedStyle(crabbo).bottom.replace("px", " ");
  if (spikePos <= 110 && spikePos > 0 && crabboPos < 40) {
    spike.style.animation = "none";
    spike.style.left = `${spikePos}px`;

    crabbo.style.animation = "none";
    crabbo.style.bottom = `${crabboPos}px`;

    crabbo.src = "./assets/Dead Hit 03.png";
  }
}, 10);

document.addEventListener("keydown", jump);

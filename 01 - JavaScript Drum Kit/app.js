window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});
window.addEventListener("click", (e) => {
  let key;
  if (e.composedPath()[0].classList.contains("key")) {
    key = e.composedPath()[0];
  } else if (e.composedPath()[1].classList.contains("key")) {
    key = e.composedPath()[1];
  } else {
    return;
  }
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    key.classList.remove("playing");
  });
});

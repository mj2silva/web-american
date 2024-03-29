import initContactForm from "./modules/contactForm";
import Slider from "./modules/Slider";

const customerStories = [
  {
    message:
      "Puedo dar fe de que el programa regular es personalizado, ya que, empecé desde 0 y ahora puedo conversar con nativos.",
    author: "Elena Zavaleta",
  },
  {
    message:
      "Su programa realmente es intensivo, mejoré mi fluidez, pasé mi entrevista en inglés y logré mi ascenso.",
    author: "Juan Vela",
  },
  {
    message:
      "Recomiendo el taller con nativos, perfeccioné mi pronunciación y conseguí una media beca para mi maestría en USA.",
    author: "Sofía Martínez",
  },
  {
    message:
      "Recomiendo su programa de certificación, tenía dudas al principio, pero gracias a ALA, logré un puntaje de 96 en el TOEFL.",
    author: "Manuel López",
  },
];

document.addEventListener("readystatechange", () => {
  if (document.readyState == "complete") {
    initContactForm("contactForm");
    const slider = new Slider(customerStories);
    slider.initSlider();
  }
});

const customersPlayButton = document.getElementById("customers__play-button");
customersPlayButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  document.getElementById("customers-iframe").src += "?autoplay=1";
  document.getElementById("customers-iframe").classList.remove("hidden");
  document.getElementById("customers-cover").classList.add("hidden");
  document
    .getElementById("customers-player")
    .classList.add("customers__player--playing");
  customersPlayButton.classList.add("hidden");
});

const aboutPlayButton = document.getElementById("about-play-button");
aboutPlayButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  document.getElementById("about-iframe").src += "?autoplay=1";
  document.getElementById("about-iframe").classList.remove("hidden");
  document.getElementById("about-cover").classList.add("hidden");
  document.getElementById("about-video").classList.add("about__video--playing");
  aboutPlayButton.classList.add("hidden");
});

const flipCard = (cardId) => {
  const card = document.getElementById(cardId);
  if (card.classList.contains("teachers__card--flipped"))
    card.classList.remove("teachers__card--flipped");
  else card.classList.add("teachers__card--flipped");
};

const flipCard1 = document.getElementById("flip-card-1");
const resetCard1 = document.getElementById("reset-card-1");
flipCard1.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-1");
});

resetCard1.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-1");
});

const flipCard2 = document.getElementById("flip-card-2");
const resetCard2 = document.getElementById("reset-card-2");
flipCard2.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-2");
});

resetCard2.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-2");
});

const flipCard3 = document.getElementById("flip-card-3");
const resetCard3 = document.getElementById("reset-card-3");
flipCard3.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-3");
});

resetCard3.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-3");
});

const flipCard4 = document.getElementById("flip-card-4");
const resetCard4 = document.getElementById("reset-card-4");
flipCard4.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-4");
});

resetCard4.addEventListener("click", (ev) => {
  ev.preventDefault();
  flipCard("card-4");
});

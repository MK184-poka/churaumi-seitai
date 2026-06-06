const disabledLinks = document.querySelectorAll('a[aria-disabled="true"]');

disabledLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

const cards = Array.from(document.querySelectorAll(".voice-card"));
const prevButton = document.querySelector(".slider-button.prev");
const nextButton = document.querySelector(".slider-button.next");
let activeIndex = 0;

function showVoice(index) {
  if (!cards.length) return;
  activeIndex = (index + cards.length) % cards.length;
  cards.forEach((card, cardIndex) => {
    card.classList.toggle("is-active", cardIndex === activeIndex);
  });
}

prevButton?.addEventListener("click", () => showVoice(activeIndex - 1));
nextButton?.addEventListener("click", () => showVoice(activeIndex + 1));

window.setInterval(() => {
  showVoice(activeIndex + 1);
}, 6500);

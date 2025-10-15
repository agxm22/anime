// Simple animation on load
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".anime-card");
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    setTimeout(() => {
      card.style.transition = "0.79s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 150); // stagger effect
  });
});

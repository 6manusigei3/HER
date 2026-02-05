// Smooth page navigation
function navigateSmooth(url) {
  const card = document.querySelector('.card');
  if (!card) {
    window.location.href = url;
    return;
  }

  card.classList.add('fade-out'); // fade out
  setTimeout(() => {
    window.location.href = url;
  }, 600);
}

// Typed text effect
function typeText(element, text, speed = 40) {
  if (!element) return;
  element.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    const char = text.charAt(i);
    if (char === "\n") element.innerHTML += "<br>";
    else element.innerHTML += char;

    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

// Gift choice messages
function chooseGift(choice) {
  localStorage.setItem("giftChoice", choice);

  const result = document.getElementById("result");
  if (!result) return;

  let message = "";
  if (choice === "send") message = "Got it! I’ll make sure it reaches you on Valentine’s Day 💌";
  else if (choice === "save") message = "Perfect! Can’t wait to give this to you in person 🫶";
  else if (choice === "maybe") message = "I’ll do my best to be there with you on Valentine’s Day 🥹❤️";

  result.innerText = message;
}

// DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById("heart");
  const secret = document.getElementById("secret");

  if (heart && secret) {
    let clicks = 0;
    heart.addEventListener("click", () => {
      clicks++;
      if (clicks === 5) secret.classList.remove("hidden");
    });
  }

  // Only attach landing page buttons on index.html
  const landingButtons = document.querySelectorAll('body .card button');
  landingButtons.forEach(btn => {
    if (btn && btn.id === "") { // buttons with no ID
      btn.addEventListener('click', () => navigateSmooth('yes.html'));
      btn.addEventListener('mouseover', () => btn.style.transform = 'scale(1.05)');
      btn.addEventListener('mouseout', () => btn.style.transform = 'scale(1)');
    }
  });
});

function goYes() {
  window.location.href = "yes.html";
}

// Typed text effect (safe)
function typeText(element, text, speed = 40) {
  if (!element) return;

  let i = 0;
  element.innerText = "";

  const interval = setInterval(() => {
    element.innerText += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

// Gift choice logic
function chooseGift(choice) {
  localStorage.setItem("giftChoice", choice);

  const result = document.getElementById("result");
  if (!result) return;

  let message = "";
  if (choice === "valentine") {
    message = "Perfect 💌 I’ll send it to you on Valentine’s Day.";
  } else if (choice === "meet") {
    message = "Deal 🫶 I want to see your reaction in person.";
  } else {
    message = "I like that 😌 I’ll surprise you.";
  }

  result.innerText = message;
}

// Easter egg logic (safe)
window.onload = () => {
  const heart = document.getElementById("heart");
  const secret = document.getElementById("secret");

  if (!heart || !secret) return;

  let clicks = 0;
  heart.addEventListener("click", () => {
    clicks++;
    if (clicks === 5) {
      secret.classList.remove("hidden");
    }
  });
};


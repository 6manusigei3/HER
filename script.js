function goYes() {
  window.location.href = "yes.html";
}

// Typed text effect
function typeText(element, text, speed = 40) {
  let i = 0;
  element.innerText = "";
  const interval = setInterval(() => {
    element.innerText += text.charAt(i);
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

// Gift choice logic + memory
function chooseGift(choice) {
  localStorage.setItem("giftChoice", choice);

  let message = "";
  if (choice === "valentine") {
    message = "Perfect 💌 I’ll send it to you on Valentine’s Day.";
  } else if (choice === "meet") {
    message = "Deal 🫶 I want to see your reaction in person.";
  } else {
    message = "I like that 😌 I’ll surprise you.";
  }

  document.getElementById("result").innerText = message;
}

// Easter egg (heart click)
let clicks = 0;
const heart = document.getElementById("heart");
if (heart) {
  heart.addEventListener("click", () => {
    clicks++;
    if (clicks === 5) {
      document.getElementById("secret").classList.remove("hidden");
    }
  });
}

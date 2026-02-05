function goYes() {
  window.location.href = "yes.html";
}

// Typed text effect (works with spacing + line breaks)
function typeText(element, text, speed = 40) {
  if (!element) return;
  element.innerHTML = ""; // use innerHTML to allow <br>
  let i = 0;

  const interval = setInterval(() => {
    const char = text.charAt(i);
    if (char === "\n") {
      element.innerHTML += "<br>";
    } else {
      element.innerHTML += char;
    }
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
  if (choice === "date") {
    message = "Perfect 🥰 I can’t wait for our special date!";
  } else if (choice === "gift") {
    message = "Yay 🎁 I hope you love this little surprise!";
  } else if (choice === "surprise") {
    message = "Excited 😌 I’ll plan something just for you!";
  }

  result.innerText = message;
}

// Easter egg logic
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

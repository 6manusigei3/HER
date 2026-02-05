// Smooth page navigation for all buttons
function navigateSmooth(url) {
  const card = document.querySelector('.card');
  if (!card) {
    window.location.href = url;
    return;
  }

  card.classList.add('fade-out'); // fade out current card
  setTimeout(() => {
    window.location.href = url;
  }, 600); // match CSS transition duration
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
window.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById("heart");
  const secret = document.getElementById("secret");

  if (heart && secret) {
    let clicks = 0;
    heart.addEventListener("click", () => {
      clicks++;
      if (clicks === 5) {
        secret.classList.remove("hidden");
      }
    });
  }

  // Make landing page buttons responsive
  document.querySelectorAll('body .card button').forEach(btn => {
    btn.addEventListener('click', () => navigateSmooth('yes.html'));
    btn.addEventListener('mouseover', () => btn.style.transform = 'scale(1.05)');
    btn.addEventListener('mouseout', () => btn.style.transform = 'scale(1)');
  });
});

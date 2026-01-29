function goYes() {
  window.location.href = "yes.html";
}

function chooseGift(choice) {
  localStorage.setItem("giftChoice", choice);

  let message = "";
  if (choice === "valentine") {
    message = "Perfect 💌 I’ll send it to you on Valentine’s Day.";
  } else if (choice === "meet") {
    message = "Deal 🫶 I’ll save it for when we meet.";
  } else {
    message = "I like that 😌 I’ll surprise you.";
  }

  document.getElementById("result").innerText = message;
}

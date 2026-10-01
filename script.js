function trackTelegramClick() {
  if (typeof fbq === "function") {
    fbq("track", "Contact");
    fbq("trackCustom", "TelegramClick");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const countdown = document.getElementById("countdown");
  const text = document.querySelector(".countdown-text");

  if (!countdown) return;

  let seconds = 2;
  countdown.textContent = seconds;

  const timer = setInterval(function () {
    seconds--;

    if (seconds > 0) {
      countdown.textContent = seconds;
    } else {
      clearInterval(timer);
      countdown.textContent = "✓";

      if (text) {
        text.textContent =
          "Tap the profile photo or Telegram button to continue.";
      }
    }
  }, 1000);
});

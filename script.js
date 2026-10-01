function trackTelegramClick() {
  if (typeof fbq === "function") {
    fbq("track", "Contact");
    fbq("trackCustom", "TelegramClick");
  }
}

function trackLead() {

  if (typeof fbq === "function") {

    // Meta standard Lead event
    fbq("track", "Lead");

    // Optional custom event
    fbq("trackCustom", "TelegramClick");

  }

}

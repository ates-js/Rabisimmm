const messages = [
  "Hayır 😒",
  "Eminmisin?",
  "Tekrar düşün…",
  "son şans 🥺",
  "Tamam peki 😌"
];

const stickerImages = [
  "https://media.tenor.com/p2PNr5GAoJEAAAAj/pengu-pudgy.gif",
  "https://media.tenor.com/pkAWEgwDxmQAAAAj/tantrum-throwing-a-tanturm.gif",
  "https://media.tenor.com/UvrZorBccI0AAAAj/pengu-pudgy.gif"
];

let messageIndex = 0;
let stickerIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");
  const sticker = document.getElementById("sticker");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  stickerIndex = (stickerIndex + 1) % stickerImages.length;
  sticker.src = stickerImages[stickerIndex];

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);

  yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
  for (let i = 0; i < 10; i++) {
    createHeart();
  }

  setTimeout(() => {
    alert("YYYYYUUUUUUUPİİİİİİİ 💖 BİLİYORDUMMM!");
  }, 300);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💗";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}
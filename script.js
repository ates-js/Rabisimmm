const messages = [
 "Hayır 😒", "Emin misin? 🥺", "EKG düz çizgi oldu 📉", "Nabzım düştü 😭", "NST bozuldu 😔", "Kalbim ritim kaçtı 💔", "Doktorumm 🩺", "CPR lazım bana 😭", "Yoğun bakımlık oldum 🛏️", "Serum tak bana 😔", "Kalbime stent gerek 😭", "Tansiyonum düştü 🥲", "Bir doz sevgi yaz 😔", "MR sonucum kötü 😭", "Kalbim alarm veriyo 🚨", "Acile düştüm 😭", "Rapor yaz bari 🥺", "Nefesim kesildi 😔", "Kalbim fibrilasyon oldu 💔", "Bi reçete yaz 😭", "Aşkım kritik vaka 😔", "Trip teşhisi koydum 😭", "Beni taburcu et 😔", "Nabız 40 oldu 📉", "Dikiş at kalbime 😭", "Yoğun bakım full 😔", "Kalp grafiğim kötü 🥲", "Doktor hanım acill 😭", "Bence tedavi lazım 😌", "Affet geçsin 😭"
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
    alert("Seni üzmek istememiştim gerçekten… Ama iyi ki varsın, iyi ki benimlesin 🥹 Seninle konuşunca bütün kötü hisler geçiyo. Gülüşün bile terapi gibi 😭💖 Artık resmi olarak: Hasta → Mutlu hasta 😌");
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

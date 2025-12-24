const QRCode = require("qrcode");

const canvas = document.getElementById("qr-code");
const progressBar = document.getElementById("progress-bar");
const countdownEl = document.getElementById("countdown");
const QR_URL = "https://google.com/";
const REFRESH_INTERVAL = 60;

let countdown = REFRESH_INTERVAL;

function generateQR() {
  const code = Math.random().toString(36).substring(2, 6);

  QRCode.toCanvas(
    canvas,
    `${QR_URL}?r=${code}`,
    {
      width: 200,
      margin: 0,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    },
    (error) => {
      if (error) console.error("QR Kod hatası:", error);
    }
  );

  countdown = REFRESH_INTERVAL;
  updateProgress();
}

function updateProgress() {
  const percent = (countdown / REFRESH_INTERVAL) * 100;
  progressBar.style.width = percent + "%";
  countdownEl.textContent = countdown;
}

setInterval(() => {
  countdown--;
  if (countdown <= 0) {
    generateQR();
  } else {
    updateProgress();
  }
}, 1000);

generateQR();

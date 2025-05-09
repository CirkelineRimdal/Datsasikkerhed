const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const result = document.getElementById("result");
const resultText = document.getElementById("resultText");

// Vis popup ved sideindlæsning
window.onload = function () {
  popup.style.display = "block";
  overlay.style.display = "block";
};

function handleChoice(choice) {
  let message = "";

  if (choice === 'click') {
    message = "⚠️ Du installerede en falsk antivirus og inficerede systemet - aldrig download fra virus pop-up bokse.";
  } else if (choice === 'close-button') {
    message = "✅ Du valgte at ignorere advarslen – klog beslutning.";
  } else if (choice === 'close-x') {
    message = "✅ Du lukkede vinduet via X – Altid en god ide!";
  }

  popup.style.display = "none";
  overlay.style.display = "none";
  result.classList.remove("hidden");
  resultText.textContent = message;
}

function goBack() {
  popup.style.display = "block";
  overlay.style.display = "block";
  result.classList.add("hidden");
}

function closeResult() {
    result.classList.add("hidden");
  }
  

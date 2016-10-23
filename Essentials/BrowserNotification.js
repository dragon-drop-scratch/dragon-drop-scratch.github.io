function detectBrowser() {
  if (navigator.userAgent.indexOf("Firefox") != -1) {
    showBanner();
  }
}
function showBanner() {
  var e = document.getElementById("browserNotification");
  e.style.opacity = 1;
  e.style.visibility = "visible";
}

window.addEventListener("load", detectBrowser);

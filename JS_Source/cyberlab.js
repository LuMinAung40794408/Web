function showEncode() {
  document.getElementById("encodePanel").classList.add("active-panel");
  document.getElementById("decodePanel").classList.remove("active-panel");

  document.getElementById("encodeTab").classList.add("active-tab");
  document.getElementById("decodeTab").classList.remove("active-tab");
}

function showDecode() {
  document.getElementById("decodePanel").classList.add("active-panel");
  document.getElementById("encodePanel").classList.remove("active-panel");

  document.getElementById("decodeTab").classList.add("active-tab");
  document.getElementById("encodeTab").classList.remove("active-tab");
}
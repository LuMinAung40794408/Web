function changeMission() {

  const messages = [
    "Security awareness begins with informed decisions.",
    "Strong passwords are the first line of digital defense.",
    "Stay alert. Stay secure. Stay informed.",
    "Cybersecurity is everyone’s responsibility."
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);

  document.getElementById("missionText").textContent = messages[randomIndex];
}


/* ================= SMOOTH SCROLL ================= */

function scrollToTools() {
  const tools = document.getElementById("tools");

  if (tools) {
    tools.scrollIntoView({
      behavior: "smooth"
    });
  }
}


/* ================= ARTICLE TOGGLE ================= */

function toggleArticle() {

  const article = document.getElementById("fullArticle");
  const button = document.querySelector(".read-btn");

  article.classList.toggle("active");

  if (article.classList.contains("active")) {
    button.textContent = "Hide Guide";
    article.scrollIntoView({ behavior: "smooth" });
  } else {
    button.textContent = "Read Full Guide";
  }

}


/* ================= TOGGLE DROPDOWN ================= */

function toggleProfile(){

  const dropdown = document.getElementById("profileDropdown");
  dropdown.classList.toggle("show");

  loadUserState();

}


/* ================= LOAD USER STATE ================= */

function loadUserState(){

  const username = localStorage.getItem("username");

  const navUser = document.getElementById("navUser");
  const loginSection = document.getElementById("loginSection");
  const profileSection = document.getElementById("profileSection");

  if(username){

    navUser.textContent = username;

    loginSection.style.display = "none";
    profileSection.style.display = "block";

    loadProfile();

  }else{

    navUser.textContent = "Login";

    loginSection.style.display = "block";
    profileSection.style.display = "none";

  }

}

/* ================= LOGIN ================= */

function loginUser(){

  let name = document.getElementById("usernameInput").value.trim();

  if(name === "") return;

  localStorage.setItem("username", name);

  // ENSURE CLEAN DATA
  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};

  if(!allUsers[name]){
    allUsers[name] = {
      lastScore: 0,
      bestScore: 0,
      quizScores: {}
    };
  }

  localStorage.setItem("usersData", JSON.stringify(allUsers));

  location.reload();
}

/* ================= LOGOUT ================= */

function logoutUser(){

  localStorage.removeItem("username");

  location.reload();

}

/* ================= LOAD PROFILE ================= */

function loadProfile(){

  let username = localStorage.getItem("username");

  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};

  let userData = allUsers[username];

  if(!userData){
    return;
  }

  // basic info
  document.getElementById("profileName").textContent = username;
  document.getElementById("lastScore").textContent = userData.lastScore || 0;
  let best = Math.max(
  userData.best_easy || 0,
  userData.best_medium || 0,
  userData.best_hard || 0
);

document.getElementById("bestScore").textContent = best;

  // badges
  updateBadge("badge_beginner", userData.badge_beginner, "Cyber Beginner");
  updateBadge("badge_expert", userData.badge_expert, "Cyber Expert");
  updateBadge("badge_master", userData.badge_master, "Cyber Master");
}

function updateBadge(id, unlocked, label){

  const badge = document.getElementById(id);

  if(!badge) return;

  if(unlocked){
    badge.innerHTML =
      '<i class="fa-solid fa-circle-check"></i> ' + label;
    badge.style.color = "#18b980";
  } else {
    badge.innerHTML =
      '<i class="fa-solid fa-lock"></i> ' + label;
    badge.style.color = "#d6dbe1";
  }
}

/* ================= CLOSE WHEN CLICK OUTSIDE ================= */

window.addEventListener("click", function(e){

  const menu = document.querySelector(".profile-menu");

  if(!menu.contains(e.target)){
    document.getElementById("profileDropdown").classList.remove("show");
  }

});

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", loadUserState);
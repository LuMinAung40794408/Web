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

function analyzePassword() {
  const password = document.getElementById("passwordInput").value;

  const lengthCheck = document.getElementById("lengthCheck");
  const upperCheck = document.getElementById("upperCheck");
  const lowerCheck = document.getElementById("lowerCheck");
  const numberCheck = document.getElementById("numberCheck");
  const specialCheck = document.getElementById("specialCheck");

  const result = document.getElementById("strengthResult");
  const fill = document.getElementById("strengthFill");
  const crackText = document.getElementById("crackTime");

  if (!password) {
    result.innerText = "";
    fill.style.width = "0%";
    crackText.innerText = "";

    lengthCheck.checked = false;
    upperCheck.checked = false;
    lowerCheck.checked = false;
    numberCheck.checked = false;
    specialCheck.checked = false;
    return;
  }

  //  RULE CHECKS
  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  lengthCheck.checked = hasLength;
  upperCheck.checked = hasUpper;
  lowerCheck.checked = hasLower;
  numberCheck.checked = hasNumber;
  specialCheck.checked = hasSpecial;

  //  CHARACTER POOL (entropy base)
  let pool = 0;
  if (hasLower) pool += 26;
  if (hasUpper) pool += 26;
  if (hasNumber) pool += 10;
  if (hasSpecial) pool += 32;
  if (pool === 0) pool = 1;

  // ENTROPY + CRACK TIME
  const entropy = Math.log2(Math.pow(pool, password.length));
  const guesses = Math.pow(2, entropy);
  const seconds = guesses / 1e10; // 10B guesses/sec

  const time = formatTime(seconds);

  //  SCORE BASED ON RULES
  const score = [
    hasLength,
    hasUpper,
    hasLower,
    hasNumber,
    hasSpecial
  ].filter(Boolean).length;

  let strength = "";
  let color = "";
  let width = 0;

  if (score <= 2) {
    strength = "Very Weak";
    color = "#ff4d4d";
    width = 20;
  } else if (score === 3) {
    strength = "Weak";
    color = "#facc15";
    width = 40;
  } else if (score === 4) {
    strength = "Good";
    color = "#22c55e";
    width = 70;
  } else {
    strength = "Strong";
    color = "#3b82f6";
    width = 100;
  }

  // APPLY UI
  fill.style.width = width + "%";
  fill.style.background = color;

  result.innerText = strength;
  result.style.color = color;

  crackText.innerHTML = "Estimated time to crack: <b>" + time + "</b>";
}


//  TIME FORMATTER 
function formatTime(seconds) {
  if (seconds < 60) return "Seconds";
  if (seconds < 3600) return "Minutes";
  if (seconds < 86400) return "Hours";
  if (seconds < 2592000) return "Days";
  if (seconds < 31536000) return "Months";
  if (seconds < 3153600000) return "Years";
  return "Centuries";
}

/* ================= URL Checker ================= */

// ===============================
//  Suspicious Keywords List
// ===============================
const suspiciousKeywords = [
  "login",
  "verify",
  "secure",
  "account",
  "update",
  "bank",
  "confirm",
  "password",
  "free",
  "bonus"
];

// ===============================
//  Detect keywords (boolean)
// ===============================
function hasSuspiciousKeywords(parsedUrl) {
  const target = (parsedUrl.hostname + parsedUrl.pathname).toLowerCase();

  return suspiciousKeywords.some(keyword =>
    target.includes(keyword)
  );
}

// ===============================
//  Get matched keywords (for display)
// ===============================
function getSuspiciousKeywords(parsedUrl) {
  const target = (parsedUrl.hostname + parsedUrl.pathname).toLowerCase();

  return suspiciousKeywords.filter(keyword =>
    target.includes(keyword)
  );
}

// ===============================
// Check if valid IP
// ===============================
function isValidIP(hostname) {
  const parts = hostname.split(".");
  if (parts.length !== 4) return false;

  return parts.every(part => {
    const num = Number(part);
    return num >= 0 && num <= 255;
  });
}

// ===============================
//  Check valid domain structure (FINAL)
// ===============================
function isValidDomainStructure(hostname) {

  if (!hostname.includes(".")) return false;

  const labels = hostname.split(".");

  for (let label of labels) {

    if (!label.length) return false;

    if (!/^[a-zA-Z0-9-]+$/.test(label)) return false;

    if (label.startsWith("-") || label.endsWith("-")) return false;
  }

  // check TLD
  const validTLDs = ["com", "org", "net", "edu", "gov"];

  const tld = hostname.split(".").pop().toLowerCase();

  if (!validTLDs.includes(tld)) {
    warnings.push("Uncommon or less trusted TLD (." + tld + ")");
  }
  return true;
}

// ===============================
//  VALIDATION (accept IP OR domain)
// ===============================
function validateURL(input) {
  try {
    const url = new URL(input);

    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return { valid: false, reason: "Invalid protocol" };
    }

    const hostname = url.hostname;

    const isIP = isValidIP(hostname);
    const isDomain = isValidDomain(hostname);

    if (!isIP && !isDomain) {
      return { valid: false, reason: "Invalid domain or IP address" };
    }

    return { valid: true, url, isIP, isDomain };

  } catch {
    return { valid: false, reason: "Invalid URL format" };
  }
}

// ===============================
//  MAIN FUNCTION
// ===============================
function analyzeURL() {
  const input = document.getElementById("urlInput").value.trim();

  const httpsCheck = document.getElementById("httpsCheck");
  const keywordCheck = document.getElementById("keywordCheck");
  const domainCheck = document.getElementById("domainCheck");
  const ipCheck = document.getElementById("ipCheck");

  const result = document.getElementById("urlResult");
  const details = document.getElementById("urlDetails");
  const riskFill = document.getElementById("riskFill");

  const resultSection = document.getElementById("resultSection");

  // =====================
  // SHOW RESULT SECTION
  // =====================
  if (resultSection) resultSection.style.display = "block";

  // =====================
  // RESET UI
  // =====================
  httpsCheck.checked = false;
  keywordCheck.checked = false;
  domainCheck.checked = false;
  ipCheck.checked = false;

  result.innerText = "";
  details.innerText = "";
  if (riskFill) riskFill.style.width = "0%";

  if (!input) return;

  // =====================
  // PARSE URL (ONLY STOP HERE IF FAIL)
  // =====================
  let parsed;

  try {
    parsed = new URL(input);
  } catch {
    result.innerText = "❗ Invalid URL format";
    result.style.color = "#facc15";
    return; // ✅ ONLY early return allowed
  }

  const hostname = parsed.hostname;

  // =====================
  // IP CHECK
  // =====================
  function isValidIP(hostname) {
    const parts = hostname.split(".");
    if (parts.length !== 4) return false;

    return parts.every(part => {
      const num = Number(part);
      return num >= 0 && num <= 255;
    });
  }

  const isIP = isValidIP(hostname);

  // =====================
  // DOMAIN CHECK (STRICT)
  // =====================
  function isValidDomainStructure(hostname) {
    if (isValidIP(hostname)) return false;
    if (!hostname.includes(".")) return false;

    const labels = hostname.split(".");

    for (let label of labels) {
      if (!label.length) return false;
      if (!/^[a-zA-Z0-9-]+$/.test(label)) return false;
      if (label.startsWith("-") || label.endsWith("-")) return false;
    }

    const tld = labels[labels.length - 1];
    if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;

    return true;
  }

  const isDomain = isValidDomainStructure(hostname);

  // =====================
  // HTTPS CHECK
  // =====================
  const isHTTPS = parsed.protocol === "https:";

  // =====================
  // KEYWORD CHECK
  // =====================
  const suspiciousKeywords = [
    "login", "verify", "secure", "account",
    "update", "bank", "confirm", "password",
    "free", "bonus"
  ];

  const target = (hostname + parsed.pathname).toLowerCase();

  const foundKeywords = suspiciousKeywords.filter(keyword =>
    target.includes(keyword)
  );

  const hasSuspicious = foundKeywords.length > 0;

  // =====================
  // UPDATE CHECKBOXES (ALWAYS RUN)
  // =====================
  httpsCheck.checked = isHTTPS;
  keywordCheck.checked = !hasSuspicious;
  domainCheck.checked = isDomain;
  ipCheck.checked = !isIP;

  // =====================
  // WARNINGS (NO STOP)
  // =====================
  let warnings = [];

  if (!isDomain && !isIP) {
    warnings.push("Invalid domain structure");
  }

  if (isIP) {
    warnings.push("Uses IP address instead of domain");
  }

  if (foundKeywords.length > 0) {
    warnings.push("Suspicious keywords: " + foundKeywords.join(", "));
  }

  if (input.includes("@")) {
    warnings.push("Uses '@' phishing trick");
  }

  if (hostname.split(".").length > 3) {
    warnings.push("Too many subdomains");
  }

  if (input.length > 75) {
    warnings.push("URL is unusually long");
  }

  // =====================
  // SCORING
  // =====================
  let score = 0;

  if (isHTTPS) score++;
  if (!hasSuspicious) score++;
  if (!isIP) score++;
  if (isDomain) score++;

  score -= warnings.length;

  let percent = Math.max(0, Math.min(100, (score / 4) * 100));

  // =====================
  // RISK BAR
  // =====================
  if (riskFill) {
    if (percent < 40) {
      riskFill.style.background = "#ff4d4d";
    } else if (percent < 70) {
      riskFill.style.background = "#facc15";
    } else {
      riskFill.style.background = "#22c55e";
    }

    riskFill.style.width = percent + "%";
  }

  // =====================
  // FINAL RESULT
  // =====================
  if (score <= 1) {
    result.innerText = "❌ Unsafe URL";
    result.style.color = "#ff4d4d";
  } else if (score <= 3) {
    result.innerText = "⚠️ Suspicious URL";
    result.style.color = "#facc15";
  } else {
    result.innerText = "✅ Safe URL";
    result.style.color = "#22c55e";
  }

  // =====================
  // DETAILS
  // =====================
  if (warnings.length > 0) {
    details.innerHTML = "⚠️ Issues detected:<br>• " + warnings.join("<br>• ");
    details.style.color = "#facc15";
  } else {
    details.innerText = "✔ No obvious threats detected";
    details.style.color = "#22c55e";
  }
}

/* ================= Steganography Section ================= */

// ===============================
// GLOBAL CANVAS SETUP
// ===============================
const canvas = document.getElementById("stegoCanvas");
const ctx = canvas.getContext("2d");
const image = new Image();

// ===============================
// HANDLE IMAGE UPLOAD (ENCODE + DECODE)
// ===============================
function loadImage(file) {
  const reader = new FileReader();

  reader.onload = function (e) {
    image.src = e.target.result;

    image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    };
  };

  reader.readAsDataURL(file);
}

function encodeText() {
  const file = document.getElementById("encodeImage").files[0];
  const text = document.getElementById("secretText").value;

  if (!file || !text) {
    alert("Please upload image and enter text.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.src = e.target.result;

    img.onload = function () {
      const canvas = document.getElementById("stegoCanvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      let binaryText = "";

      // convert text → binary
      for (let i = 0; i < text.length; i++) {
        binaryText += text.charCodeAt(i).toString(2).padStart(8, "0");
      }

      binaryText += "00000000"; // end marker

      if (binaryText.length > data.length / 4) {
        alert("Text too long for this image.");
        return;
      }

      // encode
      for (let i = 0; i < binaryText.length; i++) {
        data[i * 4] = (data[i * 4] & 254) | parseInt(binaryText[i]);
      }

      ctx.putImageData(imgData, 0, 0);

      // ✅ SET DOWNLOAD
      const link = document.getElementById("downloadLink");
      link.href = canvas.toDataURL("image/png");
      link.style.display = "block";
    };
  };

  reader.readAsDataURL(file);
}

function decodeText() {
  const file = document.getElementById("decodeImage").files[0];

  if (!file) {
    alert("Please upload encoded image.");
    return;
  }

  loadImage(file);

  setTimeout(() => {
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;

    let binaryText = "";
    let decodedText = "";

    // extract binary
    for (let i = 0; i < data.length; i += 4) {
      binaryText += (data[i] & 1).toString();
    }

    // convert binary → text
    for (let i = 0; i < binaryText.length; i += 8) {
      let byte = binaryText.slice(i, i + 8);

      if (byte.length < 8) break;

      let charCode = parseInt(byte, 2);

      if (charCode === 0) break; // end marker

      decodedText += String.fromCharCode(charCode);
    }

    document.getElementById("decodedText").innerText = decodedText;
    document.getElementById("decodedBox").style.display = "block";

  }, 200);
}
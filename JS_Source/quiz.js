// ================= QUIZ DATA =================
const quizData = {
  social: {
    easy: [
      {
        question: "What is the most common goal of a social engineering attack?",
        options: [
          "To fix a user's slow computer performance.",
          "To trick people into giving up confidential information or access.",
          "To help an organization improve its physical security.",
          "To test how fast an employee can type."
        ],
        correct: 1,
        explanations: [
          "Incorrect. These are fake stories attackers use as pretexts.",
          "Correct. Social engineering targets people to steal confidential data.",
          "Incorrect. Attackers exploit security — they don’t improve it.",
          "Incorrect. Typing speed has nothing to do with social engineering."
        ]
      },
      {
        question: "You receive an email about a package you didn’t order. What is this called?",
        options: ["Whaling", "Phishing", "Tailgating", "Vishing"],
        correct: 1,
        explanations: [
          "Incorrect. Whaling targets executives.",
          "Correct. Phishing is mass fraudulent email.",
          "Incorrect. Tailgating is physical intrusion.",
          "Incorrect. Vishing happens over phone."
        ]
      },
      {
        question: "Spelling mistakes and urgency in email are signs of:",
        options: [
          "Professional business update",
          "A social engineering attempt",
          "System error",
          "Busy boss"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Professionals proofread emails.",
          "Correct. Urgency + poor quality = scam red flags.",
          "Incorrect. System errors do not create scam emails.",
          "Incorrect. Attackers want you to ignore red flags."
        ]
      },
      {
        question: "What is Vishing?",
        options: [
          "Social engineering over phone",
          "Virus through fishing game",
          "Fake ID entry",
          "Watching PIN entry"
        ],
        correct: 0,
        explanations: [
          "Correct. Vishing = voice phishing via phone.",
          "Incorrect. Unrelated to cybersecurity.",
          "Incorrect. That is impersonation.",
          "Incorrect. That is shoulder surfing."
        ]
      },
      {
        question: "Fake antivirus pop-up appears. What should you do?",
        options: [
          "Call number",
          "Download antivirus",
          "Close browser immediately",
          "Pay fee"
        ],
        correct: 2,
        explanations: [
          "Incorrect. Calling attacker gives them access.",
          "Incorrect. Download may install malware.",
          "Correct. Close browser to stop malicious script.",
          "Incorrect. Paying supports scam."
        ]
      }
    ],

    medium: [
      {
        question: "IT support asks for password over phone. What do you do?",
        options: [
          "Give password",
          "Never give password - verify identity",
          "Ask them to call later",
          "Give fake password"
        ],
        correct: 1,
        explanations: [
          "Incorrect. This gives attacker access.",
          "Correct. Real IT never asks for password.",
          "Incorrect. Delaying doesn’t solve risk.",
          "Incorrect. Engaging attacker keeps attack active."
        ]
      },
      {
        question: "Someone follows you into secure building. What do you do?",
        options: [
          "Hold door open",
          "Let door close and ask them to badge",
          "Check their ID yourself",
          "Report immediately"
        ],
        correct: 1,
        explanations: [
          "Incorrect. This bypasses security controls.",
          "Correct. Everyone must use their own badge.",
          "Incorrect. You are not security authority.",
          "Incorrect. Reporting is extreme unless confirmed threat."
        ]
      },
      {
        question: "You find USB drive in parking lot. What do you do?",
        options: [
          "Plug it in",
          "Turn it in to security",
          "Take home",
          "Give colleague"
        ],
        correct: 1,
        explanations: [
          "Incorrect. This is baiting and spreads malware.",
          "Correct. Never plug unknown devices.",
          "Incorrect. Home devices can be infected too.",
          "Incorrect. Spreads risk further."
        ]
      },
      {
        question: "Unknown person asks for meeting recording. What do you do?",
        options: [
          "Send recording",
          "Ask manager official request",
          "Verify identity first",
          "Both B and C"
        ],
        correct: 3,
        explanations: [
          "Incorrect. Skips verification.",
          "Partially correct but incomplete.",
          "Partially correct but incomplete.",
          "Correct. Verify identity AND require official request."
        ]
      },
      {
        question: "CEO asks via email to buy gift cards urgently. What do you do?",
        options: [
          "Buy immediately",
          "Call CEO directly to verify",
          "Ask assistant via email",
          "Forward email"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Common CEO scam tactic.",
          "Correct. Use different communication channel to verify.",
          "Incorrect. Email may be compromised.",
          "Incorrect. Still using same compromised channel."
        ]
      }
    ],

    hard: [
      {
        question: "LinkedIn befriending before asking favor uses which principle?",
        options: ["Scarcity", "Liking (Rapport Building)", "Intimidation", "Social Proof"],
        correct: 1,
        explanations: [
          "Incorrect. Scarcity uses urgency.",
          "Correct. We trust people we like or feel connected to.",
          "Incorrect. Intimidation uses fear.",
          "Incorrect. Social proof relies on group behavior."
        ]
      },
      {
        question: "What is Watering Hole attack?",
        options: [
          "Leaving infected USB",
          "Compromising trusted website target visits",
          "Repeated calling",
          "Diverting water supply"
        ],
        correct: 1,
        explanations: [
          "Incorrect. That is baiting.",
          "Correct. Attackers infect trusted sites used by target group.",
          "Incorrect. That is harassment/vishing.",
          "Incorrect. Not related to cybersecurity."
        ]
      },
      {
        question: "Deepfake CFO audio is example of which tactic?",
        options: ["Pretexting", "Dumpster Diving", "Shoulder Surfing", "Baiting"],
        correct: 0,
        explanations: [
          "Correct. Pretexting creates fake scenario to justify request.",
          "Incorrect. Dumpster diving involves trash.",
          "Incorrect. Shoulder surfing is physical observation.",
          "Incorrect. Baiting uses infected media."
        ]
      },
      {
        question: "Quid Pro Quo attack offers:",
        options: [
          "Legal threat",
          "Service in exchange for information",
          "Nothing",
          "Fake login link"
        ],
        correct: 1,
        explanations: [
          "Incorrect. That is intimidation.",
          "Correct. Quid Pro Quo = favor for favor.",
          "Incorrect. It always offers something.",
          "Incorrect. That is phishing."
        ]
      },
      {
        question: "Finding document in trash is called:",
        options: ["Spear Phishing", "Tailgating", "Dumpster Diving", "Eavesdropping"],
        correct: 2,
        explanations: [
          "Incorrect. Spear phishing is targeted email.",
          "Incorrect. Tailgating is physical intrusion.",
          "Correct. Dumpster diving retrieves discarded sensitive info.",
          "Incorrect. Eavesdropping is listening to conversations."
        ]
      }
    ]

  },
  myths: {

    // ================= EASY =================
    easy: [

      {
        question: "TRUE OR FALSE: 'I don't need antivirus because I only visit safe websites.'",
        options: [
          "True – Safe browsing is enough protection",
          "False – Even legitimate sites can be compromised",
          "True – Modern browsers provide enough protection",
          "False – Only if you download files regularly"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Even trusted websites can be compromised or host malicious ads.",
          "Correct. Legitimate sites can be hacked and distribute malware unknowingly.",
          "Incorrect. Browsers help but cannot block all malware threats.",
          "Incorrect. Malware can infect systems without downloading files."
        ]
      },

      {
        question: "TRUE OR FALSE: 'Using public Wi-Fi is safe as long as I don't do banking.'",
        options: [
          "True – Only banking information is valuable",
          "False – All internet activity can be monitored",
          "True – If it has a password, it's secure",
          "False – But only for business users"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Login credentials and emails are also valuable.",
          "Correct. Attackers can monitor traffic on unsecured networks.",
          "Incorrect. Public Wi-Fi passwords are shared and weak.",
          "Incorrect. All users are at risk, not only businesses."
        ]
      },

      {
        question: "TRUE OR FALSE: 'Small businesses don't get targeted.'",
        options: [
          "True – Only big companies are targeted",
          "False – Small businesses often have weaker security",
          "True – No valuable data in small companies",
          "False – Only retail businesses are at risk"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Automated attacks target businesses of all sizes.",
          "Correct. Small businesses are common targets due to weaker defenses.",
          "Incorrect. Customer data and payment info are valuable.",
          "Incorrect. Any business with data can be attacked."
        ]
      },

      {
        question: "TRUE OR FALSE: 'HTTPS means a website is completely safe.'",
        options: [
          "True – HTTPS means legitimate",
          "False – HTTPS only encrypts data in transit",
          "True – Lock icon can't be faked",
          "False – Only government sites are safe"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Attackers can use HTTPS too.",
          "Correct. HTTPS encrypts traffic but doesn’t verify site intent.",
          "Incorrect. Fake websites can obtain SSL certificates.",
          "Incorrect. HTTPS does not guarantee trustworthiness."
        ]
      },

      {
        question: "TRUE OR FALSE: 'Macs don't get viruses.'",
        options: [
          "True – Macs are immune",
          "False – Macs can get malware",
          "True – Apple's security is perfect",
          "False – Only if you install non-App Store software"
        ],
        correct: 1,
        explanations: [
          "Incorrect. No OS is immune from malware.",
          "Correct. Macs can be infected, though less frequently.",
          "Incorrect. No system has perfect security.",
          "Incorrect. Malware can appear in many ways."
        ]
      }

    ],

    // ================= MEDIUM =================
    medium: [

      {
        question: "TRUE OR FALSE: 'Incognito mode makes me anonymous.'",
        options: [
          "True – It hides your IP address",
          "False – Only prevents local history saving",
          "True – Built-in VPN",
          "False – Only works in guest mode"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Your ISP and websites can still see your activity.",
          "Correct. Incognito only prevents history storage locally.",
          "Incorrect. It does not encrypt or mask your IP.",
          "Incorrect. It works the same regardless of account."
        ]
      },

      {
        question: "TRUE OR FALSE: 'Deleting a file destroys it permanently.'",
        options: [
          "True – Once bin empty, gone forever",
          "False – Data remains until overwritten",
          "True – Only hackers can recover",
          "False – Only stays with cloud backup"
        ],
        correct: 1,
        explanations: [
          "Incorrect. The data remains on disk until overwritten.",
          "Correct. Deletion removes pointer, not the data itself.",
          "Incorrect. Basic recovery tools can retrieve deleted files.",
          "Incorrect. Cloud backup does not affect local deletion behavior."
        ]
      },

      {
        question: "TRUE OR FALSE: 'VPN makes me 100% safe.'",
        options: [
          "True – Stops all viruses",
          "False – Encrypts connection only",
          "True – Replaces antivirus",
          "False – Only unsafe if free VPN"
        ],
        correct: 1,
        explanations: [
          "Incorrect. VPN does not prevent malware.",
          "Correct. VPN protects connection privacy, not device security.",
          "Incorrect. Antivirus is still required.",
          "Incorrect. Even paid VPNs don’t block phishing."
        ]
      },

      {
        question: "TRUE OR FALSE: 'Strong passwords are enough.'",
        options: [
          "True – Cannot be cracked",
          "False – MFA is needed",
          "True – Change every 30 days enough",
          "False – Only financial accounts need MFA"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Strong passwords can still be stolen.",
          "Correct. MFA adds essential extra protection layer.",
          "Incorrect. Frequency doesn’t prevent phishing.",
          "Incorrect. All critical accounts need MFA."
        ]
      },

      {
        question: "TRUE OR FALSE: 'Smartphones don't need security monitoring.'",
        options: [
          "True – Impossible to hack",
          "False – Mobile malware and smishing exist",
          "True – No traditional files",
          "False – Only if rooted"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Mobile devices are major targets.",
          "Correct. Malicious apps and SMS phishing are common.",
          "Incorrect. Apps can contain malware.",
          "Incorrect. Even non-rooted phones can be infected."
        ]
      }

    ],

    // ================= HARD =================
    hard: [

      {
        question: "TRUE OR FALSE: 'Cloud provider handles all security.'",
        options: [
          "True – Provider handles everything",
          "False – Shared Responsibility Model",
          "True – Only physical security is client’s",
          "False – Only applies to public cloud"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Clients must secure data and configurations.",
          "Correct. Security responsibility is shared between provider and client.",
          "Incorrect. Clients handle access control and data security.",
          "Incorrect. Shared responsibility applies to all cloud models."
        ]
      },

      {
        question: "TRUE OR FALSE: 'AI replaces human analysts.'",
        options: [
          "True – AI stops all attacks",
          "False – AI assists but needs human oversight",
          "True – Fully automated response",
          "False – Only small networks need humans"
        ],
        correct: 1,
        explanations: [
          "Incorrect. AI produces false positives.",
          "Correct. Human analysts verify and investigate alerts.",
          "Incorrect. Automation still requires supervision.",
          "Incorrect. Large networks require more oversight."
        ]
      },

      {
        question: "TRUE OR FALSE: 'Zero Trust trusts internal users.'",
        options: [
          "True – Inside network is safe",
          "False – Never trust, always verify",
          "True – Physical security model",
          "False – Only for contractors"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Zero Trust assumes attacker may already be inside.",
          "Correct. All access must be continuously verified.",
          "Incorrect. It is cybersecurity architecture.",
          "Incorrect. It applies to all users."
        ]
      },

      {
        question: "TRUE OR FALSE: 'End-to-end encryption makes interception impossible.'",
        options: [
          "True – Impossible to break",
          "False – Compromised devices bypass encryption",
          "True – Only governments can read",
          "False – Only weak keys vulnerable"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Infected devices expose plaintext data.",
          "Correct. If endpoints are compromised, encryption fails.",
          "Incorrect. Encryption keys are not universal government access.",
          "Incorrect. Strong keys don’t protect infected devices."
        ]
      },

      {
        question: "TRUE OR FALSE: 'Cybersecurity is only IT’s job.'",
        options: [
          "True – Only engineers stop hackers",
          "False – It’s organization-wide responsibility",
          "True – Executives involved only after breach",
          "False – Only finance/healthcare industries"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Human behavior is critical risk factor.",
          "Correct. Security requires culture, training, and leadership.",
          "Incorrect. Prevention requires executive involvement.",
          "Incorrect. Every industry faces cyber threats."
        ]
      }
    ]
  },
  spot: {

    easy: [

      {
        question: `You receive an email from "Netflix" saying your payment failed. The sender's email is account-update342@gmail.com. Is this a red flag?`,
        options: [
          "Yes, legitimate companies use their own official domain (e.g., @netflix.com), not free Gmail accounts.",
          "No, large companies use Gmail for their customer support to save money.",
          "Yes, but only because it has numbers in the name.",
          "No, as long as the Netflix logo is at the top of the email."
        ],
        correct: 0,
        explanations: [
          "Correct: Legitimate companies send billing emails from official domains. Free Gmail addresses are a major phishing red flag.",
          "Incorrect: Large companies do not use free Gmail accounts for official billing or account updates.",
          "Incorrect: Numbers in the address are not the issue — the free Gmail domain is the real red flag.",
          "Incorrect: Logos can be copied easily. Visual appearance does not prove legitimacy."
        ]
      },

      {
        question: `An email arrives with the subject '!!URGENT: ACCOUNT LOCKED!!' and demands action within 10 minutes. This is a sign of:`,
        options: [
          "A helpful warning from a security team.",
          "Artificial urgency designed to make you panic and skip verification.",
          "High-quality customer service.",
          "A technical error on your computer."
        ],
        correct: 1,
        explanations: [
          "Incorrect: Legitimate security teams do not use extreme panic tactics.",
          "Correct: Artificial urgency is a common psychological manipulation technique in phishing.",
          "Incorrect: High-quality service does not pressure users aggressively.",
          "Incorrect: Technical errors do not send threatening emails."
        ]
      },

      {
        question: `When hovering over a button, the link shows http://bit.ly/3xYz2 instead of the company website. What does this mean?`,
        options: [
          "It’s a shortcut used for faster loading.",
          "It’s a shortened link used to hide the actual destination.",
          "It means the link is encrypted and safe.",
          "It means the website is under maintenance."
        ],
        correct: 1,
        explanations: [
          "Incorrect: Shortened links are not for faster loading.",
          "Correct: Shortened links can hide the real malicious destination.",
          "Incorrect: Encryption does not guarantee safety.",
          "Incorrect: Maintenance has nothing to do with link shortening."
        ]
      },

      {
        question: `You receive a text message from an unknown number with a suspicious link. Why is this a red flag?`,
        options: [
          "It’s a Smishing attempt; never click links from unknown senders.",
          "It’s only a risk if you don’t know the person.",
          "Text messages can’t carry viruses.",
          "It’s safe if you are using a smartphone."
        ],
        correct: 0,
        explanations: [
          "Correct: Smishing uses SMS messages to trick victims into visiting malicious websites.",
          "Incorrect: Even if you know the sender, their number could be spoofed.",
          "Incorrect: SMS links can lead to malware or phishing pages.",
          "Incorrect: Smartphones are not immune to phishing attacks."
        ]
      },

      {
        question: `You receive an email starting with 'Dear Valued Customer' instead of your actual name. This is often a sign of:`,
        options: [
          "A company respecting your privacy.",
          "A mass-produced phishing template.",
          "A very busy employee who forgot your name.",
          "A secure system that doesn't store personal names."
        ],
        correct: 1,
        explanations: [
          "Incorrect: Legitimate companies typically personalize account emails.",
          "Correct: Generic greetings are common in large phishing campaigns.",
          "Incorrect: Important account emails are automated and personalized.",
          "Incorrect: Companies securely store customer names for account communication."
        ]
      }

    ],
    medium: [

      {
        question: `A link in an email looks like www.paypa1.com. What is wrong with this red flag?`,
        options: [
          "It is a 'Typosquatting' link where the 'l' is replaced with a '1'.",
          "Nothing, that is how the website is spelled in different countries.",
          "It is safe as long as it starts with 'www'.",
          "It is only a risk if you type your password."
        ],
        correct: 0,
        explanations: [
          "Correct: This is typosquatting — attackers replace letters with similar-looking numbers to trick users.",
          "Incorrect: Domain spelling does not vary by country like this. This is deliberate deception.",
          "Incorrect: 'www' does not guarantee legitimacy; the full domain must be verified.",
          "Incorrect: Even visiting the site can expose you to malware or phishing."
        ]
      },

      {
        question: `You get an email from a coworker you know, but the tone feels unusual and they ask for a file they should already have. This may indicate:`,
        options: [
          "Their email account might be compromised (Spear Phishing).",
          "They are just having a bad day or forgot.",
          "You should send the file immediately to help them.",
          "It is only a threat if there is a link in the email."
        ],
        correct: 0,
        explanations: [
          "Correct: Compromised internal accounts are commonly used in spear phishing attacks.",
          "Incorrect: A sudden change in tone combined with unusual requests is a red flag.",
          "Incorrect: Acting quickly without verifying may expose sensitive information.",
          "Incorrect: Data theft can occur even without links."
        ]
      },

      {
        question: `An email from 'Microsoft' has a PDF attachment named 'Invoice_2024.pdf.exe'. Why is this a major red flag?`,
        options: [
          "The 'double extension' hides that it is actually an executable program.",
          "It means the file is extra secure and encrypted.",
          "It is a common format for modern invoices.",
          "It only works on older computers."
        ],
        correct: 0,
        explanations: [
          "Correct: The .exe extension means it is an executable program, likely malware.",
          "Incorrect: Double extensions are not security features — they are deception tactics.",
          "Incorrect: Legitimate invoices are not sent as executable files.",
          "Incorrect: Executable malware works on modern systems."
        ]
      },

      {
        question: `A 'Security Alert' email contains several grammar and punctuation errors. What is the takeaway?`,
        options: [
          "Major tech companies use professional templates and automated spell-check.",
          "Security alerts are written by programmers who aren't good at English.",
          "The errors make the email more human and trustworthy.",
          "Errors are only a red flag if they are in the subject line."
        ],
        correct: 0,
        explanations: [
          "Correct: Large companies use professional, standardized communication.",
          "Incorrect: Critical security communications are carefully reviewed.",
          "Incorrect: Grammar errors are common phishing indicators.",
          "Incorrect: Errors anywhere in the message can signal fraud."
        ]
      },

      {
        question: `You get an email from your HR Department with a link to a 'New Employee Handbook,' but it asks for your Google login. Is this a red flag?`,
        options: [
          "Yes, this is 'Credential Harvesting.'",
          "No, most companies use Google to verify employees.",
          "It is only safe if the page looks identical to the real login page.",
          "This is a standard way to verify employment."
        ],
        correct: 0,
        explanations: [
          "Correct: This is credential harvesting — attackers create fake login pages to steal passwords.",
          "Incorrect: Internal documents should not require external login verification.",
          "Incorrect: Fake login pages are often perfect visual copies.",
          "Incorrect: Employment verification does not require external credential submission."
        ]
      }

    ],
    hard: [

      {
        question: `You receive an email where the 'From' address is exactly your company email, but it asks you to download a 'Network Tool.' What is likely happening?`,
        options: [
          "It’s an 'Internal Spoofing' attack where the mail header was manipulated.",
          "It is an automated backup notification.",
          "Your email has definitely been hacked.",
          "It’s an encrypted message only you can read."
        ],
        correct: 0,
        explanations: [
          "Correct: Attackers can spoof internal addresses by manipulating email headers.",
          "Incorrect: Backup systems do not randomly distribute executable tools.",
          "Incorrect: Spoofing does not require full account compromise.",
          "Incorrect: Encryption does not explain suspicious download requests."
        ]
      },

      {
        question: `You visit a bank site with HTTPS and perfect spelling, but the certificate was issued only 2 days ago. Is this suspicious?`,
        options: [
          "Yes; phishing sites often use fresh SSL certificates.",
          "No; the bank updated its security.",
          "The lock icon means government verification.",
          "Only suspicious if there is no privacy policy."
        ],
        correct: 0,
        explanations: [
          "Correct: Attackers use free SSL certificates to make fake sites appear legitimate.",
          "Incorrect: Banks rarely change certificates unexpectedly.",
          "Incorrect: HTTPS only encrypts traffic; it does not verify legitimacy.",
          "Incorrect: Privacy policies can also be copied."
        ]
      },

      {
        question: `You receive a 'Calendar Invitation' from an unknown sender containing a link. Why is this suspicious?`,
        options: [
          "It’s 'Calendar Phishing' used to bypass spam filters.",
          "It is a standard HR procedure.",
          "Calendar invites are safe because they don’t have attachments.",
          "It only works if auto-accept is turned off."
        ],
        correct: 0,
        explanations: [
          "Correct: Calendar phishing bypasses traditional email spam detection.",
          "Incorrect: HR invitations are sent from verified internal accounts.",
          "Incorrect: Calendar invites can contain malicious links.",
          "Incorrect: The attack does not depend on auto-accept settings."
        ]
      },

      {
        question: `An attacker uses a 'Homograph Attack' where www.apple.com uses a Cyrillic 'a'. How can this be detected?`,
        options: [
          "By checking for 'Punycode' (like xn--) in the URL.",
          "By checking if the website has images.",
          "By seeing if it loads slower.",
          "These attacks are impossible to detect."
        ],
        correct: 0,
        explanations: [
          "Correct: Punycode reveals hidden Unicode characters in fake domains.",
          "Incorrect: Images do not verify authenticity.",
          "Incorrect: Page speed is unrelated to domain authenticity.",
          "Incorrect: These attacks can be detected with careful URL inspection."
        ]
      },

      {
        question: `You receive an email about an 'Unpaid Invoice' with no link, but it asks you to call a number. This is a red flag for:`,
        options: [
          "'Callback Phishing' to move the attack to phone.",
          "A legitimate billing mistake.",
          "A safe email because there is no link.",
          "Only a risk if the number is international."
        ],
        correct: 0,
        explanations: [
          "Correct: Callback phishing shifts the attack to voice manipulation.",
          "Incorrect: Billing departments provide secure contact channels.",
          "Incorrect: Phone-based scams bypass digital detection systems.",
          "Incorrect: Domestic numbers can also be spoofed."
        ]
      }

    ]
  }
};



// ================= QUIZ LOGIC =================
const quizContainer = document.getElementById("quiz-container");

let currentQuestions = [];
let currentIndex = 0;
let score_q = 0;
let answered = false;

/* ================= START QUIZ ================= */

document.querySelectorAll(".start-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    const quizType = this.dataset.quiz;
    const select = this.parentElement.querySelector(".level-select");
    const level = select.value;

    currentQuestions = quizData[quizType][level];
    currentIndex = 0;
    score_q = 0;

    showQuestion();

    // Scroll to question area
    quizContainer.scrollIntoView({ behavior: "smooth" });
  });
});


/* ================= SHOW QUESTION ================= */

function showQuestion() {

  quizContainer.innerHTML = "";
  answered = false;

  if (currentIndex >= currentQuestions.length) {
    showResult();
    return;
  }

  const q = currentQuestions[currentIndex];

  const box = document.createElement("div");
  box.classList.add("question-box");

  box.innerHTML = `
    <h3>Question ${currentIndex + 1} of ${currentQuestions.length}</h3>
    <p>${q.question}</p>
    <div id="options-area"></div>
    <p id="warning" style="color:#f87171; display:none; margin-top:10px;">
      Please choose an answer first.
    </p>
    <button id="next-btn" class="start-btn" style="margin-top:20px;">
      ${currentIndex === currentQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
    </button>
  `;

  const optionsArea = box.querySelector("#options-area");

  q.options.forEach((option, index) => {

    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    optionDiv.textContent = option;

    optionDiv.addEventListener("click", () => handleAnswer(optionDiv, index, q));

    optionsArea.appendChild(optionDiv);
  });

  quizContainer.appendChild(box);

  const nextBtn = document.getElementById("next-btn");
  const warning = document.getElementById("warning");

  nextBtn.addEventListener("click", () => {

    if (!answered) {
      warning.style.display = "block";
      return;
    }

    currentIndex++;
    showQuestion();
  });
}


/* ================= HANDLE ANSWER ================= */

function handleAnswer(selectedOption, index, questionData) {

  answered = true;

  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(opt => opt.style.pointerEvents = "none");

  if (index === questionData.correct) {
    selectedOption.classList.add("correct");
    score_q++;
  } else {
    selectedOption.classList.add("incorrect");
    allOptions[questionData.correct].classList.add("correct");
  }

  const explanation = document.createElement("div");
  explanation.classList.add("explanation");
  explanation.textContent = questionData.explanations[index];

  selectedOption.appendChild(explanation);
}


/* ================= SHOW RESULT ================= */

function showResult() {

  quizContainer.innerHTML = `
    <div class="question-box">
      <h3>Quiz Completed!</h3>
      <p>Your Score: ${score_q} / ${currentQuestions.length}</p>
      <button class="start-btn" onclick="location.reload()">Restart Quiz</button>
    </div>
  `;
}
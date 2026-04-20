

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
  },
  password: {

    // ================= EASY =================
    easy: [

      {
        question: "What makes a password strong?",
        options: [
          "Short and easy to remember",
          "Long, complex, and unique",
          "Using your name and birthdate",
          "Using the same password everywhere"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Short passwords are easy to guess or brute-force.",
          "Correct. Strong passwords are long, unique, and include different character types.",
          "Incorrect. Personal information is easy for attackers to find.",
          "Incorrect. Reusing passwords increases risk across accounts."
        ]
      },

      {
        question: "Is it safe to use the same password for multiple accounts?",
        options: [
          "Yes, if the password is strong",
          "No, because one breach exposes all accounts",
          "Yes, if you change it monthly",
          "Only for social media accounts"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Strength does not protect against reuse attacks.",
          "Correct. If one account is hacked, all others become vulnerable.",
          "Incorrect. Changing frequency doesn’t fix reuse risk.",
          "Incorrect. All accounts should have unique passwords."
        ]
      },

      {
        question: "What is Multi-Factor Authentication (MFA)?",
        options: [
          "Using multiple passwords",
          "Using password + another verification method",
          "Changing password daily",
          "Using only fingerprint login"
        ],
        correct: 1,
        explanations: [
          "Incorrect. MFA is not multiple passwords.",
          "Correct. MFA combines something you know with something you have or are.",
          "Incorrect. Frequency is not MFA.",
          "Incorrect. Biometrics alone is not multi-factor."
        ]
      },

      {
        question: "Which is the safest way to store passwords?",
        options: [
          "Write them in a notebook",
          "Save in browser without protection",
          "Use a password manager",
          "Store in phone notes"
        ],
        correct: 2,
        explanations: [
          "Incorrect. Physical notes can be lost or stolen.",
          "Incorrect. Browsers can be compromised without encryption.",
          "Correct. Password managers securely encrypt and store credentials.",
          "Incorrect. Notes apps are not secure storage."
        ]
      },

      {
        question: "What should you do if your password is leaked?",
        options: [
          "Ignore it",
          "Change it immediately",
          "Use same password again",
          "Wait until account is hacked"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Ignoring increases risk.",
          "Correct. Immediate password change prevents unauthorized access.",
          "Incorrect. Reusing the same password is dangerous.",
          "Incorrect. Waiting allows attackers access."
        ]
      }

    ],

    // ================= MEDIUM =================
    medium: [

      {
        question: "What is a 'brute force attack'?",
        options: [
          "Guessing passwords repeatedly until correct",
          "Stealing passwords via email",
          "Watching someone type password",
          "Using fake login pages"
        ],
        correct: 0,
        explanations: [
          "Correct. Attackers try many combinations until they find the correct password.",
          "Incorrect. That is phishing.",
          "Incorrect. That is shoulder surfing.",
          "Incorrect. That is credential harvesting."
        ]
      },

      {
        question: "Why is MFA important?",
        options: [
          "It makes login slower",
          "It adds an extra security layer",
          "It replaces passwords",
          "It works only for banks"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Speed is not the goal.",
          "Correct. Even if password is stolen, attacker cannot access account without second factor.",
          "Incorrect. MFA works with passwords, not replaces them.",
          "Incorrect. MFA is used across many services."
        ]
      },

      {
        question: "What is 'password hashing'?",
        options: [
          "Encrypting passwords for storage",
          "Deleting passwords",
          "Sharing passwords securely",
          "Writing passwords backwards"
        ],
        correct: 0,
        explanations: [
          "Correct. Hashing converts passwords into unreadable fixed values.",
          "Incorrect. Passwords are not deleted.",
          "Incorrect. Hashing is not for sharing.",
          "Incorrect. Reversing text is not security."
        ]
      },

      {
        question: "What is a password manager's main benefit?",
        options: [
          "Stores passwords in plain text",
          "Creates and stores strong unique passwords",
          "Saves passwords publicly",
          "Shares passwords automatically"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Secure managers encrypt passwords.",
          "Correct. They generate strong and unique passwords for each account.",
          "Incorrect. Passwords are private.",
          "Incorrect. Sharing is controlled and limited."
        ]
      },

      {
        question: "What is 'credential stuffing'?",
        options: [
          "Trying stolen passwords on multiple sites",
          "Guessing passwords randomly",
          "Sending phishing emails",
          "Installing malware"
        ],
        correct: 0,
        explanations: [
          "Correct. Attackers reuse leaked credentials across services.",
          "Incorrect. That is brute force.",
          "Incorrect. That is phishing.",
          "Incorrect. That is malware attack."
        ]
      }

    ],

    // ================= HARD =================
    hard: [

      {
        question: "Why are password managers considered secure?",
        options: [
          "They store passwords in plain text",
          "They use encryption and zero-knowledge architecture",
          "They share passwords across users",
          "They don’t require authentication"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Secure managers never store plain text passwords.",
          "Correct. Encryption ensures only the user can access stored passwords.",
          "Incorrect. Passwords are not publicly shared.",
          "Incorrect. Access is protected by master password and MFA."
        ]
      },

      {
        question: "What is 'rainbow table attack'?",
        options: [
          "Precomputed hashes used to crack passwords",
          "Color-coded password system",
          "Random password guessing",
          "Password encryption method"
        ],
        correct: 0,
        explanations: [
          "Correct. Attackers use precomputed hash tables to reverse hashes.",
          "Incorrect. Colors are unrelated.",
          "Incorrect. This is not brute force.",
          "Incorrect. It is an attack, not protection."
        ]
      },

      {
        question: "What is the main weakness of SMS-based MFA?",
        options: [
          "Too fast",
          "Vulnerable to SIM swapping attacks",
          "Too secure",
          "Works offline"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Speed is not an issue.",
          "Correct. Attackers can hijack phone numbers via SIM swap.",
          "Incorrect. No system is perfectly secure.",
          "Incorrect. SMS requires network access."
        ]
      },

      {
        question: "What is 'keylogging'?",
        options: [
          "Recording keystrokes to steal passwords",
          "Encrypting keyboard input",
          "Blocking keyboard usage",
          "Saving passwords safely"
        ],
        correct: 0,
        explanations: [
          "Correct. Keyloggers capture everything you type, including passwords.",
          "Incorrect. It does not protect input.",
          "Incorrect. It does not block typing.",
          "Incorrect. It is malicious, not protective."
        ]
      },

      {
        question: "Why is 'passphrase' better than a short password?",
        options: [
          "Easier to guess",
          "Longer and harder to brute-force",
          "Uses fewer characters",
          "Only works for emails"
        ],
        correct: 1,
        explanations: [
          "Incorrect. Passphrases are harder to guess.",
          "Correct. Length increases security exponentially.",
          "Incorrect. Passphrases are longer, not shorter.",
          "Incorrect. Works for any system."
        ]
      }

    ]

  },
  safe: {

    // ================= EASY =================
    easy: [

      {
        question: "What does HTTPS indicate in a website URL?",
        options: [
          "The website is guaranteed safe",
          "The connection between you and the site is encrypted",
          "The website is owned by the government",
          "The website cannot be hacked"
        ],
        correct: 1,
        explanations: [
          "Incorrect: HTTPS does not guarantee the site is safe, only that the connection is encrypted.",
          "Correct: HTTPS encrypts data between your browser and the website.",
          "Incorrect: HTTPS does not indicate ownership.",
          "Incorrect: Any website can still be compromised."
        ]
      },

      {
        question: "Is it safe to download files from unknown websites?",
        options: [
          "Yes, if the file looks normal",
          "No, it may contain malware",
          "Yes, if it is free",
          "Only if the website has images"
        ],
        correct: 1,
        explanations: [
          "Incorrect: File appearance does not guarantee safety.",
          "Correct: Unknown downloads may contain malware or viruses.",
          "Incorrect: Free files are often used as bait.",
          "Incorrect: Images do not indicate safety."
        ]
      },

      {
        question: "What should you do before clicking a link?",
        options: [
          "Click immediately",
          "Hover over it to check the real URL",
          "Share it with friends",
          "Ignore it always"
        ],
        correct: 1,
        explanations: [
          "Incorrect: Clicking blindly can lead to phishing sites.",
          "Correct: Hovering reveals the actual destination of the link.",
          "Incorrect: Sharing spreads potential threats.",
          "Incorrect: Not all links are dangerous."
        ]
      },

      {
        question: "What is a 'pop-up scam'?",
        options: [
          "A helpful notification",
          "A fake alert designed to trick users",
          "A browser feature",
          "A type of antivirus"
        ],
        correct: 1,
        explanations: [
          "Incorrect: Scam pop-ups are not helpful.",
          "Correct: Pop-up scams create fake warnings to trick users.",
          "Incorrect: Browsers do not generate scam messages.",
          "Incorrect: Antivirus software does not behave like this."
        ]
      },

      {
        question: "What should you do if a website looks suspicious?",
        options: [
          "Continue browsing",
          "Enter your details quickly",
          "Leave the website immediately",
          "Download files to check"
        ],
        correct: 2,
        explanations: [
          "Incorrect: Staying increases risk.",
          "Incorrect: Entering data exposes your information.",
          "Correct: Leaving prevents potential attacks.",
          "Incorrect: Downloads may contain malware."
        ]
      }

    ],

    // ================= MEDIUM =================
    medium: [

      {
        question: "What is a 'drive-by download'?",
        options: [
          "Downloading files manually",
          "Automatic malware download without user consent",
          "Downloading from USB",
          "Downloading safe software"
        ],
        correct: 1,
        explanations: [
          "Incorrect: Manual downloads require user action.",
          "Correct: Malware installs automatically when visiting a malicious site.",
          "Incorrect: USB attacks are different.",
          "Incorrect: Safe software is unrelated."
        ]
      },

      {
        question: "Why are shortened URLs risky?",
        options: [
          "They load slowly",
          "They hide the real destination",
          "They are always safe",
          "They improve security"
        ],
        correct: 1,
        explanations: [
          "Incorrect: Speed is not the issue.",
          "Correct: Attackers use shortened links to hide malicious URLs.",
          "Incorrect: Shortened links are not inherently safe.",
          "Incorrect: They do not improve security."
        ]
      },

      {
        question: "What is a 'fake website' used for?",
        options: [
          "Improving user experience",
          "Stealing user credentials",
          "Providing faster service",
          "Displaying ads"
        ],
        correct: 1,
        explanations: [
          "Incorrect: Fake sites are not for user benefit.",
          "Correct: Attackers create fake sites to collect login details.",
          "Incorrect: Speed is irrelevant.",
          "Incorrect: Ads are not the main goal."
        ]
      },

      {
        question: "What is the safest way to verify a website?",
        options: [
          "Check URL carefully",
          "Trust the design",
          "Look at colors",
          "Check if it loads fast"
        ],
        correct: 0,
        explanations: [
          "Correct: The URL is the most reliable indicator of legitimacy.",
          "Incorrect: Design can be copied.",
          "Incorrect: Colors mean nothing.",
          "Incorrect: Speed does not indicate safety."
        ]
      },

      {
        question: "Why should you avoid clicking unknown ads?",
        options: [
          "They are boring",
          "They may redirect to malicious sites",
          "They load slowly",
          "They waste time only"
        ],
        correct: 1,
        explanations: [
          "Incorrect: The issue is security, not interest.",
          "Correct: Ads can redirect to phishing or malware sites.",
          "Incorrect: Speed is not the main risk.",
          "Incorrect: They pose security threats, not just time loss."
        ]
      }

    ],

    // ================= HARD =================
    hard: [

      {
        question: "What is a Man-in-the-Middle (MITM) attack?",
        options: [
          "Attacker intercepts communication between user and website",
          "Deleting files remotely",
          "Sending phishing emails",
          "Installing antivirus"
        ],
        correct: 0,
        explanations: [
          "Correct: MITM intercepts and possibly alters communication.",
          "Incorrect: File deletion is unrelated.",
          "Incorrect: That is phishing.",
          "Incorrect: Antivirus is defensive."
        ]
      },

      {
        question: "Why is public Wi-Fi risky?",
        options: [
          "Slow speed",
          "Attackers can intercept data",
          "Limited access",
          "Expensive usage"
        ],
        correct: 1,
        explanations: [
          "Incorrect: Speed is not the main risk.",
          "Correct: Attackers can monitor traffic on unsecured networks.",
          "Incorrect: Access limitations are not security threats.",
          "Incorrect: Cost is unrelated."
        ]
      },

      {
        question: "What is 'malvertising'?",
        options: [
          "Malicious advertisements spreading malware",
          "Blocking ads",
          "Safe advertising",
          "Email marketing"
        ],
        correct: 0,
        explanations: [
          "Correct: Malvertising uses ads to distribute malware.",
          "Incorrect: Blocking ads is protective.",
          "Incorrect: Safe ads do not spread malware.",
          "Incorrect: Marketing emails are unrelated."
        ]
      },

      {
        question: "Why should you check website certificates?",
        options: [
          "To verify legitimacy of site",
          "To increase speed",
          "To download files",
          "To change password"
        ],
        correct: 0,
        explanations: [
          "Correct: Certificates help verify authenticity of the website.",
          "Incorrect: Certificates do not affect speed.",
          "Incorrect: Certificates are unrelated to downloads.",
          "Incorrect: They do not manage passwords."
        ]
      },

      {
        question: "What is the biggest risk of entering credentials on fake sites?",
        options: [
          "Slow performance",
          "Account compromise",
          "Website crash",
          "Data deletion"
        ],
        correct: 1,
        explanations: [
          "Incorrect: Performance is not the issue.",
          "Correct: Attackers gain access to your accounts.",
          "Incorrect: Crashes are unrelated.",
          "Incorrect: Data deletion is not the primary risk."
        ]
      }

    ]
  }
};


const ALL_QUIZZES = ["social", "myths", "spot", "password", "safe"];

let currentQuizType = "";
let currentLevel = "";
// ================= QUIZ LOGIC =================
const quizContainer = document.getElementById("quiz-container") || null;

let currentQuestions = [];
let currentIndex = 0;
let score_q = 0;

document.querySelectorAll(".start-btn").forEach(btn => {
  btn.addEventListener("click", function () {

    const select = this.parentElement.querySelector(".level-select");
    currentQuizType = this.dataset.quiz;
    currentLevel = select.value;

    let completedCount = getCompletedCount(currentLevel);

    currentQuestions = quizData[currentQuizType][currentLevel];
    currentIndex = 0;
    score_q = 0;

    showQuestion();
  });
});

const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".quiz-card");

let index = 0;

function updateCarousel() {
  const cardWidth = 300;
  const centerOffset = (track.parentElement.offsetWidth / 2) - (cardWidth / 2);

  track.style.transform =
    `translateX(${centerOffset - index * cardWidth}px)`;

  cards.forEach((card, i) => {
    card.classList.remove("active", "side", "far");

    if (i === index) {
      card.classList.add("active");
    } else if (Math.abs(i - index) === 1) {
      card.classList.add("side");
    } else {
      card.classList.add("far");
    }
  });
}

function next() {
  index = (index + 1) % cards.length;
  updateCarousel();
}

function prev() {
  index = (index - 1 + cards.length) % cards.length;
  updateCarousel();
}

updateCarousel();


function startQuiz(type, level) {

  console.log("Start Quiz:", type, level); // debug

  currentQuizType = type;
  currentLevel = level;

  currentIndex = 0;
  score_q = 0;

  if (!quizData[type]) {
    console.error("Quiz type not found:", type);
    return;
  }

  if (!quizData[type][level]) {
    console.error("Level not found:", level);
    return;
  }

  currentQuestions = quizData[type][level];

  showQuestion();
}

function resetLevelProgress(level) {

  let username = localStorage.getItem("username");
  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};

  if (!allUsers[username]) return;

  let userData = allUsers[username];

  for (let key in userData.quizScores) {
    if (key.endsWith("_" + level)) {
      delete userData.quizScores[key];
    }
  }

  localStorage.setItem("usersData", JSON.stringify(allUsers));
}

function handleAnswer(selectedOption, index, questionData) {

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

  const nextBtn = document.createElement("button");
  nextBtn.textContent = currentIndex === currentQuestions.length - 1 ? "Finish Quiz" : "Next Question";
  nextBtn.classList.add("start-btn");
  nextBtn.style.marginTop = "15px";

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    showQuestion();
  });

  quizContainer.appendChild(nextBtn);
}

function getNextQuiz(level) {

  let username = localStorage.getItem("username");
  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};
  let userData = allUsers[username] || {};

  let completed = userData.quizScores || {};

  let allQuizzes = ["social", "myths", "spot", "password", "safe"];

  for (let quiz of allQuizzes) {
    let quizId = quiz + "_" + level;

    if (!(quizId in completed)) {
      return quiz;
    }
  }

  return null;
}

function getCompletedCount(level) {

  let username = localStorage.getItem("username");
  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};

  if (!allUsers[username]) return 0;

  let scores = allUsers[username].quizScores || {};

  let count = 0;

  for (let key in scores) {
    if (key.endsWith("_" + level)) {
      count++;
    }
  }

  return count;
}
/* ================= QUIZ DISPLAY ================= */

function showQuestion() {

  if (quizContainer) {
    quizContainer.innerHTML = "";
  }

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
  `;

  q.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    optionDiv.textContent = option;

    optionDiv.addEventListener("click", () => handleAnswer(optionDiv, index, q));

    box.appendChild(optionDiv);
  });

  quizContainer.appendChild(box);
}



/* ================= SHOW RESULT ================= */


function showResult() {

  console.log("showResult triggered"); // DEBUG

  const quizId = currentQuizType + "_" + currentLevel;

  completeQuiz(quizId, score_q, currentLevel);

  let username = localStorage.getItem("username");

  finalizeScore(username, currentLevel);

  let completedCount = getCompletedCount(currentLevel);
  let nextQuiz = getNextQuiz(currentLevel);

  quizContainer.innerHTML = `
    <div class="question-box result-box-modern">

      <h3><i class="fa-solid fa-party-horn"></i> Quiz Completed!</h3>

      <p>Your Score: ${score_q} / ${currentQuestions.length}</p>

      <p style="color:#38bdf8;">
        Progress: ${completedCount} / 5 quizzes completed
      </p>

      <div class="result-actions-modern">

  <button class="btn-secondary" onclick="restartCurrentQuiz()">
    <i class="fa-solid fa-rotate"></i> Retry This Quiz
  </button>

  ${completedCount === 5 ? `
    <button class="btn-primary" onclick="openLeaderboard()">
      <i class="fa-solid fa-trophy"></i> View Leaderboard
    </button>

    <button class="btn-danger" onclick="resetAllProgress()">
      <i class="fa-solid fa-arrows-rotate"></i> Start New Attempt
    </button>

    <p class="complete-text"><i class="fa-solid fa-bullseye"></i> All quizzes completed!</p>
  ` : `
    <button class="btn-primary" onclick="goToNextQuiz('${nextQuiz}')">
      <i class="fa-solid fa-arrow-right"></i> Next Quiz
    </button>
  `}

</div>

    </div>
  `;
}

function goToNextQuiz(nextQuiz) {

  currentQuizType = nextQuiz;

  currentIndex = 0;
  score_q = 0;

  currentQuestions = quizData[currentQuizType][currentLevel];

  showQuestion();
}

function restartCurrentQuiz() {

  // reset values
  currentIndex = 0;
  score_q = 0;

  // reload same quiz
  currentQuestions = quizData[currentQuizType][currentLevel];

  showQuestion();
}

function resetAllProgress() {

  let username = localStorage.getItem("username");
  if (!username) return;

  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};

  if (allUsers[username]) {
    allUsers[username].quizScores = {};
  }

  localStorage.setItem("usersData", JSON.stringify(allUsers));

  location.reload();
}
/* ================= QUIZ SYSTEM ================= */

function completeQuiz(quizId, score, level) {

  let username = localStorage.getItem("username");
  if (!username) return;

  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};

  if (!allUsers[username]) {
    allUsers[username] = {
      lastScore: 0,
      bestScore: 0,
      quizScores: {}
    };
  }

  let userData = allUsers[username];

  // ONLY store per quiz
  userData.quizScores[quizId] = score;
  userData.lastScore = score;

  allUsers[username] = userData;

  localStorage.setItem("usersData", JSON.stringify(allUsers));
}

function ensureUserData() {

  let username = localStorage.getItem("username");
  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};

  if (!allUsers[username]) {
    allUsers[username] = {
      lastScore: 0,
      bestScore: 0,
      quizScores: {}
    };

    localStorage.setItem("usersData", JSON.stringify(allUsers));
  }

  return allUsers;
}

/* ================= FINAL SCORE ================= */

function isAllQuizCompleted(userData) {
  return Object.keys(userData.quizScores).length === 5;
}

function calculateTotalScore(userData) {

  let total = 0;

  for (let key in userData.quizScores) {
    total += userData.quizScores[key];
  }

  return total;
}


function finalizeScore(username, level){

  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};
  let userData = allUsers[username];

  if(!userData) return;

  let levelScores = Object.entries(userData.quizScores)
    .filter(([key]) => key.endsWith("_" + level));

  if(levelScores.length !== 5) return;

  let total = levelScores.reduce((sum, [_, val]) => sum + val, 0);

  // update scores
  userData.lastScore = total;

  if(total > (userData["best_" + level] || 0)){
    userData["best_" + level] = total;
  }

  // ===== BADGE LOGIC =====
  if (total === 25) {

    if (level === "easy") userData.badge_beginner = true;
    if (level === "medium") userData.badge_expert = true;
    if (level === "hard") userData.badge_master = true;

  }

  allUsers[username] = userData;
  localStorage.setItem("usersData", JSON.stringify(allUsers));
}


/* ================= RESET SYSTEM ================= */

function resetAllQuizProgress() {

  let username = localStorage.getItem("username");

  if (!username) return;

  let allUsers = JSON.parse(localStorage.getItem("usersData")) || {};

  if (allUsers[username]) {
    allUsers[username].quizScores = {};
  }

  localStorage.setItem("usersData", JSON.stringify(allUsers));

  alert("Progress reset! You can try again.");
}

function loadLeaderboardByLevel(level) {

  const container = document.getElementById("leaderboardList");
  if (!container) return;

  const allUsers = JSON.parse(localStorage.getItem("usersData")) || {};
  const currentUser = localStorage.getItem("username");

  let leaderboard = [];

  for (let user in allUsers) {

    let score = allUsers[user]["best_" + level] || 0;

    if (score <= 0) continue;

    leaderboard.push({
      name: user,
      score: score
    });
  }

  leaderboard.sort((a, b) => b.score - a.score);

  container.innerHTML = "";

  leaderboard.slice(0, 5).forEach((user, index) => {

    let icon = "";

    if (index === 0) {
      icon = '<i class="fa-solid fa-crown" style="color:#facc15;"></i>';
    } else if (index === 1) {
      icon = '<i class="fa-solid fa-medal" style="color:#cbd5e1;"></i>';
    } else if (index === 2) {
      icon = '<i class="fa-solid fa-medal" style="color:#cd7f32;"></i>';
    } else {
      icon = `#${index + 1}`;
    }

    let highlight = user.name === currentUser ? "current-user" : "";

    container.innerHTML += `
      <div class="leaderboard-item ${highlight}">
        <span>${icon} ${user.name}</span>
        <span>${user.score}</span>
      </div>
    `;
  });
}

function openLeaderboard() {
  document.getElementById("leaderboardModal").classList.add("active");

  // default = easy
  loadLeaderboardByLevel("easy");
}

function closeLeaderboard() {
  document.getElementById("leaderboardModal").classList.remove("active");
}

function switchTab(btn, level) {

  // remove active from all
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));

  // set active
  btn.classList.add("active");

  loadLeaderboardByLevel(level);
}










/* ================= Phishing Email PAGE ================= */

let score = 0;
let timeLeft = 120;
let timerInterval;
let selectedIndex = 0;


const originalEmails = [
  {
    sender: "IT Support",
    email: "partners@externalsolutions.com",
    subject: "Scheduled System Maintenance",
    body: `
Dear colleagues,

Routine system maintenance is scheduled for this Saturday between 01:00 AM and 03:00 AM.

During this period, VPN and internal systems may be temporarily unavailable.

No action is required from your side.

If you have any urgent concerns, please contact the IT helpdesk.

Kind regards,  
IT Support Team
`,
    answer: "safe"
  },

  {
    sender: "Learning & Development",
    email: "learning@yourcompany.com",
    subject: "Reminder: Cybersecurity Awareness Workshop",
    body: `
Dear Robin,

This is a reminder that the Cybersecurity Awareness Workshop will take place tomorrow at 2:00 PM in Conference Room B.

The session will cover phishing detection techniques, password security, and reporting suspicious emails.

Please confirm your attendance via the internal training portal.

Best regards,  
Learning & Development Team
`,
    answer: "safe"
  },

  {
    sender: "Riley Thompson",
    email: "rthompson@biztechsolutions.com",
    subject: "Follow-up: Senior Security Consultant Role",
    body: `
Dear Robin,

I hope this message finds you well.

We are currently recruiting for a Senior Security Consultant role, and your background closely matches the required experience.

The position focuses on enterprise security strategy and cloud governance initiatives.

Would you be available next Wednesday at 10 AM for a brief discussion?

Kind regards,  
Riley Thompson  
BizTech Solutions
`,
    answer: "safe"
  },

  {
    sender: "Finance Department",
    email: "finance@yourcompany.com",
    subject: "Quarterly Budget Review Documents",
    body: `
Dear Robin,

Attached are the financial summaries and projections for the Q3 budget review.

Kindly review the documents prior to Thursday’s meeting.

Please let me know if you require any clarification.

Best regards,  
Finance Department
`,
    answer: "safe"
  },

  {
    sender: "Catherine Mitchell",
    email: "cmitchell@yourcompany.com",
    subject: "Delta Initiative – Project Leadership",
    body: `
Hi Robin,

Following our recent leadership meeting, we would like you to take the lead on the upcoming Delta initiative.

Your expertise in AI-based security systems will be highly valuable to the project’s success.

Let me know your availability for a short briefing tomorrow.

Best regards,  
Catherine Mitchell  
Director of Operations
`,
    answer: "safe"
  },

  /* ================= PHISHING ================= */

  {
    sender: "autoreminder",
    email: "autoreminder@offlce365-online.com",
    subject: "Office 365 Account Expiration Notice",
    body: `
Dear customer,

Please note that your Office 365 account will expire in 3 days.

To avoid interruption of your email and Teams services, renew your account immediately by visiting:

https://office365-renew-account.com

Sign in with your Office 365 credentials and select "Renew Account".

Failure to take action may result in your Office applications switching to restricted read-only mode.

As a reminder, your account name is:
r****@yourcompany.com

Yours faithfully,  
Office365 Support Team
`,
    answer: "phishing"
  },

  {
    sender: "Microsoft Security",
    email: "security@microsoft-account-alerts.com",
    subject: "Action Required: Suspicious Login Attempt",
    body: `
Dear Robin,

We detected a suspicious login attempt to your Microsoft account from an unknown location.

For your protection, please verify your identity at the secure link below:

https://microsoft-security-review.com

Failure to verify within 24 hours may result in account suspension.

Microsoft Account Protection Team
`,
    answer: "phishing"
  },

  {
    sender: "Microsoft Teams",
    email: "invite@teams-online365.com",
    subject: "You've Been Invited to a Teams Meeting",
    body: `
Hello Robin,

You have been invited to join a Microsoft Teams meeting titled:

"Executive Strategy Review"

Please access the meeting using the secure link below:

https://teams-secure-join365.com

You may be required to sign in with your company credentials.

Microsoft Teams Support
`,
    answer: "phishing"
  },

  {
    sender: "Payroll Department",
    email: "payroll@yourcompany-secure.net",
    subject: "Payroll Discrepancy – Immediate Attention Required",
    body: `
Dear Robin,

During our monthly audit, we identified a discrepancy in your payroll information.

Please review and confirm your banking details at the secure portal below:

https://yourcompany-payroll-secure.net/update

Failure to confirm within 48 hours may result in delayed salary processing.

Payroll Administration
`,
    answer: "phishing"
  },

  {
    sender: "Google Drive",
    email: "drive-share@googledocs-secure.net",
    subject: "Shared Document: Budget Forecast 2024",
    body: `
Hello,

A confidential document has been shared with you:

"Budget Forecast 2024.xlsx"

Access the file using the secure link below:

https://googledrive-secure-access.net/document?id=88214

Sign in with your company email to continue.

Google Drive Team
`,
    answer: "phishing"
  }
];
let emails = [...originalEmails];

document.addEventListener("DOMContentLoaded", () => {
  renderInbox();
});

document.addEventListener("click", function unlockAudio() {
  const sound = document.getElementById("winSound");

  if (sound) {
    sound.play().then(() => {
      sound.pause();
      sound.currentTime = 0;
    }).catch(() => { });
  }

  document.removeEventListener("click", unlockAudio);
});


/* ===============================
   RENDER INBOX
================================= */

function renderInbox() {
  const list = document.getElementById("emailList");
  list.innerHTML = "";

  emails.forEach((email, index) => {
    const div = document.createElement("div");
    div.classList.add("email-item");

    if (index === selectedIndex) {
      div.classList.add("active");
    }

    div.innerHTML = `
      <strong>${email.sender}</strong><br>
      <small>${email.subject}</small>
    `;

    div.onclick = () => {
      selectedIndex = index;
      renderInbox();
      showEmail();
    };

    list.appendChild(div);
  });

  document.querySelector(".count").innerText = emails.length;

  showEmail();
}


/* ===============================
   SHOW EMAIL
================================= */

function showEmail() {
  if (emails.length === 0) {
    endGame("finished");
    return;
  }

  const email = emails[selectedIndex];

  document.getElementById("sender").innerText =
    email.sender + " <" + email.email + ">";

  document.getElementById("subject").innerText = email.subject;

  document.getElementById("body").innerHTML =
    formatLinks(email.body);

  const today = new Date();
  document.getElementById("date").innerText =
    today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
}


/* ===============================
   FORMAT LINKS
================================= */

function formatLinks(text) {
  const urlPattern = /(https?:\/\/[^\s]+)/g;

  return text.replace(urlPattern, url =>
    `<a href="${url}" target="_blank" class="email-link">${url}</a>`
  );
}


/* ===============================
   CHECK ANSWER
================================= */

function checkAnswer(choice) {
  if (emails.length === 0) return;

  const email = emails[selectedIndex];

  if (choice === email.answer) {
    score++;
    document.getElementById("score").innerText = score;
  }

  emails.splice(selectedIndex, 1);

  if (selectedIndex >= emails.length) {
    selectedIndex = emails.length - 1;
  }

  if (selectedIndex < 0) {
    selectedIndex = 0;
  }

  renderInbox();
}


/* ===============================
   Start Game
================================= */

function startGame() {
  document.getElementById("startOverlay").style.display = "none";
  document.getElementById("gameContent").classList.remove("blurred");
  startTimer();
}

/* ===============================
   TIMER
================================= */

function startTimer() {
  timerInterval = setInterval(() => {

    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame("timeout");
    }

  }, 1000);
}


/* ===============================
   END GAME
================================= */

function endGame(reason = "finished") {
  const closeBtn = document.getElementById("resultCloseBtn");
  if (closeBtn) closeBtn.style.display = "none";

  clearInterval(timerInterval);

  const overlay = document.getElementById("resultOverlay");
  const title = document.getElementById("resultTitle");
  const message = document.getElementById("resultMessage");

  overlay.classList.remove("hidden");

  title.classList.remove("success-title", "fail-title", "timeout-title");

  // SUCCESS

  if (score === 10 && reason === "finished") {

    title.innerHTML = `
    <i class="fa-solid fa-shield-halved success-icon"></i>
    Congratulations!
  `;

    message.innerHTML = `
    Perfect score! You passed the game.<br>
    Score: ${score} / 10
    <br><br>
    <strong>Do you want to play again?</strong>
    <div class="result-actions">
      <button class="confirm-btn" onclick="restartGame()">Yes</button>
      <button class="cancel-btn" onclick="returnToStart()">No</button>
    </div>
  `;

    playSuccessSound();
    triggerConfetti();
  }
  // TIMEOUT
  else if (reason === "timeout") {

    title.innerHTML = `
    <i class="fa-solid fa-clock timeout-icon"></i>
    Time Out!
  `;

    message.innerHTML = `
    You ran out of time.<br>
    Score: ${score} / 10
    <br><br>
    <strong>Do you want to play again?</strong>
    <div class="result-actions">
      <button class="confirm-btn" onclick="restartGame()">Yes</button>
      <button class="cancel-btn" onclick="returnToStart()">No</button>
    </div>
  `;

    playTimeoutSound();
  }

  // FAIL
  else {

    title.innerHTML = `
    <i class="fa-solid fa-circle-xmark fail-icon"></i>
    Game Over
  `;

    message.innerHTML = `
    You did not get all answers correct.<br>
    Score: ${score} / 10
    <br><br>
    <strong>Do you want to play again?</strong>
    <div class="result-actions">
      <button class="confirm-btn" onclick="restartGame()">Yes</button>
      <button class="cancel-btn" onclick="returnToStart()">No</button>
    </div>
  `;

    playGameOverSound();
  }
}


/* ===============================
   RESTART GAME
================================= */

function restartGame() {

  document.getElementById("resultCloseBtn").style.display = "flex";
  document.getElementById("resultOverlay").classList.add("hidden");

  clearInterval(timerInterval);

  score = 0;
  timeLeft = 120;
  selectedIndex = 0;

  document.getElementById("score").innerText = score;
  document.getElementById("timer").innerText = timeLeft;

  emails = [...originalEmails];
  emails.sort(() => Math.random() - 0.5);

  renderInbox();
  startTimer();
}


/* ===============================
   SOUND FUNCTIONS
================================= */
function playSuccessSound() {
  const sound = document.getElementById("winSound");
  if (!sound) return;
  sound.currentTime = 0;
  sound.play().catch(() => { });
}

function playGameOverSound() {
  const sound = document.getElementById("gameOverSound");
  if (!sound) return;
  sound.currentTime = 0;
  sound.play().catch(() => { });
}

function playTimeoutSound() {
  const sound = document.getElementById("timeoutSound");
  if (!sound) return;
  sound.currentTime = 0;
  sound.play().catch(() => { });
}

/* ===============================
   CONFETTI + SOUND
================================= */

function playSuccessSound() {
  const sound = document.getElementById("winSound");

  if (!sound) {
    console.log("Audio not found!");
    return;
  }

  sound.currentTime = 0;

  sound.play().catch(error => {
    console.log("Audio blocked:", error);
  });
}

function triggerConfetti() {

  const overlay = document.getElementById("resultOverlay");
  const container = document.createElement("div");
  container.classList.add("success-confetti");

  overlay.appendChild(container);

  for (let i = 0; i < 60; i++) {

    const piece = document.createElement("div");
    piece.classList.add("confetti-piece");

    piece.style.left = Math.random() * 100 + "%";
    piece.style.backgroundColor = getRandomColor();
    piece.style.animationDuration =
      (Math.random() * 2 + 1.5) + "s";

    container.appendChild(piece);
  }

  setTimeout(() => {
    container.remove();
  }, 3000);
}

function getRandomColor() {
  const colors = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#a855f7"];
  return colors[Math.floor(Math.random() * colors.length)];
}


/* ===============================
   QUIT GAME
================================= */

function confirmQuit() {
  document.getElementById("quitOverlay").classList.remove("hidden");
}

function closeQuit() {
  document.getElementById("quitOverlay").classList.add("hidden");
}

function quitGame() {

  // Pause timer (not reset)
  clearInterval(timerInterval);

  const overlay = document.getElementById("resultOverlay");
  const title = document.getElementById("resultTitle");
  const message = document.getElementById("resultMessage");

  overlay.classList.remove("hidden");

  title.innerHTML = `
    <i class="fa-solid fa-door-open fail-icon"></i>
    You Quit the Game
  `;

  message.innerHTML = `
    Your final score: ${score} / 10
  `;

  // Change button text to YES
  const btn = overlay.querySelector("button:last-of-type");
  btn.innerText = "Yes";
  btn.onclick = resetToStart;  // Different function
}


/* ===============================
   CLOSE RESULT
================================= */

function closeResult() {

  document.getElementById("resultOverlay").classList.add("hidden");

  // Resume timer if game not finished
  if (timeLeft > 0 && emails.length > 0) {
    startTimer();
  }
}

/* ===============================
   Reset Funtion 
================================= */


function resetToStart() {

  // Hide both overlays
  document.getElementById("quitOverlay").classList.add("hidden");
  document.getElementById("resultOverlay").classList.add("hidden");

  // Stop timer
  clearInterval(timerInterval);

  // Reset game values
  score = 0;
  timeLeft = 120;
  selectedIndex = 0;

  document.getElementById("score").innerText = score;
  document.getElementById("timer").innerText = timeLeft;

  // Reset emails
  emails = [...originalEmails];
  emails.sort(() => Math.random() - 0.5);

  renderInbox();

  // Blur game again
  document.getElementById("gameContent").classList.add("blurred");

  // Show start overlay
  document.getElementById("startOverlay").style.display = "flex";
}
/* ===============================
   Return to Start Function 
================================= */
function returnToStart() {

  // Hide result overlay
  document.getElementById("resultOverlay").classList.add("hidden");

  // Stop timer
  clearInterval(timerInterval);

  // Reset values
  score = 0;
  timeLeft = 120;
  selectedIndex = 0;

  document.getElementById("score").innerText = score;
  document.getElementById("timer").innerText = timeLeft;

  emails = [...originalEmails];
  emails.sort(() => Math.random() - 0.5);

  renderInbox();

  // Blur game again
  document.getElementById("gameContent").classList.add("blurred");

  // Show start overlay
  document.getElementById("startOverlay").style.display = "flex";
}
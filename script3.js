// A. Dark Mode / Light Mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
};

// B. Edit Job Title
document.getElementById("editJobBtn").onclick = function () {
    let newTitle = prompt("Enter new job title:");
    if (newTitle) {
        document.getElementById("jobTitle").textContent = newTitle;
    }
};

// C. Show / Hide Skills
document.getElementById("toggleSkillsBtn").onclick = function () {
    let skills = document.getElementById("skillsSection");
    let btn = document.getElementById("toggleSkillsBtn");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        btn.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        btn.textContent = "Show Skills";
    }
};

// D. Live Character Counter
let msgBox = document.getElementById("msgBox");
let counter = document.getElementById("counter");

msgBox.onkeyup = function () {
    let remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
};

// E. Form Validation
function validateForm() {
    let name = document.getElementById("nameField").value;
    let email = document.getElementById("emailField").value;

    if (name === "" || email === "") {
        alert("Please fill out Name and Email fields.");
        return false;
    }
    return true;
}

// F. Display Today’s Date
let today = new Date();
document.getElementById("dateDisplay").textContent =
    "Date: " + today.toDateString();

// G. EXTRA FEATURE: Random Cybersecurity Tip
const tips = [
    "Use strong and unique passwords for each account.",
    "Enable two-factor authentication whenever possible.",
    "Keep your software and OS up to date.",
    "Be cautious of phishing emails and suspicious links.",
    "Regularly backup your important files.",
    "Avoid using public Wi-Fi for sensitive transactions.",
    "Always verify the source before downloading files."
];

document.getElementById("tipBtn").onclick = function () {
    let randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("tipText").textContent = tips[randomIndex];
};


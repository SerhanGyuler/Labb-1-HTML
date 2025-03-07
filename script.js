document.addEventListener("DOMContentLoaded", loadCV);

async function loadCV() {
  try {
    // Fetch the CV data from JSON file
    const response = await fetch("cv-data.json");

    // Check if the response is valid
    if (!response.ok) {
      throw new Error("Could not fetch CV data.");
    }

    // Convert response to JSON format
    const data = await response.json();

    displayEducation(data.education);
    displayWorkExperience(data.work_experience);
  } catch (error) {
    // Log any errors to the console
    console.error("Error loading CV data:", error);
  }
}

// Function to display education details in the education section
function displayEducation(education) {
  const educationContainer = document.getElementById("education");

  // Loop through education array and create list items
  education.forEach((e) => {
    const item = document.createElement("span");
    item.textContent = `${e.program}, ${e.school} (${e.years})`;
    educationContainer.appendChild(item);
  });
}

// Function to display work experience details in the work experience section
function displayWorkExperience(workExperience) {
  const workContainer = document.getElementById("workExperience");

  // Loop through work experience array and create elements
  workExperience.forEach((w) => {
    const jobItem = document.createElement("div");
    jobItem.innerHTML = `
                    <span>${w.company}, ${w.role} (${w.years}) <br>${w.description}</span>`;
    workContainer.appendChild(jobItem);
  });
}

// First Easter egg (change background color when the user clicks on the profile picture)
document.getElementById("profile-pic").addEventListener("click", function () {
  document.body.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")";
});

// Second Easter egg (popup when the user types "1337")
let secretCode = "1337";
let enteredCode = "";

document.addEventListener("keydown", function (event) {
  enteredCode += event.key;

  if (enteredCode.length > secretCode.length) {
    enteredCode = enteredCode.slice(1);
  }

  if (enteredCode === secretCode) {
    document.getElementById("popup").style.display = "block"; // Show the modal
    let audio = document.getElementById("sound1");
    audio.volume = 0.1; // Set volume to 10%
    audio.play();
  }
});

// Thirst Easter egg (popup when the user press the red button)
document.getElementById("redbutton").addEventListener("click", function () {
  document.getElementById("popup2").style.display = "block"; // Show the modal
  let audio = document.getElementById("sound2");
  audio.volume = 0.5; // Set volume to 50%
  audio.play();
});

// Close popup when the user clicks the close button
document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none"; // Hide the modal
});

// Close popup when the user clicks outside the popup
window.addEventListener("click", function (event) {
  var popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none"; // Hide the modal
  }
});

// Show second popup when the red button is clicked
document.querySelector(".redbutton").addEventListener("click", function () {
  document.getElementById("popup2").style.display = "block";
});

// Close the second popup
document.querySelector(".close-btn-2").addEventListener("click", function () {
  document.getElementById("popup2").style.display = "none";
});

// Close the second popup when the user clicks outside of it
window.addEventListener("click", function (event) {
  let popup2 = document.getElementById("popup2");
  if (event.target === popup2) {
    popup2.style.display = "none";
  }
});

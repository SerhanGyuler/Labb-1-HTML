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



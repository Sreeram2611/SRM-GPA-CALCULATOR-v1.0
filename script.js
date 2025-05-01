// Grade points mapping according to SRM grading system
const gradePointsMap = {
  "O": 10,
  "A+": 9,
  "A": 8,
  "B+": 7,
  "B": 6,
  "C": 5,
  "RA": 0, // Re-appear / Fail
  "Ab": 0  // Absent
};

// Create a course input row (NO course name)
function createCourseInput() {
  const div = document.createElement("div");
  div.className = "course";

  // Credits input
  const credits = document.createElement("input");
  credits.type = "number";
  credits.placeholder = "Credits";
  credits.min = 1;
  credits.required = true;

  // Grade select
  const gradeSelect = document.createElement("select");
  gradeSelect.required = true;
  const grades = ["O", "A+", "A", "B+", "B", "C", "RA", "Ab"];
  grades.forEach(g => {
    const option = document.createElement("option");
    option.value = g;
    option.textContent = g;
    gradeSelect.appendChild(option);
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "Remove";
  removeBtn.title = "Remove this course";
  removeBtn.onclick = () => div.remove();

  div.appendChild(credits);
  div.appendChild(gradeSelect);
  div.appendChild(removeBtn);

  return div;
}

// Create a semester input row for CGPA
function createSemesterInput() {
  const div = document.createElement("div");
  div.className = "semester";

  // Semester GPA input
  const gpaInput = document.createElement("input");
  gpaInput.type = "number";
  gpaInput.placeholder = "Semester GPA (e.g. 8.5)";
  gpaInput.min = 0;
  gpaInput.max = 10;
  gpaInput.step = 0.01;
  gpaInput.required = true;

  // Semester Credits input
  const creditsInput = document.createElement("input");
  creditsInput.type = "number";
  creditsInput.placeholder = "Total Credits";
  creditsInput.min = 1;
  creditsInput.required = true;

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "Remove";
  removeBtn.title = "Remove this semester";
  removeBtn.onclick = () => div.remove();

  div.appendChild(gpaInput);
  div.appendChild(creditsInput);
  div.appendChild(removeBtn);

  return div;
}

// GPA Calculation
function calculateGPA(courses) {
  let totalGradePoints = 0;
  let totalCredits = 0;
  for (const course of courses) {
    const credits = parseFloat(course.credits);
    const grade = course.grade;
    if (!(grade in gradePointsMap)) {
      alert("Invalid grade detected.");
      return null;
    }
    const gp = gradePointsMap[grade];
    totalGradePoints += gp * credits;
    totalCredits += credits;
  }
  if (totalCredits === 0) return 0;
  return totalGradePoints / totalCredits;
}

// CGPA Calculation
function calculateCGPA(semesters) {
  let totalGradePoints = 0;
  let totalCredits = 0;
  for (const sem of semesters) {
    const gpa = parseFloat(sem.gpa);
    const credits = parseFloat(sem.credits);
    if (isNaN(gpa) || isNaN(credits)) {
      alert("Please enter valid GPA and credits for all semesters.");
      return null;
    }
    totalGradePoints += gpa * credits;
    totalCredits += credits;
  }
  if (totalCredits === 0) return 0;
  return totalGradePoints / totalCredits;
}

// DOM Elements
const coursesContainer = document.getElementById("courses-container");
const addCourseBtn = document.getElementById("add-course-btn");
const gpaForm = document.getElementById("gpa-form");
const gpaResult = document.getElementById("gpa-result");

const semestersContainer = document.getElementById("semesters-container");
const addSemesterBtn = document.getElementById("add-semester-btn");
const cgpaForm = document.getElementById("cgpa-form");
const cgpaResult = document.getElementById("cgpa-result");

// Initialize with one course input
coursesContainer.appendChild(createCourseInput());
// Initialize with one semester input
semestersContainer.appendChild(createSemesterInput());

// Add new course input
addCourseBtn.addEventListener("click", () => {
  coursesContainer.appendChild(createCourseInput());
});

// Add new semester input
addSemesterBtn.addEventListener("click", () => {
  semestersContainer.appendChild(createSemesterInput());
});

// GPA form submit
gpaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const courses = [];
  const courseDivs = coursesContainer.querySelectorAll(".course");
  for (const div of courseDivs) {
    const inputs = div.querySelectorAll("input, select");
    const credits = inputs[0].value.trim();
    const grade = inputs[1].value;
    if (!credits || !grade) {
      alert("Please fill all course details.");
      return;
    }
    courses.push({ credits, grade });
  }
  const gpa = calculateGPA(courses);
  if (gpa !== null) {
    gpaResult.textContent = `Your GPA is: ${gpa.toFixed(2)}`;
  }
});

// CGPA form submit
cgpaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const semesters = [];
  const semesterDivs = semestersContainer.querySelectorAll(".semester");
  for (const div of semesterDivs) {
    const inputs = div.querySelectorAll("input");
    const gpa = inputs[0].value.trim();
    const credits = inputs[1].value.trim();
    if (!gpa || !credits) {
      alert("Please fill all semester details.");
      return;
    }
    semesters.push({ gpa, credits });
  }
  const cgpa = calculateCGPA(semesters);
  if (cgpa !== null) {
    cgpaResult.textContent = `Your CGPA is: ${cgpa.toFixed(2)} (Percentage: ${(cgpa * 10).toFixed(2)}%)`;
  }
});

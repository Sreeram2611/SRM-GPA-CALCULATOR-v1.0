# SRM GPA & CGPA Calculator v1.0

A web-based GPA and CGPA calculator designed specifically for SRM University students. This tool helps you calculate your semester GPA and cumulative CGPA using the official SRM grading system with an intuitive and responsive interface.

---

## Features

- **GPA Calculator:** Calculate your semester GPA by entering course credits and grades.
- **CGPA Calculator:** Compute your cumulative GPA across multiple semesters.
- **SRM Grading System:** Supports grades like O, A+, A, B+, B, C, RA (Re-appear), and Ab (Absent).
- **Dynamic Input:** Add or remove courses and semesters dynamically.
- **Responsive UI:** Clean and modern interface that works well on desktops and mobile devices.
- **Instant Results:** Displays calculated GPA and CGPA with percentage equivalent.

---

## Demo

Try it live by opening `index.html` in your browser.

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari, etc.)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Sreeram2611/SRM-GPA-CALCULATOR-v1.0.git
cd SRM-GPA-CALCULATOR
```

2. Open the `index.html` file in your preferred web browser.

No additional installations or dependencies required.

---

## Usage

### GPA Calculation (Single Semester)

1. Click **Add Course** to add input fields for each subject.
2. Enter the **Credits** and select the **Grade** for each course.
3. Click **Calculate GPA** to see your semester GPA.

### CGPA Calculation (Multiple Semesters)

1. Click **Add Semester** to add input fields for each semester.
2. Enter the **Semester GPA** and **Total Credits** for each semester.
3. Click **Calculate CGPA** to see your cumulative GPA and percentage.

---

## SRM Grading System

| Grade | Grade Point | Description          |
|-------|-------------|----------------------|
| O     | 10          | Outstanding          |
| A+    | 9           | Excellent            |
| A     | 8           | Very Good            |
| B+    | 7           | Good                 |
| B     | 6           | Above Average        |
| C     | 5           | Average              |
| RA    | 0           | Re-appear / Fail     |
| Ab    | 0           | Absent               |

---

## Project Structure

```
SRM-GPA-CALCULATOR/
│
├── index.html         # Main HTML file with the UI
├── script.js          # JavaScript logic for GPA & CGPA calculation
├── styles.css         # Styling for the application
└── README.md          # Project documentation
```

---

## How It Works

- **JavaScript (`script.js`)** contains the logic:
  - Maps grades to grade points.
  - Dynamically creates input rows for courses and semesters.
  - Calculates GPA by weighted average of grade points and credits.
  - Calculates CGPA by weighted average of semester GPAs and credits.
  - Validates inputs and shows alerts for missing or invalid data.
  
- **HTML (`index.html`)** provides the structure and forms for user input.

- **CSS (`styles.css`)** styles the app with a clean, professional look and responsive design.

---

## Contributing

Contributions and improvements are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

Created and maintained by [Sreeram2611](https://github.com/Sreeram2611).  
Feel free to reach out for any questions or suggestions.

---

Thank you for using the SRM GPA & CGPA Calculator!  
Happy calculating and best wishes for your academic success! 🎓✨

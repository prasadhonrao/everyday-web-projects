# Tip Calculator

This project is a simple **Tip Calculator** built using JavaScript, HTML, and CSS. It helps users calculate the tip amount based on the bill amount and the desired tip percentage, providing a clean and interactive user interface.

## Features

- Input fields for:
  - Bill Amount
  - Tip Percentage
- A "Calculate" button to compute the total tip and display the result.
- Responsive design for better usability on both desktop and mobile browsers.
- Lightweight implementation with no external dependencies.

## Project Structure

```text
everyday-web-projects
└── tip-calculator
    ├── index.html
    ├── script.js
    └── style.css
```

## How to Run

Follow these steps to get the Tip Calculator up and running:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/prasadhonrao/everyday-web-projects.git
   cd tip-calculator
   ```

2. **Open the project**:

   - Locate the `index.html` file.
   - Double-click the file to open it in your default web browser.
   - Alternatively, right-click and choose "Open With" → Select your preferred browser.

3. **Interact with the app**:
   - Enter the **Bill Amount** in the first input field.
   - Enter the **Tip Percentage** in the second input field.
   - Click the "Calculate" button to see the total tip amount displayed dynamically.

## How It Works

1. The user provides:
   - The total **Bill Amount**.
   - The **Tip Percentage** they want to calculate.
2. When the "Calculate" button is clicked:
   - JavaScript computes the tip amount by multiplying the bill amount by the tip percentage (divided by 100).
3. The result is displayed below the form as the **Total Tip Amount**.

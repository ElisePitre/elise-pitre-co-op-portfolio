# Co-op Work Term Report

This project is a React application designed to showcase a co-op work term report. It includes various components and pages that provide an overview of the work term experience, learnings, and conclusions. The live website can be found here: https://elise-pitre.netlify.app/

## Project Structure

```
co-op_report
└── elise_pitre_co-op
    ├── public
    │   ├── index.html        # Main HTML file for the application
    │   └── favicon.ico       # Favicon for the website
    ├── src
    │   ├── components
    │   │   └── Header.js     # Header component with title and navigation
    │   ├── pages
    │   │   ├── Home.js       # Landing page overview of the co-op work term
    │   │   └── Report.js     # Detailed report of the co-op work term
    │   ├── styles
    │   │   └── App.css       # CSS styles for the application
    │   ├── App.js            # Main component setting up routing
    │   ├── index.js          # Entry point of the React application
    │   └── reportData.js     # Data for the report
    ├── package.json          # npm configuration file
    ├── .gitignore            # Files and directories to ignore by Git
    └── README.md             # Documentation for the project
```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd elise_pitre_co-op
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

The application will be running on `http://localhost:3000`.

## Features

- A responsive header with navigation links.
- A home page that provides an overview of the co-op work term.
- A detailed report page that includes experiences, learnings, and conclusions.

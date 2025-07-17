Job Board Application
🚀 Project Overview
This is a modern, responsive Job Board application built with React and styled using Tailwind CSS. It allows users to view available job postings, search for specific roles, and post new job opportunities with detailed criteria. The application features a clean, intuitive user interface designed for a smooth job search and posting experience.

✨ Features
Responsive Design: Optimized for various screen sizes, from mobile to desktop.

Job Listing: Displays a list of available job positions with key details.

Job Details Modal: Click "View Details" on any job card to see a comprehensive overview of the role.

Job Posting Form: A dedicated section to post new job opportunities with fields for:

Dashboard Overview: A simple dashboard section providing quick statistics like total jobs available.

Navigation: Smooth scrolling to "Jobs" and "Post Job" sections from the navbar.

Search Bar (Placeholder): Integrated search inputs for keyword, location, job type, and remote options (functionality to be implemented).

🛠️ Technologies Used
React: A JavaScript library for building user interfaces.

Vite: A fast build tool for modern web projects.

Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

HTML5 & CSS3: Standard web technologies.

JavaScript (ES6+): For application logic and interactivity.

⚙️ Setup and Installation
Follow these steps to get the project up and running on your local machine.

Prerequisites
Node.js (LTS version recommended)

npm (Node Package Manager) or Yarn

Steps
Clone the repository:
If you haven't already, clone the project from your GitHub repository.

git clone https://github.com/PranayReddy2245/JobBoard.git

Navigate into the project directory:

cd JobBoard

Install dependencies:
This will install all the necessary React, Tailwind CSS, and other project dependencies.
```bash
npm install
# or if you use yarn
# yarn install
```
Run the development server:
This command starts the Vite development server, and your application will be accessible in your browser.
```bash
npm run dev
# or if you use yarn
# yarn dev
```
Typically, the app will be available at http://localhost:5173/ (or a similar port).

🚀 Usage
View Jobs: The main page displays a list of job cards.

View Job Details: Click the "View Details" button on any job card to open a modal with the full job description and information.

Post a Job:

Click the "Post Job" button in the navigation bar to scroll down to the job posting form.

Fill in all the required fields (Title, Company, Location, Salary, Type, Remote, Description).

Click "Post Job" to add the new job to the list.

Navigate: Use the "Jobs" and "Post Job" buttons in the navbar to quickly jump to respective sections.
```bash
📂 Project Structure
JobBoard/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx         # Main React application component
│   ├── index.css       # Global styles, including Tailwind CSS directives
│   └── main.jsx        # Entry point for the React app
├── .gitignore
├── index.html          # Main HTML file, includes Tailwind CDN and React root
├── package.json
├── package-lock.json
├── postcss.config.js   # PostCSS configuration for Tailwind CSS
└── tailwind.config.js  # Tailwind CSS configuration
```



ProVital DoctorPage Website

Overview

ProVital is a React-based web application designed to promote lifestyle medicine through an engaging and interactive interface. The website focuses on the six pillars of lifestyle medicine: Nutrition, Physical Activity, Restorative Sleep, Stress Management, Social Connection, and Substance Abuse. It features a responsive design with a navbar, a search bar, image sliders, and a card-based section for exploring the six pillars.

Features

Responsive Navbar:

Desktop view: Displays navigation links and a dropdown for login/signup.

Mobile view: Collapses into a hamburger menu that opens a side menu with navigation options.

Search Bar: Positioned prominently for user interaction (implementation details in SearchBar component).

Image Sliders:

Desktop: Two vertical sliders moving in opposite directions.

Mobile: A single horizontal slider combining images from both sliders.

Six Pillars Section: Interactive cards showcasing each pillar with images, descriptions, and health metrics.

Interactive Elements: Dropdown menu, clickable pillar options to reorder cards, and smooth-scrolling navigation arrows.

Tech Stack

React: JavaScript library for building the user interface.

React Icons: For icons like stethoscope, chevrons, heart, and hamburger menu.

CSS: Inline styles with media queries for responsive design.

JavaScript: Handles interactivity like dropdowns, menu toggles, and card scrolling.

Installation and Setup

Clone the Repository:

git clone cd pro-vital-doctorpage

Install Dependencies: Ensure Node.js is installed, then run:

npm install

Install required packages:

npm install react react-dom react-icons

Add Images: Place the required images (listed in the project structure) in the public/ folder.

Run the Application:

npm start

The app will be available at http://localhost:3000.

Deployment

The application can be deployed to platforms like Vercel, Netlify, or GitHub Pages. To deploy:

Build the application:

npm run build

Follow the deployment instructions for your chosen platform, uploading the contents of the build/ folder.

Deployment Link: https://rainbow-piroshki-383a4b.netlify.app/

Usage

Navbar: Click navigation links or the "Login / Signup" dropdown.

Search Bar: Use the search bar to find relevant content (functionality depends on SearchBar implementation).

Sliders: View lifestyle images in vertical sliders.

Six Pillars:

Click an option (Nutrition, Physical Activity, etc.) to bring that pillar's card to the front.

Use the left/right arrows to scroll through pillar cards.

Each card displays an image, heading, description, and a health metric with a colored heart icon.

Development Notes

Image Paths: Ensure all image files are correctly placed in the public/ folder with the specified filenames.

SearchBar Component: The SearchBar.jsx component is assumed to be implemented separately. Ensure it is compatible with the styling and responsive design.

Animations: CSS keyframes (slideHorizontal, slideUp, slideDown) control slider movements.

Styling: Inline styles are used for simplicity, with media queries for responsiveness.

Contributing

Contributions are welcome! Please submit a pull request or open an issue for bugs, feature requests, or improvements.


# Brunchy - A Simple Delivery App

## Overview

**Brunchy** is a single-page application that allows users to order their favorite brunch meals. The application offers a seamless user experience where users can:
- Browse available brunch options.
- Add meals to a basket.
- Review their order list.
- Place an order.

The project is built using **Create React App (CRA)** and follows best practices for building React applications. It uses modern UI design and CSS for styling.

## Features

- **Add items to the basket**: Users can browse through a list of available brunch items and add them to their basket.
- **Review and manage orders**: View the items in the basket with their prices
- **Place an order**: Submit the final order for delivery.

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

Make sure you have the following software installed:

- **Node.js** (version 14.x or later)
- **npm** (version 6.x or later) or **yarn** (version 1.x or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/brunchy.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd brunchy
   ```

3. **Install dependencies:**

   If you are using npm:

   ```bash
   npm install
   ```

   Or if you prefer using yarn:

   ```bash
   yarn install
   ```

### Running the Project

To run the application in development mode:

1. Use the following command to start the local development server:

   ```bash
   npm start
   ```

   Or, if you are using yarn:

   ```bash
   yarn start
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

### Building the Project

To create a production build of the application:

1. Run the following command:

   ```bash
   npm run build
   ```

   Or if you are using yarn:

   ```bash
   yarn build
   ```

2. The production-ready files will be generated in the `build` folder, ready to be deployed to a hosting service.

### Project Structure

Here's an overview of the project's file and folder structure:

```
brunchy/
├── public/             # Public assets such as index.html
├── src/                # Source files for the application
│   ├── hoc/            # High-order components
│   ├── components/     # Reusable UI components
        ├── /Cart       # The cart component
        ├── /Checkout   # The checkout component
        ├── /Header     # The checkout component
        ├── /Hero       # The hero component
        ├── /Menu List  # The menu list component
│   ├── styles/         # Global and component-specific styles
│   ├── App.js          # Main application component
│   ├── index.js        # Entry point for the application
├── .gitignore          # List of files and directories ignored by git
├── package.json        # Project configuration and dependencies
├── README.md           # Project documentation (you are here!)
└── yarn.lock / package-lock.json  # Dependency lock files
```

### Available Scripts

In the project directory, you can run the following scripts:

- **`npm start`** or **`yarn start`**: Runs the app in development mode.
- **`npm run build`** or **`yarn build`**: Builds the app for production.

### Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Create React App (CRA)**: A tool to set up a modern React application with no configuration.
- **SASS**: A CSS preprocessor that adds power and elegance to the basic language.
- **Swiper.js**: A modern touch slider library.
# CricketBibleHub - Full Stack MERN Application

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application that combines a cricket team management system with a Bible verse feature.

## Project Setup and Deployment Guide

### 1. Backend Setup (Express & MongoDB)

1.1. Created a new directory for the project and set up the server folder.
1.2. Initialized a new Node.js project:
1.3. Installed necessary dependencies:
1.4. Created `server.js` with Express server setup, MongoDB connection, and API routes.
1.5. Set up MongoDB Atlas cluster and obtained connection string.
1.6. Created `.env` file with MongoDB credentials and other environment variables.

### 2. Frontend Setup (React)

2.1. Created a new React app in the client directory:
2.2. Installed additional dependencies:
2.3. Created components for Cricketeer management and Bible verse display.
2.4. Set up routing in `App.js` to navigate between components.
2.5. Implemented API calls to the backend using Axios.

### 3. Backend Deployment (Heroku)

3.1. Created a Heroku account and installed Heroku CLI.
3.2. Logged into Heroku from the command line:
3.3. Created a new Heroku app:
3.4. Set up environment variables on Heroku:
3.5. Created a `Procfile` in the server directory:
3.6. Deployed the backend to Heroku:
3.7. Ensured at least one instance of the app was running:

### 4. Frontend Deployment (Netlify)

4.1. Updated API endpoints in React components to use the Heroku URL.
4.2. Installed Netlify CLI:
4.3. Built the React app:
4.4. Deployed to Netlify:
4.5. When prompted, specified `build` as the publish directory.

## Accessing the Deployed Application

- Frontend: https://fullstackfinalproj.netlify.app
- Backend API: https://cricketbiblehub-backend-4c982f7e2bb8.herokuapp.com

## Testing the Application

1. Open the frontend URL in a web browser.
2. Navigate through the different sections:
   - Home: Displays a random Bible verse
   - Cricketeers: Shows the list of cricket players
   - Add Cricketeer: Allows adding new players to the database
3. Test the "Get New Scripture" functionality on the home page.
4. Try adding a new cricketeer and verify it appears in the list.

## API Endpoints

- GET /api/scripture/random - Fetch a random Bible verse
- GET /api/cricketeers - Fetch all cricketeers
- POST /api/cricketeers - Add a new cricketeer

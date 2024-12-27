# Gemini Clone - Project Overview

## Description
Gemini Clone is a web application built with React.js that integrates with the Google Gemini API to generate AI-driven responses based on user prompts. The app allows users to enter a prompt, get an AI-generated response, and display it with smooth typing effects. The app uses the React Context API for state management, enabling a seamless user experience without prop drilling.

**The app features:**

- A welcoming UI where users can interact with Gemini AI.
- A custom typing effect for displaying responses.
- A history of recent prompts and results.
- Option to initiate new chats.

## Features

- **User Input & Prompt History:** The app maintains the user’s input and history of prompts.
- **Loading State:** Displays a loading animation while waiting for the AI response.
- **Processed Responses:** AI responses are processed with HTML tags for bold text and line breaks.
- **Smooth Typing Effect:** Responses are displayed with a delay, simulating a typing effect for a more engaging experience.
  
## Tech Stack

- **Frontend:** React.js
- **State Management:** React Context API
- **UI Styling:** Custom CSS (SASS can be added if preferred)
- **API Integration:** Google Gemini API
  
## Set Up Project

1. **Create a New Vite Project**
- Open Terminal:
        <br>npm create vite@latest
  
- **Project Name:** Your preferred project name
- **Framework:** React
- **Variant:** JavaScript
  
2. **Open Project in VS Code**
- Navigate to your project folder and open it in VS Code.
  
3. **Install Dependencies**

Open the integrated terminal in VS Code and run:

- npm install<br>
- npm run dev<br>
- npm install @google/generative-ai<br>
- npx eslint --init<br>
- npm install prop-types

4. **Get Your Gemini API Key**
- **Step 1:** Log in to your Google account.
- **Step 2:** Visit the [Google AI Studio Gemini API page](https://ai.google.dev/gemini-api/docs/quickstart?lang=python&_gl=1*e6lti9*_ga*MjY2MDYyNTgzLjE3MzUyOTg0NjU.*_ga_KFG60X3H7K*MTczNTI5ODQ2NS4xLjEuMTczNTI5ODUyNS4wLjAuMA..).
- **Step 3:** Click the “Get API key in Google AI Studio” button.
- **Step 4:** Review and accept the terms of service.
- **Step 5:** Create your API key by either creating a new project or selecting an existing project.
  
5. **Add Your API Key**

Once you’ve generated your API key, add it to the .env file. Insert the API key in the apiKey variable, like so:

- **Create a ***.env*** File**: In the root directory of your project (the same level as your package.json), create a .env file. Add your Gemini API key to this file like so:

VITE_GEMINI_API_KEY=your-api-key-here

## How to Run the Project Locally
1. Clone the repository or set up the project as described above.
2. Run ***npm install*** to install the required dependencies.
3. Run ***npm run dev*** to start the development server.
4. Open localhost in your browser to see the app in action.

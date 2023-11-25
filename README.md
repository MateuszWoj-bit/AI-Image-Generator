# AI Image Generator

## Overview

The AI Image Generator is a React application built with Vite. It uses the OpenAI API to generate images based on user input. Follow the steps below to set up and use the application.

## Prerequisites

Before using the app, make sure you have the following:

1. **Node.js:** Install Node.js on your machine.

2. **OpenAI API Key:** Obtain an API key from OpenAI and set it in your environment variables with the name `REACT_APP_API_KEY`.

## How to get OpenAI API Key
 
1. Visit the OpenAI website: Go to the OpenAI website at [https://www.openai.com/](https://platform.openai.com/signup)

2. Navigate to the API section: Once logged in, navigate to the API section of the OpenAI platform.

3. Apply for API access: Follow the instructions on the API page to apply for access. This might involve providing some information about how you intend to use the API and agreeing to OpenAI's terms of service.

## Getting Started

1. **Clone the Repository:**
   ```
   git clone <repository-url>
   cd <repository-folder>
2. **Install Dependencies:**
   ```
   npm install
3. **Set API Key:**
- Create a .env file in the root of the project.
- Add your OpenAI API key:
   ```js
   VITE_REACT_APP_API_KEY=api_key_here
4. **Run the App:**
   ```bash
   npm run dev
5. **Open in Browser:**
- Open your browser and navigate to http://localhost:3000 to view the app.

## How to Use
- Input Field:

Enter a prompt or description in the text input field.
This prompt will be used to generate an image.
- Generate Images:

Click on the submit icon (➢) to initiate the image generation process.
View Generated Images:

- The generated images will appear in the gallery section.
## Sample Data:

The app comes with sample data to display initial images.
Feel free to replace the sample data in the galleryItems state with your own data.

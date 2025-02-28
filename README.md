# MeetEase_Fullstack_Videoconferencing_Platform

MeetEase is a full-stack video conferencing platform modeled after Zoom. Built with the MERN stack and powered by WebRTC, it offers real-time video communication with advanced features for a seamless user experience.

## Live Demo

Experience MeetEase live at:  
[https://meeteasefront.vercel.app/](https://meeteasefront.vercel.app/)

**How to Use the Deployed Site:**
1. Visit the above link to access the live version.
2. Schedule or join meetings instantly.
3. After joining meet share your URL as MEETLINK to JOIN
4. Utilize features like screen sharing, chat, and real-time video/audio communication.

---



## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

MeetEase provides a robust, scalable solution for video conferencing with features such as:
- Real-time video and audio communication using WebRTC.
- Secure user authentication and meeting scheduling.
- Screen sharing and chat functionalities.
- End-to-end encryption for secure data transmission.
- A modern, responsive interface optimized with React, Redux, and Material UI.

This project is intended for developers and organizations looking to integrate a reliable video conferencing solution into their products or workflows.

## Features

- **Real-Time Communication:** High-quality video and audio interactions.
- **User Authentication:** Secure sign-up, login, and session management.
- **Meeting Scheduling:** Create, manage, and join meetings easily.
- **Screen Sharing:** Seamless sharing of your screen for collaboration.
- **Chat Functionality:** Integrated text chat for real-time communication.
- **Secure Transmission:** End-to-end encryption to protect user data.
- **Low-Latency Interactions:** Utilizes WebSockets to ensure responsive communication.

## Tech Stack

- **Frontend:** React.js, Redux, Material UI
- **Backend:** Node.js, Express.js
- **Real-Time Communication:** WebRTC, WebSockets
- **Databases:** MongoDB

## Installation (Local Setup)

### Prerequisites

- Node.js and npm
- MongoDB or access to a MongoDB Atlas cluster


### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/DarshanH2005/MeetEase_Fullstack_videoconferencing_platform.git
   cd MeetEase_Fullstack_videoconferencing_platform
Setup the Backend:

    cd backend
    npm install
    npm run dev

Setup the Frontend:

  Open a new terminal window:

    cd frontend
    npm install
    npm run dev

    
Configuration:

Update any necessary configuration files (such as .env) with your API keys, database URLs, and other credentials.

Usage (Local)
Once both the frontend and backend servers are running, open your web browser and navigate to http://localhost:3000 (or the designated port). You can then sign up or log in to start using MeetEase for your video conferencing needs.

For additional customization or integration details, refer to the in-code documentation and comments.

Deployment
For production deployment:

Frontend: Consider using platforms like Vercel or Netlify.
Backend: Platforms such as AWS, Heroku, or DigitalOcean are great options.
Configure environment variables and update configuration files for production settings.
If using Docker, refer to the provided Dockerfile and docker-compose configuration for containerized deployment.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch for your feature or bug fix:

    git checkout -b feature/your-feature-name
Make your changes and commit them:

    git commit -m "Describe your changes"
    
Push to your branch:

    git push origin feature/your-feature-name
    
Open a pull request and describe your changes in detail.


License
This project is licensed under the MIT License.

Contact
For questions, suggestions, or further collaboration, feel free to contact:

DarshanH2005

darshan1970h@gmail.com

[Linkedin](https://www.linkedin.com/in/darshanh2005/)

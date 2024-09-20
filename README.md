<div align="center">

# <span style="color: #FFFFFF;">News</span><span style="color: #EAB308;">Assist</span>
</div>

## Overview
NewsAssist is a cutting-edge news aggregation technology that delivers personalized news updates based on customer preferences. It uses AI-driven technologies to ensure that consumers receive relevant, accurate, and easily digestible news material from a variety of trusted sources. The software collects information from articles and sends it to an AI for summary, allowing users to save time and stay informed efficiently.

## Table of Contents

- [Key Features](#key-features)
- [Why Choose NewsAssist?](#why-choose-newsassist)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Key Features

- **Personalized News Feed**: Receive News based on interests and preferences.
- **AI-Powered Summaries**: Provides quick, accurate summaries of news articles, saving time.
- **Integrated AI ChatBot**: Are you confused about what you're reading? With an AI chatbot on the news dashboard for immediate assistance.
- **Multi-Source Integration**: News are from multiple trustworthy sources.
- **Customizable Experience**: Customize news consumption experience to your preferences.

## Why Choose NewsAssist?
In an age of information overload, NewsAssist provides a personalized news experience that allows users to cut through the noise. Its configurable features enable users to focus on the issues that are most important to them, ensuring they keep informed on topics that are relevant to their interests. Users can rapidly comprehend the main ideas of any news story thanks to AI-generated summaries, making it easier to stay up to date without spending too much time covering the whole News. This enhances not only understanding and engagement with current events, but also saves times.


## Requirements
Ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** or **Yarn** (managing dependencies)
- **MongoDB** (data storage)
- **A Google account** (API access)

## Installation
To run NewsAssist locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/chiemezie1/AiNewsAssist.git

   cd AiNewsAssist
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Set Up Environment Variables**:
   - Copy the `.env.example` file to `.env` and fill in your credentials:
     ```
     MONGO_URL=<your_mongodb_connection_string>
     NEXT_PUBLIC_GOOGLE_API_KEY=<your_google_api_key>
     GOOGLE_CLIENT_ID=<your_google_client_id>
     GOOGLE_CLIENT_SECRET=<your_google_client_secret>
     NEXTAUTH_SECRET=<your_nextauth_secret>
     NEXTAUTH_URL=http://localhost:3000
     JWT_SECRET=<your_jwt_secret>
     NEXT_PUBLIC_NEWS_API_KEY=<your_news_api_key>
     ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```
   or 
   ```bash
   yarn dev
   ```

5. **Access the Application**:
   Open your web browser and navigate to `http://localhost:3000`.

## Usage
On starting the application, users can sign up or log in from the home page. Once logged in, users are brought to the dashboard, where news stories are automatically loaded. The left sidebar allows users to personalize their news stream by selecting specific categories or sources. The main part shows the news, and readers can click on any story to read AI-generated summary. In addition, a Gemini AI chatbot is available in the lower right corner of the dashboard, allowing users to ask questions and receive real-time insights or summaries. 

## Demo

[![Demo Video](https://img.youtube.com/vi/L9ISEf9uu1Y/0.jpg)](https://www.youtube.com/watch?v=L9ISEf9uu1Y)

*Click to view video demonstration!*

Check the application: [AI News Assist](https://ai-news-assist.vercel.app/)

## License
This project is licensed under the MIT License.

## Contact
For questions or feedback: chiemezieagbo1@gmail.com.

# Person Facts

## Overview
Person Facts is a simple web application and API built with Node.js and Express. It allows users to submit their name and country through a web form, and provides fun facts about the specified country using an external API. The project demonstrates basic web development and API integration techniques.

## Features
- Web form for entering name and country
- Displays a personalized greeting message
- API endpoint to fetch fun facts about a country
- Uses environment variables for sensitive data (API keys)

## Programming Languages & Technologies
- JavaScript (Node.js, Express)
- HTML & CSS (for the frontend)

## How to Run

### Prerequisites
- Docker installed on your machine

### Steps
1. Clone this repository:
   ```sh
   git clone https://github.com/pvgomes/person-facts.git
   cd person-facts
   ```
2. Create a `.env` file with your API key:
   ```sh
   echo "API_KEY=your_actual_api_key_here" > .env
   ```
## Large Language Model (LLM)

This project uses the Groq API with the model `openai/gpt-oss-20b` as its LLM (Large Language Model) for generating country facts.
3. Build the Docker image:
   ```sh
   docker build -t person-facts .
   ```
4. Run the Docker container:
   ```sh
   docker run -p 3000:3000 --env-file .env person-facts
   ```
5. Access the web app in your browser at [http://localhost:3000](http://localhost:3000)

## API Endpoints
- `/hello?n=NUMBER` - Returns the result of 1 + n
- `/facts?name=NAME&country=COUNTRY` - Returns fun facts about the specified country

## License
MIT

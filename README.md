# Gribbit - Frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/786d4051-d04b-447d-a4ad-00aa9e6966af/deploy-status)](https://app.netlify.com/sites/gribbit/deploys)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)

## General Info

Gribbit is a frog-themed play on Reddit (Geddit?) aggregation delivering concise, relevant news updates to users. The frontend, built with React.js, provides a clean and intuitive responsive interface to browse news articles, vote and comment. This repository contains the frontend code for Gribbit, which communicates with the backend API to fetch and display news data.

The deployed version of Gribbit is available at [https://gribbit.netlify.app/](https://gribbit.netlify.app/).

The backend counterpart for this project can be found at [https://github.com/MrVolcano/news](https://github.com/MrVolcano/news).

## How to Use Gribbit

1. Visit the deployed app at [https://gribbit.netlify.app/](https://gribbit.netlify.app/).
2. Browse the latest news articles and summaries.
3. Use the search or filter options to find specific topics or categories.
4. Click on articles to view detailed summaries or access the original source.

## Running the Project Locally

### Prerequisites

**Node.js**: Ensure you have Node.js version 18.x or higher installed. You can check your Node version by running:

```bash
  node --version
```

If you need to install or update Node.js, visit nodejs.org.

## Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/MrVolcano/news_fe.git
```

### 2. Navigate to the project directory:

```bash
cd news_fe
```

### 3. Install dependencies:

```bash
npm install
```

### 4. Set up environment variables:

Create a .env file in the root of the project.

Add the necessary environment variables, such as the backend API URL. Refer to .env.example (if available) or the backend repository for required variables.

### 5. Start the development server:

```bash
npm start
```

Open your browser and navigate to http://localhost:3000 (or the port specified in your console) to view the app.

## Notes

Ensure the backend API (available at https://github.com/MrVolcano/news) is running locally or deployed and accessible for the frontend to function correctly.

If you encounter issues, verify your Node.js version and ensure all dependencies are installed.

## Additional Information

Frontend Repository: https://github.com/MrVolcano/news_fe

Backend Repository: https://github.com/MrVolcano/news

Deployed App: https://gribbit.netlify.app/

Contact: For questions or contributions, please open an issue or submit a pull request.

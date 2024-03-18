# Word Reference App

Welcome to the Word Reference App! This project is built using React and utilizes various libraries including react-router-dom and react-hot-toast. The app provides features such as user authentication, registration, and the ability for authenticated users to view cards.

## Deployed Link

You can access the deployed version of the app at: [Word Reference App](https://word-ref-app.vercel.app/)

## Installation

To install all dependencies, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command:

```
npm i
```

## Running the App
After installing the dependencies, you can run the app locally. Use the following command:
```
npm run dev
```
This command will start the development server and you should be able to access the app in your browser.

## Tech Stack
- React
- react-router-dom
- react-hot-toast

## Features
- User Authentication
- User Registration
- Access to Cards only after Authentication

## Flow of Using the App:
### Initial Landing:

- Users are welcomed to the app's landing page, where they encounter an array of enticing   cards, each presenting a unique deal or product.

### Authentication Check:

- Upon arrival, the app verifies the user's authentication status.
- If unauthenticated, users find "Add to Deal" and "Check Details" buttons inactive, accompanied by an alert urging them to authenticate.

### Login/Register:

- Users opt to login or register by clicking the respective link/button.
- They're swiftly redirected to the login page.
- If a user already has an account, they can log in. If not, the user needs to register themselves.
- Input fields for username and password await their entry.
- After submission, the system initiates the authentication process.

### Home Page with Authenticated Access:

- Authenticated users return to the home page, now greeted with enabled "Add to Deal" and "Check Details" buttons.
- "Add to Deal" allows users to save the deal or product to their account or cart.
- "Check Details" grants access to comprehensive information about the selected deal or product.

### Logout:

- Should users wish to log out, they simply initiate the process.
- Authentication status is promptly revoked.
- Subsequent redirection directs users back to the login page.
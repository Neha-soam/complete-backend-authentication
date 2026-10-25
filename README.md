Complete Backend Authentication System

A backend authentication system built using Node.js, Express.js, and MongoDB. This project implements JWT-based authentication, access and refresh token management, email verification using Nodemailer, and cookie-based authentication.

Tech Stack

- Node.js – JavaScript runtime
- Express.js – Backend web framework
- MongoDB – NoSQL database
- Mongoose – MongoDB object data modeling
- JSON Web Token (JWT) – Token-based authentication
- Nodemailer – Email verification
- cookie-parser – Cookie handling in Express.js
- dotenv – Environment variable management
- Nodemon – Automatic server restart during development

Features

1. User Authentication

- User registration and login
- Authentication APIs for handling user requests
- Protected routes for authenticated users

2. JWT Authentication

- Generate JWTs for user authentication
- Verify tokens to authenticate requests
- Protect routes using authentication middleware

3. Access Token Management

- Authenticate requests to protected routes
- Use short-lived access tokens
- Validate access tokens before granting access to protected resources

4. Refresh Token Management

- Use refresh tokens to obtain new access tokens
- Handle access token expiration without requiring the user to log in again
- Validate refresh tokens before issuing new access tokens

5. Email Verification

- Send verification emails using Nodemailer
- Support email verification during user registration, as implemented

6. Cookie-Based Authentication

- Handle authentication tokens using HTTP cookies
- Manage cookie-based authentication requests
- Configure cookie options according to security requirements

7. Database Integration

- Connect the backend application to MongoDB
- Manage user data using Mongoose models

8. Environment Configuration

- Store configuration values in environment variables
- Keep database credentials, JWT secrets, and email credentials outside the source code

Project Structure

complete-backend-authentication/
├── server.js
├── app.js
├── config.js
├── email.services.js
├── package.json
├── package-lock.json
├── .gitignore
└── ...

The structure above shows the files visible in the project screenshot. Add your actual routes, controllers, models, and middleware folders if present.

Getting Started

1. Clone the Repository

git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_FOLDER>

2. Install Dependencies

npm install

3. Configure Environment Variables

Create a ".env" file in the project root and add the variables required by your application.

PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Add the Nodemailer configuration and any access-token or refresh-token secrets required by your implementation.

Security: Never commit real secrets, passwords, email credentials, or your ".env" file to GitHub.

4. Run the Development Server

npm run dev

The server will run on the configured port, "3000", if that is the port set in your application.

Authentication Flow

1. A user registers or logs in through an authentication API.
2. The backend validates the request and user credentials.
3. The backend issues authentication tokens according to the implemented logic.
4. The access token is used to access protected routes.
5. When the access token expires, the client can use a valid refresh token to request a new access token.
6. Email verification is handled through Nodemailer wherever required by the registration flow.
7. Cookies are used for token handling if configured by the application.

Project Scope

This repository contains only the backend of the authentication system. It provides APIs that can be integrated with a frontend application.

- Frontend: Not included
- Backend: Node.js and Express.js
- Database: MongoDB
- API Testing: Postman or Thunder Client

Learning Outcomes

- Understanding authentication and authorization
- Implementing JWT-based authentication
- Understanding access tokens and refresh tokens
- Handling cookies in Express.js
- Implementing email verification using Nodemailer
- Connecting Node.js applications to MongoDB
- Organizing backend code and managing environment variables

Future Improvements

- Password reset functionality
- Role-based access control
- Automated API testing
- Additional authentication security measures

Disclaimer

This project was developed for learning purposes. Its security and production readiness depend on the actual implementation, token handling, cookie configuration, and server settings.

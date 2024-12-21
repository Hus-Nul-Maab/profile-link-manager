# Profile Link Manager

[![Node.js](https://img.shields.io/badge/Node.js-v18.x-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.x-yellow.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v4.x-brightgreen.svg)](https://www.mongodb.com/)

## Description

Profile Link Manager is a simple web application that allows users to create and manage a centralized profile page containing links to their social media accounts and a brief CV-like introduction. This makes it easy to share your online presence with a single, easy-to-remember URL.

No more juggling multiple links - simplify your online identity with Profile Link Manager!

## Features

*   **User Authentication:**
    *   Secure user registration and login.
    *   Session-based authentication to protect user data.
*   **Profile Management:**
    *   Create and customize your profile with:
        *   First Name
        *   Last Name
        *   Username
        *   Gender
        *   Email
        *   Password (securely stored - though bcrypt is recommended for real-world use)
        *   Profile Bio
        *   Social Media Links (LinkedIn, Facebook, Twitter, etc.)
        *   Creation Date
    *   Unique, shareable profile URL (e.g., `venus/yourusername`).
    *   Update or delete your profile information at any time.
*   **Password Constraints:**
    *   Enforces password complexity rules for enhanced security (at least 8 characters, one uppercase, one lowercase, one number, one special character).

## Technologies Used

*   **Frontend:**
    *   HTML
    *   CSS
    *   JavaScript
    *   EJS (Embedded JavaScript) for templating
*   **Backend:**
    *   Node.js (v18.x or higher recommended)
    *   Express.js (web framework)
    *   MongoDB (database)
    *   Mongoose (ODM for MongoDB)
*   **Other:**
    *   express-session (for session management)
    *   dotenv (for environment variable management)

## Getting Started

### Prerequisites

*   Node.js (v18.x or higher recommended) and npm (Node Package Manager) installed.
*   MongoDB (locally installed or a cloud-hosted instance like MongoDB Atlas).

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Hus-Nul-Maab/profile-link-manager.git
    cd profile-link-manager 
    ```
2. **Install dependencies:**

    ```bash
    npm install
    ```
3. **Set up environment variables:**
    *   Create a `.env` file in the root directory.
    *   Add the following environment variables:

        ```
        MONGODB_URI=mongodb://localhost:27017/venusDB  # Replace with your MongoDB connection string
        SESSION_SECRET=your_secret_key # Replace with a strong secret key for sessions
        ```

### Running the Application

1. **Start the server:**

    ```bash
    npm start
    ```
2. **Access the application:**
    Open your web browser and go to `http://localhost:3000`.

## Usage

1. **Create an Account:**
    *   Click on the "Create Account" link.
    *   Fill in the registration form with your details.
    *   Ensure your password meets the specified complexity requirements.
2. **Login:**
    *   Use your registered email and password to log in.
3. **Manage Your Profile:**
    *   After logging in, you'll be redirected to your profile page.
    *   Add your social media links and write a short bio.
    *   Click "Update Profile" to save your changes.
    *   You can delete your profile using the "Delete Profile" button (use with caution!).
4. **Share Your Profile:**
    *   Your unique profile URL will be something like `http://localhost:3000/users/yourusername` (replace `yourusername` with your actual username).
    *   Share this URL with anyone who needs access to your online profiles.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your commit message"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

*   This project was inspired by the need for a simple and efficient way to share online profiles.

## Contact

If you have any questions or suggestions, feel free to reach out to me through my profile.

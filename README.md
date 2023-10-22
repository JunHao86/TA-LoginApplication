# LoginApplication
- Frontend - React.js
- Backend - SpringBoot
- Database - MySQL

## Requirements:
- Successful login leads to welcome page (shows name, username, manager or user role)
  - If logged in user has a manager role, there will be a link/button to access a restricted webpage.
  - Restricted webpage check for manager role (Only allows access for managers. Redirects if otherwise)
- Logout Functionality Implementation
- Data stored in MySQL Database
- MVC (Model-View-Controller) pattern

## Installation and Setup

1. Clone the repository or download it as a .zip file
2. Install the required dependencies for the frontend using "npm install" and backend components(maven clean install).
3. In the backend (login-back/src/main/resources/application.properties), configure the MySQL database setting, notably username and password

![image](https://i.imgur.com/yjQLQ0V.png)

4. In sequence, load up the following
  - MySQL server (connect to Database)
  - Backend (Run LoginApp.java, found in login-back/src/main/java/com/loginapplication)
  - React (npm start in Command Prompt, cd to login-front folder)
  - Add users/managers into database using the given SQL Query in InsertManagerUser.sql (found in root directory of repository).
    - If one wishes to alter the query, fill in all values and ensure role is `Manager` or `User`

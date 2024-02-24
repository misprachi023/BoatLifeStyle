# BoatLifeStyle Clone

![BoatLifeStyle Logo](https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434)

boat-lifestyle clone was a  Construct-week project at Masai School. In this we have tried to clone the website.

Our task is that we have to create a consumer electronics brand the famous electronic e-commerce website boat-lifestyle clone with basic core functionalities and good looking user interface.

As we all know BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos. BoAt is an Indian e-commerce company. It is India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!...

BoAt brand is Indian, but its products, not so much. boAt's products are made through contract manufacturing in China, which is a reason why they are so affordable.

# Functionalities
User can able to register themselves.

In this website , the user can login with his own mail, which will be sent to his own phone number and after entering the OTP then he can login.

User can able to search any electronic product using search-bar which support three different parameters.

User can search electronic product according to sectors in sliding menu.

User can able to filter product list according to several parameters.

After clicking on any electronic product , product page added to the cart page then you will go to the address page and fell address and choose the payment mode. you can do it with anyone.. .

in footer page the user can subscribe by mail, so that he will also get the welcome message from the website.

[BoAt LifeStyle Deploy Link](https://boat-life-style-nine.vercel.app/)

# computer: Tech Stack
   <p align="center">
      <img src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" alt="html" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="css" width="55" height="55"/>
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="reactjs" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="Nodejs" width="55" height="55"/>
      <img src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="MongoDB" width="55" height="55"/>
      <img src= "https://tse1.mm.bing.net/th?id=OIP.igsTOJNvPT5roAeEEwUn7QAAAA&pid=Api&P=0&h=180" alt ="Express" width="55" height ="55" color="red"/>
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="GIT" width="55" height="55" marginleft="15"/>
    <img src="https://img.icons8.com/?size=96&id=r9QJ0VFFrn7T&format=png" alt ="chakra" width="55" height="55" />
      <img src="https://www.svgrepo.com/show/354048/material-ui.svg" alt="GIT" width="55" height="55" marginleft="15"/>
</p>

## Installation
To run Sears locally, follow these steps:
1. Clone this repository: `git clone https://github.com/misprachi023/BoatLifeStyle.git`
2. Navigate to the project directory: `cd BoatLifeStyle`
3. Install dependencies for the server: `npm install`
4. Navigate to the client directory: `cd client`
5. Install dependencies for the client: `npm install`
6. Return to the root directory: `cd ..`
7. Start the server: `npm run server`
8. Start the client: `npm run client`


## Middlewares
1. `cors`: Allows cross-origin resource sharing with specified origins.
2. `morgan`: HTTP request logger middleware.
3. `express.json()`: Parses incoming request bodies in JSON format.
4. `cookieParser`: Parses cookies attached to the client request.
   
## Error Handling
- 400: Bad request, typically due to invalid input.
- 401: Unauthorized, typically due to invalid credentials.
- 404: Not found, typically when a requested resource does not exist./Invalid request route.
- 500: Internal server error.

## Routes
### Signup

- **Endpoint**: `POST /signup`
- **Description**: Register a new user.
- **Request Body**:
  - `userName`: User's name.
  - `email`: User's email.
  - `password`: User's password.
- **Response**:
  - **Success**: Status 200 with a success message and user details.
  - **Failure**: Status 400 with an error message.

### Login

- **Endpoint**: `POST /login`
- **Description**: Authenticate a user and generate access and refresh tokens.
- **Request Body**:
  - `email`: User's email.
  - `password`: User's password.
- **Response**:
  - **Success**: Status 200 with access and refresh tokens.
  - **Failure**: 
    - Status 404 if user not found.
    - Status 401 if invalid password.
    - Status 500 for internal server error.

### Verify OTP

- **Endpoint**: `POST /verify-otp`
- **Description**: Verify OTP for password reset.
- **Request Body**:
  - `otp`: OTP sent to the user's email.
  - `email`: User's email.
- **Response**:
  - **Success**: Status 201 with a success message.
  - **Failure**: Status 401 with an error message.

### Logout
**Endpoint**: `POST /logout`
- **Description**: Logout user and invalidate access token.
- **Response**:
- **Success**: Status 200 with a success message.
- **Failure**: Status 400 with an error message.

## Middlewares
**Authentication Middleware**
- **Middleware**: `auth`
- **Description**: Middleware function to authenticate user requests.
- **Usage**: Imported and used in routes that require authentication.

# Authentication Middleware

This middleware provides authentication functionality using JSON Web Tokens (JWT). It verifies access tokens and refresh tokens to authenticate user requests.

## `auth`

### Description
Middleware function to authenticate user requests using JWT.

### Usage
Import and use in routes that require authentication.

### Functionality

#### Verification of Access Token:
- Verifies the provided access token using the ACCESS_KEY stored in the environment variables.
- If the access token is valid, adds the decoded user information to the request body and proceeds to the next middleware or route handler.
- If the access token is invalid or expired, it checks for a valid refresh token.

#### Verification of Refresh Token:
- If the access token is expired, it verifies the provided refresh token using the REFRESH_KEY stored in the environment variables.
- If the refresh token is valid, generates a new access token and sends it in a cookie along with the response.
- If the refresh token is invalid or expired, returns a 401 Unauthorized response.

#### Blacklist Check:
- Checks if the provided access token and refresh token are blacklisted.
- If either token is found in the blacklist, it prevents access and prompts the user to log in again.

### Configuration
Ensure that the following environment variables are set:
- `ACCESS_KEY`: Secret key used to sign and verify access tokens.
- `REFRESH_KEY`: Secret key used to sign and verify refresh tokens.

### Dependencies
- `jsonwebtoken`: Used for generating and verifying JWTs.
- `BlacklistModel`: Model for storing blacklisted tokens (not included in this code snippet).
- `dotenv`: Used for loading environment variables from a .env file.


**Screenshort**

![Home page](<client/file/Screenshot 2024-02-12 231929.png>)>
![page](<client/file/Screenshot 2024-02-12 231953.png>)
![page](<client/file/Screenshot 2024-02-12 232028.png>)
![page](<client/file/Screenshot 2024-02-12 232047.png>)
![page](<client/file/Screenshot 2024-02-12 232115.png>)
![page](<client/file/Screenshot 2024-02-12 232202.png>)
![page](<client/file/Screenshot 2024-02-12 232218.png>)
![page](<client/file/Screenshot 2024-02-12 232236.png>)
![page](<client/file/Screenshot 2024-02-12 232250.png>)
![page](<client/file/Screenshot 2024-02-12 232307.png>)
![page](<client/file/Screenshot 2024-02-12 232346.png>)
![page](<client/file/Screenshot 2024-02-12 232405.png>)
![page](<client/file/Screenshot 2024-02-12 232427.png>)
![page](<client/file/Screenshot 2024-02-12 232442.png>)
![page](<client/file/Screenshot 2024-02-12 232504.png>)
![page](<client/file/Screenshot 2024-02-12 232521.png>)
![page](<client/file/Screenshot 2024-02-12 232620.png>)
![page](<client/file/Screenshot 2024-02-12 232634.png>)
![page](<client/file/Screenshot 2024-02-12 232654.png>)
![page](<client/file/Screenshot 2024-02-12 232711.png>)
![page](<client/file/Screenshot 2024-02-12 232726.png>)
![page navbar user](<client/file/Screenshot 2024-02-12 232747.png>)
![page create account](<client/file/Screenshot 2024-02-12 232806.png>)
![page otp](<client/file/Screenshot 2024-02-12 232820.png>)
![page login](<client/file/Screenshot 2024-02-12 232834.png>)
![page logout](<client/file/Screenshot 2024-02-12 232904.png>)


# Learning Outcomes
in this project ,we learned about the power of collaborating with the team when we worked together all tasks were completed without any problems and we implemented so many things in this project by exploring more and more that's why we are able to completed our project.

THANK YOU !

TEAM Boat-lifestyle

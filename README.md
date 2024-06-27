# Exam Portal API

## Introduction

The Exam Portal is a web-based application designed to streamline the recruitment process for 2nd-year students interested in joining the college technical society. This project leverages a variety of technologies, including Node.js, Express.js, MongoDB, Nodemailer, Mongoose, and Cyclic, to create an efficient and user-friendly platform for the selection process.

## Key Features

### Admin Panel

- **Exam Creation:** Admins can create new exams with specific details, such as exam name, date, and eligibility criteria.
- **User Management:** Admins can manage user profiles and access to exams, ensuring a smooth recruitment process.
- **Results Viewing:** Admins have the ability to view and assess exam results, facilitating decision-making.

### User Portal

- **User Profiles:** Candidates interested in joining the technical society can create and manage their profiles on the platform.
- **Exam Enrollment:** Users can enroll in exams they are eligible for and receive important information via email.
- **Result Access:** Users can access and view their exam results on the portal.

## Technologies Used

- **Node.js:** A fast and efficient server-side runtime environment.
- **Express.js:** A powerful framework for building web applications.
- **MongoDB:** A NoSQL database for efficient data storage and retrieval.
- **Nodemailer:** Used to send important exam-related emails to candidates.
- **Mongoose:** An Object Data Modeling (ODM) library for MongoDB, simplifying data modeling.
- **Cyclic:** Technology used for specific application needs.

## Why Exam Portal?

- **Efficiency:** The use of cutting-edge technologies ensures an efficient and streamlined recruitment process.
- **User-Friendly:** The portal is designed to be user-friendly, making it easy for both admins and candidates to use.
- **Scalability:** The platform is robust and scalable, capable of handling a large number of users and exams.

## Getting Started

To get started with the Exam Portal, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure your MongoDB connection in the application.
4. Start the application using `npm start`.

# Feedback API

Welcome to the Feedback API! This API provides endpoints for managing feedback questions and responses.

## Feedback Questions

### 1. Add Feedback Question
   - **Endpoint:** `POST /addfeedbackquest`
   - **Description:** Add a new feedback question.

### 2. Get Feedback Questions
   - **Endpoint:** `GET /getfeedbackquestions`
   - **Description:** Retrieve all feedback questions.

## Feedback Responses

### 3. Add Feedback Response
   - **Endpoint:** `POST /addfeedbackres`
   - **Description:** Add a feedback response.

### 4. Get Feedback Responses
   - **Endpoint:** `GET /getFeedbacks`
   - **Description:** Retrieve all feedback responses.

## Questions API

Welcome to the Questions API! This API provides endpoints for managing questions.

### 1. Add Questions
   - **Endpoint:** `POST /addquestions`
   - **Description:** Add new questions.

### 2. Get Questions
   - **Endpoint:** `GET /getquestions`
   - **Description:** Retrieve all questions.

### 3. Delete Question
   - **Endpoint:** `DELETE /:id`
   - **Description:** Delete a question by ID.

### 4. Update Question
   - **Endpoint:** `PATCH /updatequestion/:id`
   - **Description:** Update a question by ID.

### 5. Search Question
   - **Endpoint:** `GET /search/:key`
   - **Description:** Search questions by a keyword.

### 6. Category Question
   - **Endpoint:** `GET /category/:key`
   - **Description:** Filter questions by category.

## User API

Welcome to the User API! This API provides endpoints for user-related operations.

### 1. Register User
   - **Endpoint:** `POST /addcandidate`
   - **Description:** Register a new user.

### 2. Get Users
   - **Endpoint:** `GET /getcandidates`
   - **Description:** Retrieve all users.

### 3. Hostler Filter
   - **Endpoint:** `GET /filter/:Hostler/:Gender`
   - **Description:** Filter users by hostler status and gender.

### 4. User Login
   - **Endpoint:** `POST /userlogin`
   - **Description:** User login.

### 5. User Logout
   - **Endpoint:** `POST /userlogout`
   - **Description:** User logout.

## Response Scoring API

Welcome to the Response Scoring API! This API provides an endpoint for scoring responses.

### 1. Submit Response
   - **Endpoint:** `POST /submit`
   - **Description:** Submit a response for scoring.

---

Feel free to explore and integrate these endpoints into your application! If you have any questions or need further assistance, please refer to the documentation or reach out. Happy coding!

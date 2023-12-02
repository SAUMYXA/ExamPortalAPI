# Exam Portal API

Welcome to the Exam Portal API – the powerhouse behind a cutting-edge exam platform where the knowledge of more than 200 students converges. This API empowers seamless interactions with exam-related functionalities, including feedback submission, access to questions, and a comprehensive view of individual exam responses.

## Overview

Our Exam Portal serves as the digital arena where students engage in exams, providing a dynamic and user-friendly experience. Explore the following APIs to harness the full potential of the platform:

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

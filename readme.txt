==============================
📝 LemonPay Task Manager Backend
==============================

Overview:
---------
This backend powers the LemonPay Task Manager, a secure task management API using Node.js, Express, and MongoDB. It provides authentication using JWT and CRUD operations for managing user-specific tasks.

Technologies Used:
------------------
- Node.js
- Express.js
- MongoDB (Mongoose)
- bcryptjs
- jsonwebtoken
- express-validator
- dotenv

Setup Instructions:
-------------------
1. Clone the repository:
   git clone https://github.com/CHITHIRAIKANIS/lemonB.git
   cd lemonB

2. Install dependencies:
   npm install

3. Create a .env file in the root directory and add:
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret>

4. Start the server:
   npm run dev

API Endpoints:
--------------
AUTH:
- POST /api/auth/register : Register a new user
- POST /api/auth/login    : Login and receive JWT

TASKS (protected):
- GET /api/tasks          : Get all tasks for logged-in user
- POST /api/tasks         : Create a new task
- PUT /api/tasks/:id      : Update a task by ID
- DELETE /api/tasks/:id   : Delete a task by ID

Assumptions:
------------
- Each user has access only to their own tasks
- Token is sent in the Authorization header as Bearer <token>
- Passwords are hashed and validated server-side
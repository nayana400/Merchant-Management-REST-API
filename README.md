Merchant Management REST API

Tech Stack:
  
  •	Node.js
  
  •	Express.js
  
  •	MongoDB
  
  •	JWT Authentication

Installation:

1. Clone the repository
   
    • git clone <github-repo-link>
    
    • cd merchant-management

3. Install dependencies
4. 
     • npm install

Install Required Packages:

   • npm install express cors dotenv mongoose
   
   • npm install bcrypt jsonwebtoken

Environment Variables:

Create a .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run the Project:

   • node server.js

Server URL:
      http://localhost:5000

API Endpoints:

Authentication:

•	POST /api/auth/login

Categories:

   • POST /api/categories

Merchants:
   • POST /api/merchants
   • GET /api/merchants
   • GET /api/merchants/:id
   • PATCH /api/merchants/edit/:id
   • DELETE /api/merchants/:id

Authorization:
   • All APIs except Login require a JWT token in the header:
   • Authorization: Bearer <jwt_token>

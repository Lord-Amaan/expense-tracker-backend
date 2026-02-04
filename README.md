# Expense Tracker 📊

Simple RESTful backend for tracking user expenses. Built with **Node.js**, **Express**, **MongoDB (Mongoose)** with JWT-based authentication, bcrypt password hashing, and optional Google GenAI integration for text generation.

---

## Features ✅

- User signup and login (passwords hashed with bcrypt)
- JWT-based auth middleware for protected routes
- Add, fetch, update, delete expenses
- Category-wise expense aggregation
- Optional: Google Gemini text generation integration (see `Contoller/textGen.js`)

---

## Tech Stack 🔧

- Node.js + Express
- MongoDB via Mongoose
- JWT for authentication
- bcrypt for password hashing
- Google GenAI client (`@google/genai`) — optional

---

## Prerequisites ⚙️

- Node.js (v16+ recommended)
- MongoDB instance (local or hosted)

---

## Setup & Run (local) 🏃‍♂️

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and set the following environment variables:

```
MONGO_URI=mongodb://localhost:27017/expenseTracker
secret=your_jwt_secret
GEMINI_API_KEY=your_google_api_key # optional, only if using GenAI features
```

3. Start the server:

```bash
node index.js
# or with nodemon if you prefer:
# npx nodemon index.js
```

Server runs on port 3000 by default (change in `index.js` if needed).

---

## API Endpoints 📡

All request/response bodies are JSON. Protected routes require an `Authorization` header with a bearer token:

```
Authorization: Bearer <token>
```

- GET /  
  - Health check — returns a short message

Auth:
- POST /auth/signup  
  - Body: `{ "name": "Your Name", "email": "you@example.com", "pass": "password" }`  
  - Response: 201 with a token (JWT) and success message

- POST /auth/login  
  - Body: `{ "email": "you@example.com", "pass": "password" }`  
  - Response: login success message (use this to obtain a token if returned by your login implementation)

Expense (requires auth):
- POST /expense/addExpense  
  - Body: `{ "amount": 100, "category": "Food", "description": "Lunch" }`  
  - Response: 201 with the created expense

- GET /expense/getExpenses  
  - Returns the list of expenses for the authenticated user

- DELETE /expense/deleteExpense/:id  
  - Deletes the expense with the given id

- PUT /expense/updateExpense/:id  
  - Body: `{ "amount": 150, "category": "Food", "description": "Lunch + coffee" }`  
  - Updates and returns the updated expense

- GET /expense/categoryWiseExpenses  
  - Returns aggregated totals by category for the authenticated user

---

## Notes & Suggestions 💡

- Keep secrets out of source control. Add `.env` and sensitive files to `.gitignore` and untrack any already-committed secrets with:

```bash
git rm -r --cached .
git add .
git commit -m "Remove ignored files from repo"
```

- If sensitive data was pushed, rotate secrets immediately and consider rewriting history (BFG or `git filter-repo`) if necessary.

- `Contoller/textGen.js` uses `GEMINI_API_KEY` — only set this if you will use the GenAI feature.

- There are no tests currently in the project; adding basic integration tests for auth and expense routes is recommended.

---

## Contributing 🤝

Contributions are welcome. Please open issues or PRs. Add a suitable `LICENSE` if you plan to publish.

---

## License 📄

MIT (add a LICENSE file to make this explicit)


If you want, I can also:
- Add a sample `.env.example` file, or
- Create a basic `.gitignore`, or
- Improve the `login` endpoint to return the JWT token on success

Tell me which one you want next.
# Expense Tracker 

Simple RESTful backend for tracking user expenses. Built with **Node.js**, **Express**, **MongoDB (Mongoose)** with JWT-based authentication, bcrypt password hashing, and optional Google GenAI integration for text generation.

---

## Features 

- User signup and login (passwords hashed with bcrypt)
- JWT-based auth middleware for protected routes
- Add, fetch, update, delete expenses
- Category-wise expense aggregation
- Optional: Google Gemini text generation integration (see `Contoller/textGen.js`)

---

## Tech Stack 

- Node.js + Express
- MongoDB via Mongoose
- JWT for authentication
- bcrypt for password hashing
- Google GenAI client (`@google/genai`)

---

## Prerequisites ⚙️

- Node.js (v16+ recommended)
- MongoDB instance (local or hosted)

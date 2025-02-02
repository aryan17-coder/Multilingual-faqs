# 📖 Multilingual FAQs

A **Node.js-based multilingual FAQ system** that allows users to retrieve frequently asked questions in multiple languages using a REST API.

---

## 🚀 Features

- ✅ **Multilingual Support** – Retrieve FAQs in different languages.
- ✅ **RESTful API** – Well-structured API endpoints.
- ✅ **Database Integration** – Uses PostgreSQL with Sequelize ORM.
- ✅ **CRUD Operations** – Create, Read, Update, and Delete FAQs.
- ✅ **Jest Testing** – Ensures API reliability with unit tests.
- ✅ **Environment Configuration** – Uses `.env` for easy setup.
- ✅ **Scalable Architecture** – Follows MVC (Model-View-Controller) pattern.

---

## 🛠 Installation Guide

### **Prerequisites**
Before proceeding, ensure you have the following installed:

- **Node.js** (Recommended: v18+)
- **npm** (Node Package Manager)
- **PostgreSQL** (Ensure it's running on your machine)
- **Git** (For version control)

### **Step 1: Clone the Repository**
```sh
git clone https://github.com/your-username/multilingual-faqs.git
cd multilingual-faqs


Install dependencies:

npm install

Set up the database:

Ensure PostgreSQL is installed and running.

Create a database:

createdb mydatabase

Configure .env with your database details:

DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=mydatabase
DB_HOST=localhost
DB_PORT=5432

Run migrations (if applicable):

npx sequelize-cli db:migrate

Start the server:

npm start

By default, the server will run on http://localhost:3000.

API Usage

Get FAQs

GET /api/faqs?lang=en

Response:

[
  {
    "id": 1,
    "question": "What is this service?",
    "answer": "This service provides multilingual FAQs."
  }
]

Add a New FAQ

POST /api/faqs
Content-Type: application/json

Request Body:

{
  "question": "How do I reset my password?",
  "answer": "Click on 'Forgot Password' on the login page.",
  "language": "en"
}

Response:

{
  "id": 2,
  "question": "How do I reset my password?",
  "answer": "Click on 'Forgot Password' on the login page.",
  "language": "en"
}

Update an FAQ

PUT /api/faqs/2

Request Body:

{
  "question": "How do I change my password?",
  "answer": "Go to settings and click 'Change Password'.",
  "language": "en"
}

Response:

{
  "id": 2,
  "question": "How do I change my password?",
  "answer": "Go to settings and click 'Change Password'.",
  "language": "en"
}

Delete an FAQ

DELETE /api/faqs/2

Response:

{
  "message": "FAQ deleted successfully"
}

Running Tests

To ensure everything is working correctly, run the test suite:

npm test

Contribution Guidelines

We welcome contributions! To contribute:

Fork the repository.

Create a feature branch:

git checkout -b feature-branch-name

Make your changes and commit:

git commit -m "Add new feature"

Push to your branch:

git push origin feature-branch-name

Open a pull request.
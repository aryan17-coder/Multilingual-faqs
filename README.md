# 🌍 Multilingual FAQs

A **Node.js-based** multilingual FAQ system that allows users to retrieve frequently asked questions in multiple languages using a **REST API**.

![Node.js](https://img.shields.io/badge/Node.js-v18+-green) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supported-blue) ![License](https://img.shields.io/badge/License-MIT-orange)

---

## 🚀 Features

✅ **Multilingual Support** – Retrieve FAQs in multiple languages.  
✅ **RESTful API** – Well-structured API endpoints.  
✅ **PostgreSQL Integration** – Uses Sequelize ORM for database operations.  
✅ **CRUD Operations** – Create, Read, Update, and Delete FAQs.  
✅ **Testing Support** – Uses Jest for API testing.  
✅ **Secure Environment Configuration** – Uses `.env` for database credentials.  

---

## 📌 Installation

### 🔧 Prerequisites
Ensure you have the following installed before proceeding:
- **Node.js** (Recommended: v18+)
- **npm** (Node Package Manager)
- **PostgreSQL** (Ensure it's installed and running)
- **Git** (For version control)

### 📥 Steps

1️⃣ **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/multilingual-faqs.git
   cd multilingual-faqs
   ```
2️⃣ **Install dependencies:**
   ```sh
   npm install
   ```
3️⃣ **Set up the database:**
   - Ensure PostgreSQL is installed and running.
   - Create a database:
     ```sh
     createdb mydatabase
     ```
   - Configure `.env` with your database details:
     ```env
     DB_USER=your_username
     DB_PASSWORD=your_password
     DB_NAME=mydatabase
     DB_HOST=localhost
     DB_PORT=5432
     ```
   - Run migrations (if applicable):
     ```sh
     npx sequelize-cli db:migrate
     ```
4️⃣ **Start the server:**
   ```sh
   npm start
   ```
   By default, the server will run on **`http://localhost:3000`**.

---

## 📡 API Usage

### 📖 Get FAQs
```http
GET /api/faqs?lang=en
```
**Response:**
```json
[
  {
    "id": 1,
    "question": "What is this service?",
    "answer": "This service provides multilingual FAQs."
  }
]
```

### ➕ Add a New FAQ
```http
POST /api/faqs
Content-Type: application/json
```
**Request Body:**
```json
{
  "question": "How do I reset my password?",
  "answer": "Click on 'Forgot Password' on the login page.",
  "language": "en"
}
```
**Response:**
```json
{
  "id": 2,
  "question": "How do I reset my password?",
  "answer": "Click on 'Forgot Password' on the login page.",
  "language": "en"
}
```

### ✏️ Update an FAQ
```http
PUT /api/faqs/2
```
**Request Body:**
```json
{
  "question": "How do I change my password?",
  "answer": "Go to settings and click 'Change Password'.",
  "language": "en"
}
```
**Response:**
```json
{
  "id": 2,
  "question": "How do I change my password?",
  "answer": "Go to settings and click 'Change Password'.",
  "language": "en"
}
```

### 🗑️ Delete an FAQ
```http
DELETE /api/faqs/2
```
**Response:**
```json
{
  "message": "FAQ deleted successfully"
}
```

---

## 🧪 Running Tests

To ensure everything is working correctly, run the test suite:
```sh
npm test
```

---

## 🤝 Contribution Guidelines

We welcome contributions! To contribute:

1. **Fork the repository.**
2. **Create a feature branch:**
   ```sh
   git checkout -b feature-branch-name
   ```
3. **Make your changes and commit:**
   ```sh
   git commit -m "Add new feature"
   ```
4. **Push to your branch:**
   ```sh
   git push origin feature-branch-name
   ```
5. **Open a pull request.**

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

For questions or support, reach out via email: **your-email@example.com**

🚀 Happy Coding! 🎉

# Mini CRM – Client Lead Management System

A simple and professional **Mini CRM (Customer Relationship Management)** application designed to manage client leads efficiently. The system allows users to create, update, view, and delete leads, track lead status, add notes, and securely access the application using JWT authentication.

## 🚀 Features

* **Lead CRUD**

  * Create new leads
  * View all leads
  * Update lead information
  * Delete leads

* **Status Management**

  * Update lead status
  * Track leads through different stages
  * Example statuses:

    * New
    * Contacted
    * Converted

* **Notes System**

  * Add notes to leads
  * Store important client information
  * Track follow-ups and communication

* **JWT Authentication**

  * Secure user authentication
  * Login-based access
  * Protected API routes using JSON Web Tokens

* **Dashboard UI**

  * Simple and clean dashboard
  * Display lead information
  * Quick overview of lead statuses
  * Easy-to-use interface

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* React.js *(if used)*

### Backend

* Node.js
* Express.js

### Database

* MongoDB / MySQL

### Authentication

* JSON Web Token (JWT)

## 📂 Project Structure

```text
Mini-CRM/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── config/
│
├── README.md
└── package.json
```

## 📊 Lead Management

Each lead can contain information such as:

| Field  | Description                   |
| ------ | ----------------------------- |
| Name   | Client name                   |
| Email  | Client email address          |
| Phone  | Client contact number         |
| Source | Where the lead came from      |
| Status | Current lead status           |
| Notes  | Additional client information |

## 🔐 Authentication

The application uses **JWT (JSON Web Token)** for authentication.

### Authentication Flow

```text
User
  ↓
Login
  ↓
Server verifies credentials
  ↓
JWT Token Generated
  ↓
Token stored by Client
  ↓
Protected API Requests
  ↓
Dashboard Access
```

## 📈 Dashboard

The dashboard provides a simple interface to manage leads.

It can display:

* Total Leads
* New Leads
* Contacted Leads
* Converted Leads
* Lead details
* Lead status
* Notes

## 🔄 Lead Workflow

```text
New Lead
   ↓
Contacted
   ↓
Follow-up
   ↓
Converted
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mini-crm.git
```

### 2. Navigate to the Project

```bash
cd mini-crm
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file:

```env
PORT=5000
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string
```

### 5. Start the Server

```bash
npm start
```

For development:

```bash
npm run dev
```

## 🌐 API Endpoints

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Leads

```text
GET    /api/leads
GET    /api/leads/:id
POST   /api/leads
PUT    /api/leads/:id
DELETE /api/leads/:id
```

### Notes

```text
GET  /api/leads/:id/notes
POST /api/leads/:id/notes
```

### Status

```text
PUT /api/leads/:id/status
```

## 🧪 Example Lead

```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "source": "Website",
  "status": "New",
  "notes": "Interested in the product."
}
```

## 🔒 Security

The project implements:

* JWT-based authentication
* Protected API routes
* Environment variables for sensitive configuration
* Server-side authentication validation

> **Note:** Never commit your `.env` file or JWT secret to GitHub.

## 🎯 Project Objective

The main objective of this project is to build a lightweight CRM system that demonstrates practical concepts of:

* CRUD operations
* REST APIs
* Authentication
* Database management
* Frontend-backend integration
* Dashboard development
* Client lead management

## 🔮 Future Improvements

* Advanced search and filtering
* Pagination
* Email notifications
* Lead assignment to team members
* Follow-up reminders
* Analytics and charts
* Role-based authentication
* Dark mode
* Deployment with a cloud database

## 👨‍💻 Author

**Rajan Kumar Yadav**

GitHub: `https://github.com/your-username`

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

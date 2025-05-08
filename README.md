# MERN_NotesManager

A full-stack **Notes Manager** application built using the **MERN stack**:  
**MongoDB, Express.js, React.js, Node.js**

Users can **create**, **read**, **update**, and **delete** notes — fully connected to a MongoDB database hosted on **MongoDB Atlas**.

---

## Features

- Backend: Node.js + Express.js REST API
- Database: MongoDB Atlas (cloud) with Mongoose
- Frontend: React (with Axios for API calls)
- Full CRUD operations (Create, Read, Update, Delete)
- Cross-origin support using CORS

---

##  Project Structure
```bash
mern-notes-manager/
├── backend/
│ ├── server.js
│ ├── routes/
│ ├── models/
│ └── .env
├── frontend/
│ ├── src/
│ └── public/
└── README.md
```


---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/MERN_NotesManager.git
cd MERN_NotesManager
```

## 2. Set Up the Backend
```
cd backend
npm install
```

## Create a .env file in the /backend folder:
```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/notesdb
```

## Then run:
```
npm run dev
```
## 3. Set Up the Frontend
```
cd ../frontend
npm install
npm start
```

- Visit the frontend at http://localhost:3000

## 📸 Screenshot

![App Screenshot](./C:\Users\Lenovo\Documents\GitHub\MERN_NotesManagerApp\mern-notes-manager\images\screenshot.PNG)


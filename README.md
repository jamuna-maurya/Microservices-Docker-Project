# Containerizing & Orchestrating Microservices with Docker Compose

## Project Overview

This project demonstrates a beginner-level microservices architecture using:

- React.js Frontend
- Node.js Backend API
- MongoDB Database
- Docker
- Docker Compose

The application is fully containerized and orchestrated using Docker Compose.

---

# Architecture

Frontend → Backend API → MongoDB

---

# Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB
- Docker
- Docker Compose

---

# Project Structure

```bash
Microservices-Docker-Project/
│
├── frontend/
├── backend/
├── database/
├── docker-compose.yml
├── .env
└── README.md
```

---

# Run Project

## Build & Start Containers

```bash
docker compose up --build
```

---

# Access Application

Frontend:

```bash
http://localhost:3000
```

Backend API:

```bash
http://localhost:5000/api
```

---

# Features

- Multi-container architecture
- Docker networking
- Persistent MongoDB storage
- Environment variable management
- Backend scaling support
- Single-command deployment

---

# Scale Backend

```bash
docker compose up --scale backend=3
```

---

# Author
 
jeny📖

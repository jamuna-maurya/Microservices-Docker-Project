# Containerizing & Orchestrating Microservices with Docker Compose

A beginner-friendly DevOps project demonstrating how to containerize and orchestrate a microservices-based application using Docker and Docker Compose.

## Project Overview

This project consists of three independent services:

* Frontend: React.js
* Backend: Node.js + Express
* Database: MongoDB

All services run inside separate Docker containers and communicate through a Docker network.

---

## Architecture

```text
Frontend (React)
        |
        v
Backend API (Node.js/Express)
        |
        v
MongoDB Database
```

---

## Technologies Used

* Docker
* Docker Compose
* React.js
* Node.js
* Express.js
* MongoDB
* Git & GitHub
* Ubuntu 24.04

---

## Project Structure

```text
Microservices-Docker-Project/
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── docker-compose.yml
├── .env
├── .gitignore
├── README.md
│
└── screenshots/
    ├── frontend.png
    ├── api.png
    ├── docker-ps.png
    └── logs.png
```

---

## Features

* Multi-container application
* Dockerized frontend and backend
* MongoDB containerized database
* Docker Compose orchestration
* Environment variable management
* Persistent storage using Docker Volumes
* Internal Docker networking
* Scalable architecture

---

## Docker Compose Services

### Frontend

* React Application
* Runs on Port 3000

### Backend

* Node.js Express API
* Runs on Port 5000

### Database

* MongoDB
* Runs on Port 27017

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Microservices-Docker-Project.git

cd Microservices-Docker-Project
```

### Build and Start Containers

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up -d --build
```

---

## Verify Running Containers

```bash
docker ps
```

Expected containers:

* frontend
* backend
* database

---

## Application URLs

Frontend:

```text
http://localhost:3000
```

Backend API:

```text
http://localhost:5000/api
```

MongoDB:

```text
mongodb://localhost:27017
```

---

## Screenshots

### Docker Containers Running

<img width="2868" height="384" alt="image" src="https://github.com/user-attachments/assets/dd487e2e-ee19-4381-992f-4561e3fed87b" />



---

### Frontend Application

<img width="2846" height="1070" alt="image" src="https://github.com/user-attachments/assets/d77cbdf9-be42-4664-afa6-ef29c5d9c3fe" />


---

### Backend API Response

<img width="1348" height="646" alt="image" src="https://github.com/user-attachments/assets/8c77be0c-4639-4141-a757-baefe423a8af" />


---

### Docker Compose Logs

<img width="2880" height="1704" alt="image" src="https://github.com/user-attachments/assets/54c05f22-7a1c-42ab-8bed-2ddec3842393" />

<img width="2852" height="162" alt="image" src="https://github.com/user-attachments/assets/e02c78b7-d0f6-4135-9c6f-907b8ac1f5be" />

<img width="2880" height="1704" alt="image" src="https://github.com/user-attachments/assets/11793e50-cdfa-4299-876d-ed8b1aa000dd" />

<img width="2880" height="1704" alt="image" src="https://github.com/user-attachments/assets/64b799ed-1608-46a4-976f-f5f50c377987" />

---

## Persistent Storage

MongoDB data is stored using Docker Volumes.

```yaml
volumes:
  mongo_data:
```

This prevents data loss when containers restart.

---

## Scaling Backend Service

Scale backend containers:

```bash
docker compose up --scale backend=3
```

---

## Useful Commands

Build Containers:

```bash
docker compose up --build
```

Stop Containers:

```bash
docker compose down
```

Remove Containers and Volumes:

```bash
docker compose down -v
```

View Logs:

```bash
docker compose logs
```

---

## Learning Outcomes

Through this project, I learned:

* Docker containerization
* Docker Compose orchestration
* Microservices architecture
* Service-to-service communication
* Environment variable management
* Persistent storage with volumes
* Container networking
* DevOps deployment practices

---

## Future Enhancements

* Nginx Reverse Proxy
* Redis Caching
* CI/CD with GitHub Actions
* Docker Hub Integration
* AWS EC2 Deployment
* Kubernetes Migration

---


# Author
 
jeny📖

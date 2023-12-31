# **BuzzStack Project(Innoscripta Test)**

This project consists of a Laravel Backend and a React Frontend, both dockerized and ready to run together.

## **Prerequisites**

Before running this project, make sure you have the following dependencies installed on your machine:

- Git
- Docker
- Docker Compose

### **Getting Started**

To get started with the BuzzStack project, follow the steps below:

- Create an **"_/app_"**. directory

```
mkdir app
```

- Create a frontend and backend folder within the **"_/app_"** directory

```
touch frontend backend
```

- Navigate to the backend directory and clone the Backend Repository:

```
git clone https://github.com/joelebukatobi/backend-laravel-api .
```

- Do the same for the frontend as well

```
git clone https://github.com/joelebukatobi/react-news-app .
```

### **Creating the _docker-compose.yaml file_**

Open a terminal and navigate to the root directory of the project **"_/app_"** and create the file **_docker.compose.yaml_** file and paste the following in using your favourite editor

```
version: '3.7'
services:
  backend:
    container_name: buzzstack-backend
    build:
      context: ./backend
      dockerfile: Dockerfile
    environment:
      DB_HOST: db
      DB_PORT: 3306
      DB_DATABASE: buzzstack
      DB_USERNAME: buzzstack
      DB_PASSWORD: password
    ports:
      - 8000:8000
    volumes:
      - ./backend:/app/backend
    depends_on:
      - db
    networks:
      - app

  frontend:
    container_name: buzzstack-frontend
    build:
      context: ./frontend
      dockerfile: Dockerfile
    tty: true
    ports:
      - 5173:5173
    volumes:
      - ./frontend:/app/frontend
    depends_on:
      - backend
    networks:
      - app

  db:
    container_name: buzzstack-db
    image: mysql:8.0.33
    environment:
      MYSQL_DATABASE: 'buzzstack'
      MYSQL_USER: 'buzzstack'
      MYSQL_PASSWORD: 'password'
      MYSQL_ROOT_PASSWORD: 'password'
    volumes:
      - .dbdata:/var/lib/mysql
    networks:
      - app

networks:
  app:
    driver: bridge


```

### **Project Structure**

Your project directory structure should be looking like this at this point.

```
app/
├── backend/           # Laravel Backend
│   ├── Dockerfile
│   ├── ...
├── frontend/          # React Frontend
│   ├── Dockerfile
│   ├── ...
├── docker-compose.yaml
├── ...

```

### **Build and Run the Docker Containers**

Run the following command from the root directory **_/app_** to build and run the Docker containers:

```
docker-compose up
```

Docker Compose will build the images and create a network for the backend and frontend containers to communicate. The Laravel backend will be exposed on port 8000, and the React frontend will be exposed on port 3000.

### **Environment Variables**

Ensure to get API keys from the following vendors and replace in the **_.env_** file

- [The New York Times API](https://developer.nytimes.com/get-started)
- [TheNEWS API](https://newsapi.org/register)
- [The Guardian](https://bonobo.capi.gutools.co.uk/register/developer)

### **Access the Applications**

Laravel Backend: Open your web browser and visit http://localhost:8000.
React Frontend: Open your web browser and visit http://localhost:5173.

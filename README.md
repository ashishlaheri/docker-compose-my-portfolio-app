# React Portfolio Deployment with Docker Compose

This project is a **React-based portfolio** for **Ashish Kumar Laheri**, containerized using **Docker** and deployed with **Docker Compose**.

## 🚀 Features
- **React.js** for the frontend
- **Docker** for containerization
- **Nginx** for serving static files
- **Docker Compose** for easy deployment

## 📂 Directory Structure
```
/portfolio-react
│── /public               # Static assets
│── /src                  # React source code
│   │── Portfolio.js      # Portfolio component
│   │── App.js            # Main App file
│   │── index.js          # Entry point
│── .dockerignore         # Ignore unnecessary files in Docker
│── .gitignore            # Ignore files for Git
│── Dockerfile            # Docker image definition
│── docker-compose.yml    # Docker Compose configuration
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation
```

## 🛠️ Setup & Installation
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/ashishlaheri/docker-compose-my-portfolio-app.git
cd  docker-compose-my-portfolio-app
```

### **2️⃣ Install Dependencies** (Optional for local testing)
```sh
npm install
npm start
```

### **3️⃣ Build & Run with Docker Compose**
```sh
docker-compose up --build -d
```

### **4️⃣ Access the Application**
Once the container is running, open:
```
http://localhost:3000
```

## 📌 Useful Docker Commands
- **Stop the container:** `docker-compose down`
- **Restart a stopped container:** `docker start <container_id>`
- **Check running containers:** `docker ps`
- **View logs:** `docker logs <container_id>`

## 📧 Contact
For any questions or issues, reach out to me at **ashish@example.com** or connect on [LinkedIn](https://linkedin.com/in/ashishlaheri).

---
### 🌟 If you find this useful, don't forget to ⭐ the repository on GitHub!


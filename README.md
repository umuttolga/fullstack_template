# Product Search Application

A full-stack web application for searching and managing products, built with Flask RESTful API backend and React/TypeScript frontend.

## 🚀 Features

- RESTful API endpoints for product management
- Type-safe frontend implementation using TypeScript
- Responsive and modern UI design
- Secure API endpoints

## 🛠️ Tech Stack

### Backend
- Flask
- Flask-RESTful
- Python 3.x
- SQLAlchemy (if used for database)

### Frontend
- Nextjs
- React
- TypeScript
- Modern JavaScript (ES6+)
- CSS/SCSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- Python (v3.7 or later)
- pip (Python package manager)
- Git

## 🔧 Installation

### Clone the Repository
```bash
git clone https://github.com/umuttolga/product_search.git
cd product_search
```

### Backend Setup
```bash
# Navigate to server directory
cd server

# Create a virtual environment
python -m venv venv

# Activate virtual environment
# On Windows
.\venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the server
python app.py
```

### Frontend Setup
```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start the development server
npm start
```



## 🛠️ Development

### Running Tests
```bash
# Backend tests
cd server
python -m pytest

# Frontend tests
cd client
npm test
```

### Building for Production
```bash
# Frontend build
cd client
npm run build
```


## 👤 Author

Umut Tolga

## 🙏 Acknowledgments

- [Flask Documentation](https://flask.palletsprojects.com/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

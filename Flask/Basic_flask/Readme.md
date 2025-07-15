# 📚 Flask Book Library Web App

This is a simple **Flask-based web application** that supports user registration, login, and displays a list of books with cover images and downloadable PDF links.

---

## 🚀 Features

- User Registration & Login (session-based)
- Books displayed with:
  - Title
  - Cover Image
  - PDF download link
- MySQL backend (no ORM)
- Local image support via Flask static files

---

## 🛠️ Tech Stack

- Python 3.x
- Flask
- MySQL
- HTML/CSS (templated via Jinja2)

---

## 📁 Project Structure

```
Basic_flask/
├── app.py
├── static/
│   └── how_linux_work.jpg
├── templates/
│   ├── login.html
│   ├── register.html
│   └── welcome.html
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. ✅ Clone the Repo (or create manually)

```bash
git clone <your-repo-url>
cd Basic_flask
```

### 2. ✅ Install Requirements

```bash
pip install flask mysql-connector-python
```

### 3. ✅ Start MySQL and Create Database

Login to MySQL:

```bash
mysql -u root -p
```

Then run:

```sql
CREATE DATABASE flask_users;
USE flask_users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    password VARCHAR(100)
);

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    image_url TEXT,
    pdf_url TEXT
);
```

### 4. ✅ Insert Sample Book

```sql
INSERT INTO books (title, image_url, pdf_url)
VALUES (
  'How Linux Works',
  '/static/how_linux_work.jpg',
  'https://drive.google.com/file/d/1Kr1eUWVNKK7MqZexz3UzLk6pZch8yfkf/view?usp=sharing'
);
```

### 5. ✅ Run the App

```bash
python3 app.py
```

Visit: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## 🔐 Default Credentials (for testing)

You can register a new user from the UI.

---

## 📸 Screenshots (Optional)

Add screenshots of the welcome page, book grid, login/register form, etc.

---

## 📚 Future Features

- Admin panel for uploading books
- Password hashing with bcrypt
- Search & filter books
- Upload PDFs/images to cloud (e.g., Firebase or S3)
- REST API version for frontend frameworks

---

## 👨‍💻 Author

Made by **Konda Nagu** using Flask + MySQL.

---

## 📄 License

MIT License (or add your preferred license)
Here’s your updated and cleaned-up version of the markdown file with better formatting, structure, and some minor improvements in explanation clarity:

⸻


# 📘 Django Models and ORM with SQLite3 (Full Guide)

## 🔰 Introduction

Django is a powerful Python web framework that includes an Object-Relational Mapper (**ORM**) to interact with databases using Python code instead of raw SQL. By default, Django uses **SQLite3**, a lightweight, file-based database that requires no separate server process.

---

## 🧱 What is a Model?

A **Model** in Django is a Python class that represents a single table in your database. Each attribute of the model represents a column in the table. Models are defined by subclassing `django.db.models.Model`.

### ✅ Example: Creating a Simple Model

```python
from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField()


⸻

⚙️ ORM Operations

Once the model is defined and migrations are applied, you can interact with the database using Django’s ORM:

➕ Create (Insert Data)

student = Student(name="John", age=20, email="john@example.com")
student.save()

📄 Read (Retrieve Data)
	•	Get all records:

Student.objects.all()


	•	Get a specific record by ID:

Student.objects.get(id=1)


	•	Filter records:

Student.objects.filter(age=20)



📝 Update Data

student = Student.objects.get(id=1)
student.name = "Jane"
student.save()

❌ Delete Data

student = Student.objects.get(id=1)
student.delete()


⸻

🧪 Notes
	•	After defining a model, run the following commands:

python manage.py makemigrations
python manage.py migrate


	•	Use the Django shell to test your models:

python manage.py shell



⸻

📚 Summary
	•	Models define your data structure in Python.
	•	Django ORM allows for clean, readable database queries.
	•	SQLite3 is a great default database for development.
	•	You can later switch to PostgreSQL, MySQL, etc., without changing your model code.

⸻

✅ Next Steps:
Learn how to create relationships (OneToOne, ForeignKey, ManyToMany), use Meta options, and add validations to your models.

Would you like me to include `admin.py` integration or show how to register the model in the admin panel?

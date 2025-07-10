

# 📘 Django Project Guide: CRUD Setup for a Simple `Person` App

**Project Name**: `demo3`  
**App Name**: `data`  
**Goal**: Display a list of people from a database in the browser (`/persons/`)

---

## ✅ 1. `models.py` – Define your database table

📄 **Location**: `data/models.py`

```python
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.name
```

🔹 **What this does**:
- Defines a database table called `Person`
- Each person has `name` and `age` fields
- The `__str__` method makes it look nice in the admin panel

---

## ✅ 2. `views.py` – Logic to get data and send it to HTML

📄 **Location**: `data/views.py`

```python
from django.shortcuts import render
from .models import Person

def person(request):
    people = Person.objects.all()  # get all Person records
    return render(request, 'data/person.html', {'people': people})
```

🔹 **What this does**:
- Defines a function `person()` to handle requests to `/persons/`
- Fetches all data from the `Person` model
- Sends that data to `person.html` template using the variable `people`

---

## ✅ 3. `urls.py` – Link browser URL to your view

📄 **Location**: `data/urls.py`

```python
from django.urls import path
from . import views

urlpatterns = [
    path("persons/", views.person, name="person")
]
```

📄 **Location**: `demo3/urls.py` (main project URLs)

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('data.urls')),  # connect app-level urls
]
```

🔹 **What this does**:
- Maps URL `/persons/` to your `views.person` function
- `name="person"` allows referencing this URL in templates

---

## ✅ 4. `admin.py` – Register model for admin panel

📄 **Location**: `data/admin.py`

```python
from django.contrib import admin
from .models import Person

admin.site.register(Person)
```

🔹 **What this does**:
- Makes the `Person` model editable via Django Admin panel

---

## ✅ 5. Template (HTML) – Display the data

📄 **Location**: `data/templates/data/person.html`

```html
<!DOCTYPE html>
<html>
<head>
    <title>Person List</title>
</head>
<body>
    <h1>All Persons</h1>
    <ul>
        {% for person in people %}
            <li>{{ person.name }} ({{ person.age }} years old)</li>
        {% endfor %}
    </ul>
</body>
</html>
```

🔹 **What this does**:
- Loops through the `people` list sent by the view
- Displays each person’s name and age

---

## ✅ 6. Setup and Run

🛠️ **Run these terminal commands:**

```bash
# Make sure you're in the same directory as manage.py
python3 manage.py makemigrations
python3 manage.py migrate

# Create superuser to access admin
python3 manage.py createsuperuser

# Start server
python3 manage.py runserver
```

---

## ✅ 7. Access the App

| Page               | URL                          |
|--------------------|-------------------------------|
| Django Admin Panel | http://127.0.0.1:8000/admin/  |
| Persons List Page  | http://127.0.0.1:8000/persons/|

---

## 📂 Final File Structure Overview

```
demo3/
├── data/
│   ├── admin.py
│   ├── models.py
│   ├── urls.py
│   ├── views.py
│   ├── migrations/
│   └── templates/
│       └── data/
│           └── person.html
├── demo3/
│   └── urls.py
├── db.sqlite3
└── manage.py
```

---

Let me know if you want to extend this with **Add/Edit/Delete functionality (full CRUD)** or make it a **React/Flask/Django hybrid** later.

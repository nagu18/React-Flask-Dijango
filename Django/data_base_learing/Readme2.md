Here’s a step-by-step guide to build a Django project with the following features:
	•	List all persons (name & age)
	•	Add a new person
	•	Use Django templates and forms
	•	Use proper urls.py, views.py, models.py, and HTML templates

⸻

🔧 Project Name: demo3

📦 App Name: data

⸻

✅ Step-by-Step Guide

1️⃣ Create the Django project and app

django-admin startproject demo3
cd demo3
python manage.py startapp data


⸻

2️⃣ Register the app in demo3/settings.py

INSTALLED_APPS = [
    ...
    'data',
]


⸻

3️⃣ Define your model in data/models.py

from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()

    def __str__(self):
        return self.name


⸻

4️⃣ Make and apply migrations

python manage.py makemigrations
python manage.py migrate


⸻

5️⃣ Create PersonForm in data/forms.py

from django import forms
from .models import Person

class PersonForm(forms.ModelForm):
    class Meta:
        model = Person
        fields = ['name', 'age']


⸻

6️⃣ Create views in data/views.py

from django.shortcuts import render, redirect
from .models import Person
from .forms import PersonForm

def person(request):
    people = Person.objects.all()
    return render(request, "data/person.html", {'people': people})

def add_person(request):
    if request.method == 'POST':
        form = PersonForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('person')
    else:
        form = PersonForm()
    return render(request, 'data/add_person.html', {'form': form})


⸻

7️⃣ Create URLs in data/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path("persons/", views.person, name="person"),
    path("add/", views.add_person, name="add_person"),
]


⸻

8️⃣ Include app URLs in demo3/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('data.urls')),
]


⸻

9️⃣ Create templates folder

Create this folder structure:

data/
├── templates/
│   └── data/
│       ├── person.html
│       └── add_person.html


⸻

🔟 person.html

<!DOCTYPE html>
<html>
<head><title>Person List</title></head>
<body>
    <h1>Person List</h1>
    <ul>
        {% for person in people %}
            <li>{{ person.name }} - {{ person.age }}</li>
        {% empty %}
            <li>No people found.</li>
        {% endfor %}
    </ul>
    <p><a href="{% url 'add_person' %}">Add New Person</a></p>
</body>
</html>


⸻

1️⃣1️⃣ add_person.html

<!DOCTYPE html>
<html>
<head><title>Add Person</title></head>
<body>
    <h1>Add New Person</h1>
    <form action="" method="post">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit">Add</button>
    </form>
    <p><a href="{% url 'person' %}">Back to list</a></p>
</body>
</html>


⸻

1️⃣2️⃣ Run the server

python manage.py runserver


⸻

✅ Now Visit:
	•	http://127.0.0.1:8000/persons/ — View all people
	•	http://127.0.0.1:8000/add/ — Add a new person

⸻

Let me know if you’d like to add:
	•	Login/Register/Profile
	•	Bootstrap styling
	•	Search or filters
	•	Pagination

I’m ready when you are!
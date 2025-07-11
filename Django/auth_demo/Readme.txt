Absolutely! Here’s the complete README.md content for your Django authentication app — all in one place and cleanly formatted:

⸻


# 🛡️ Django Authentication App

This is a simple **user authentication system** built with Django.  
It includes:

- ✅ User Registration  
- ✅ User Login  
- ✅ User Logout  
- ✅ Protected Home Page (only for logged-in users)

---

## 📁 Project Structure

your_project/
│
├── accounts/               # Django app for authentication
│   ├── templates/accounts/ # HTML templates
│   │   ├── register.html
│   │   ├── login.html
│   │   └── home.html
│   ├── views.py            # View functions
│   ├── urls.py             # App URLs
│
├── your_project/           # Main project settings
│   ├── settings.py
│   ├── urls.py
│
├── manage.py

---

## 🧠 Features & View Logic

### 🔹 `register(request)`
- **URL:** `/register/`
- **Purpose:** Register a new user.
- **Logic:**
  - If username already exists → shows error.
  - Else → creates user and redirects to login.

```python
def register(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        if User.objects.filter(username=username).exists():
            messages.error(request, 'Username already exists')
        else:
            User.objects.create_user(username=username, password=password)
            messages.success(request, 'User registered successfully')
            return redirect('login')
    return render(request, 'accounts/register.html')


⸻

🔹 user_login(request)
	•	URL: /login/
	•	Purpose: Authenticates user credentials and logs in.
	•	Logic:
	•	If valid → redirect to home.
	•	If invalid → show error.

def user_login(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Invalid credentials')
    return render(request, 'accounts/login.html')


⸻

🔹 home(request)
	•	URL: /
	•	Purpose: Protected page, only visible when logged in.

@login_required(login_url='login')
def home(request):
    return render(request, 'accounts/home.html')


⸻

🔹 user_logout(request)
	•	URL: /logout/
	•	Purpose: Logs out the user and redirects to login.

def user_logout(request):
    logout(request)
    return redirect('login')


⸻

🌐 URL Configuration

accounts/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.register, name='register'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
]

Include it in your project’s main urls.py

from django.urls import path, include

urlpatterns = [
    path('', include('accounts.urls')),
]


⸻

🖥️ HTML Templates

📄 register.html

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <h1>Register</h1>
    <form method="POST">
        {% csrf_token %}
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Register</button>
    </form>
    <a href="{% url 'login' %}">Already have an account? Login</a>
</body>
</html>


⸻

📄 login.html

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h1>Login</h1>
    <form method="POST">
        {% csrf_token %}
        <input type="text" name="username" placeholder="Username" required><br>
        <input type="password" name="password" placeholder="Password" required><br>
        <button type="submit">Login</button>
    </form>
    <a href="{% url 'register' %}">Don't have an account? Register</a>
</body>
</html>


⸻

📄 home.html

<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>
    <h2>Welcome, {{ request.user.username }}</h2>
    <a href="{% url 'logout' %}">Logout</a>
</body>
</html>


⸻

⚙️ Setup Instructions

1. Install Django

pip install django


⸻

2. Start Django Project & App

django-admin startproject your_project
cd your_project
python manage.py startapp accounts


⸻

3. Add accounts to INSTALLED_APPS in settings.py

INSTALLED_APPS = [
    ...
    'accounts',
]


⸻

4. Set up templates folder (in settings.py)

TEMPLATES = [
    {
        ...
        'DIRS': [BASE_DIR / 'accounts/templates'],
        ...
    },
]


⸻

5. Run Migrations

python manage.py makemigrations
python manage.py migrate


⸻

6. Run the Development Server

python manage.py runserver

Then visit http://127.0.0.1:8000

⸻

✅ Summary

Function	URL path	Description
home	/	Protected home page (login needed)
register	/register/	Register new users
login	/login/	Log in existing users
logout	/logout/	Log out users


⸻

🔐 Powered by Django’s Built-in Auth System
	•	No extra packages needed
	•	Secure password hashing
	•	Session-based login/logout
	•	@login_required for view protection

⸻

📚 Happy Coding!

If you’d like to enhance this project with:
	•	Email verification
	•	Password reset
	•	Bootstrap UI

Just ask!

---

Let me know if you want this saved as a `.md` file or pushed to GitHub!


-------------------------------------------------------------------------------
Perfect! Let’s update your README.md with the Django settings.py configurations and main urls.py for proper integration of your app (accounts) and static files.

Here’s the complete updated section to include in your existing README.md under a new heading like:

⸻

⚙️ Django Project Configuration

🔧 settings.py Updates

Make sure these settings are present in your settings.py file:

# apps
INSTALLED_APPS = [
    ...
    'accounts',  # Register your app here
]

# templates
TEMPLATES = [
    {
        ...
        'DIRS': [BASE_DIR / 'accounts/templates'],  # Optional if using app templates folder
        ...
    },
]

# Static files (CSS, JS, Images)
STATIC_URL = 'static/'

# Login redirection for @login_required
LOGIN_URL = 'login'

✅ LOGIN_URL = 'login' ensures Django redirects to /login/ when someone tries to access a @login_required view without being logged in.

⸻

🌐 main urls.py (project-level)

In your main project folder (same level as settings.py), update urls.py like this:

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),  # Include your app URLs
]

✅ This line path('', include('accounts.urls')) connects your app’s URLs to the main project.

⸻

Let me know if you’d like to include static file usage with HTML (e.g., linking CSS or JS), or if you want the full README.md combined with these new settings!
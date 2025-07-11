
# 🛒 Django Web Catalog (Category → Product Viewer)

This Django project allows users to select a product category and view items (products) with their prices, dynamically loaded from a database.

---

## ✅ Step-by-Step Setup

### 1. 📦 Create Project and App

```bash
django-admin startproject web_catlog
cd web_catlog
python manage.py startapp data
```

---

### 2. ⚙️ Configure `settings.py`

- Add `'data',` to `INSTALLED_APPS`.
- Ensure `'APP_DIRS': True` is set inside `TEMPLATES`.

---

### 3. 🧱 Create Models in `data/models.py`

```python
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f"{self.name} ({self.category.name})"
```

---

### 4. 🔐 Register Models in `data/admin.py`

```python
from django.contrib import admin
from .models import Category, Product

admin.site.register(Category)
admin.site.register(Product)
```

---

### 5. 🧾 Create Form in `data/forms.py`

```python
from django import forms
from .models import Category

class CategorySelectForm(forms.Form):
    category = forms.ModelChoiceField(queryset=Category.objects.all(), label='Select Category')
```

---

### 6. 👁️ Add View in `data/views.py`

```python
from django.shortcuts import render
from .forms import CategorySelectForm
from .models import Product

def view_products_by_category(request):
    products = None
    selected_category = None

    if request.method == 'POST':
        form = CategorySelectForm(request.POST)
        if form.is_valid():
            selected_category = form.cleaned_data['category']
            products = Product.objects.filter(category=selected_category)
    else:
        form = CategorySelectForm()

    return render(request, 'data/category_products.html', {
        'form': form,
        'products': products,
        'selected_category': selected_category
    })
```

---

### 7. 🔗 Add URLs

#### `data/urls.py`

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_products_by_category, name='view_products'),
]
```

#### `web_catlog/urls.py`

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('data.urls')),
]
```

---

### 8. 🖼️ Create Template

Place this in `data/templates/data/category_products.html`

```html
<!DOCTYPE html>
<html>
<head><title>Products by Category</title></head>
<body>
    <h1>View Products by Category</h1>
    <form method="post">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit">Show Products</button>
    </form>

    {% if selected_category %}
        <h2>Products in "{{ selected_category.name }}"</h2>
        {% if products %}
            <ul>
                {% for product in products %}
                    <li>{{ product.name }} — ₹{{ product.price }}</li>
                {% endfor %}
            </ul>
        {% else %}
            <p>No products in this category.</p>
        {% endif %}
    {% endif %}
</body>
</html>
```

---

### 9. 🧪 Migrate and Create Superuser

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

---

### 10. 🚀 Run and Use

```bash
python manage.py runserver
```

- Visit `http://localhost:8000/admin` to add Categories & Products.
- Visit `http://localhost:8000/` to use the form and view filtered products.

---

✅ Done! You now have a working web catalog project where users can view products by selecting a category.
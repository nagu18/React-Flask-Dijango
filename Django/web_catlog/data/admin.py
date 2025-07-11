
# Register your models here.

from django.contrib import admin
from .models import Category, Product  # Import your models

# Register models so they appear in the admin dashboard
admin.site.register(Category)
admin.site.register(Product)
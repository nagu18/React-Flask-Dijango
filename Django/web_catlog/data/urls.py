from django.urls import path
from . import views

urlpatterns = [
    path("cart/" , views.view_products_by_category, name='view_products'),
]
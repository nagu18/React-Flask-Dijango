from django.urls import path #remeber this line
from . import views #rember this line
#this for u r brower:- url /persons is:- 
urlpatterns = [
    path("persons/", views.person, name="person"),
    path("add/", views.add_person, name="add_person"),
    ]

from django.shortcuts import render
from .models import Person

# Create your views here.
def person(request):
    people = Person.objects.all()
    return render(request,"data/person.html",{'people':people})


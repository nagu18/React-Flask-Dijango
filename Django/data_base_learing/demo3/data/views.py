from django.shortcuts import render,redirect
from .models import Person
from .forms import PersonForm

# Create your views here.

def person(request): # we should create a function person(request)
    people = Person.objects.all() #people = Person.objects.all():-the data _base flach to people
    return render(request,"data/person.html",{'people':people})

#view is used for render the html files 
# it is used in urls.py person function:- 

def add_person(request):
    if request.method == 'POST':
        form = PersonForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('person') # redirecting after the post
    else:
        form = PersonForm()
    return render(request, 'data/add_person.html', {'form':form})

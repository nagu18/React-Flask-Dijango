from django.db import models

# Create your models here.
class Person(models.Model):
    name=models.CharField(max_length=100)
    age=models.IntegerField()

    def __str__(self):
        return self.name
    
#here wu create the data_base
# set it to admin.py for input the data base 
# the go to view.py to render the page and use the model by a object in view.py 
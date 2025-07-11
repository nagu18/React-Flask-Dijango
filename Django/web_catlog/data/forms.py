from django import forms
from .models import Category

class CategorySelectForm(forms.Form):
    category = forms.ModelChoiceField(queryset=Category.objects.all(), label='Select Category')
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
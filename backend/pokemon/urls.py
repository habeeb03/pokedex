from django.urls import path
from . import views

app_name = 'pokemon'

urlpatterns = [
    path('', views.PokemonList.as_view(), name='index'),
    path('add-to', views.add_to_category, name='add-to'),
    path('categories', views.CategoriesList.as_view()),
    path('<slug>', views.get_by_category, name='by-category')
]

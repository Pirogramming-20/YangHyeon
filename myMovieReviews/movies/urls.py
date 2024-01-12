from django.urls import path
from .views import *

urlpatterns = [
    path('',movie_list, name="movie_list"),
    path('orderby_title',movie_list_orderby_title, name="movie_list"),
    path('orderby_rate',movie_list_orderby_rate, name="movie_list"),
    path('orderby_runningtime',movie_list_orderby_runningtime, name="movie_list"),
    path('',movie_list, name="movie_list"),
    path('<int:pk>',movie_detail, name="movie_detail"),
    path('create',movie_create, name="movie_create"),
    path('<int:pk>/update',movie_update, name="movie_update"),
    path('<int:pk>/delete',movie_delete, name="movie_delete")
]
from django.urls import path,include
from .views import *


app_name = "posts"

urlpatterns=[
    path('', main, name="main"),
    path('create/', create, name="create"),
    path('delete/<int:pk>/', delete, name="delete"),
    path('update/<int:pk>/', update, name="update"),
    path('comments/', include('apps.comments.urls')),
    path('like/',pushLike, name="like"),
]

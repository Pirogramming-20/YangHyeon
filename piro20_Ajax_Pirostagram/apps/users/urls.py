from django.urls import path
from .views import *
app_name = "users"


urlpatterns=[
    path('', login, name="login"),
    path('register/', register, name="register"),
    path('logout/',logout, name='logout'),
   
]
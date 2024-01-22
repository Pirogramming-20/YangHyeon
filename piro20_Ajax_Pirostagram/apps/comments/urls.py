from django.urls import path
from .views import *


app_name = "comments"

urlpatterns=[
    path('<int:pk>/', detail ,name='detail'),
    path('<int:pk>/comments/', comment, name='write_comment'),
    path('delete_comments/<int:Cid>/', delete_comment, name='delete_comment'),
]
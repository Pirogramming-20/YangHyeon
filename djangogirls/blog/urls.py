from django.urls import path
from . import views

urlpatterns = [
    path('',views.post_list, name="post_list"), # post_list 라는 view 가 루트 URL 에 추가되었다.
]
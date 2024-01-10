from django.urls import path
from . import views

urlpatterns = [
    path('',views.post_list, name="post_list"), # post_list 라는 view 함수가 루트 URL 에 추가되었다.
    # /post/3/ 가 예시로 입력된다면,,, views.post_detail 함수 실행
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
]
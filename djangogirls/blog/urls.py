from django.urls import path
from . import views

urlpatterns = [
    path('',views.post_list, name="post_list"), # post_list 라는 view 함수가 루트 URL 에 추가되었다.
    # /post/3/ 가 예시로 입력된다면,,, views.post_detail 함수 실행
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('post/new', views.post_new, name='post_new'),
    # post_new 에서 사용했던 edit html 을 재사용할 것이지만, views 에서 새로운 함수로 실행할 것이다.
    path('post/<int:pk>/edit/', views.post_edit, name='post_edit'),
]
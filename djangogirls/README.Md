1. 설치하기 완료

   - 기존 세션 때 들었던 내용을 한 번 더 다시 진행하여 복습하였습니다.
   - commit 시작

2. 인터넷은 어떻게 작동될까요?

3. 파이썬 설치하기

   - 이미 설치했습니다!

4. 파이썬 시작하기

   - python을 입력하여 python을 실행시켜 한 줄 한 줄 명령어를 입력할 수 있다.
   - python 에서는 숫자와 문자열을 이용하여 자료를 관리할 수 있다.
   - 이런 숫자와 문자열을 변수에 담아 선언하면 여러번 사용 가능하다.
   - 이러한 값들을 출력해주려면 print() 함수를 사용하면 된다.
   - 여러 변수들을 하나로 묶어 배열 처럼 쓸 수 있는 리스트가 존재한다.
   - 리스트와 유사하지만, 인덱스(숫자)로 사용되는 것과 달리 key 값으로 value 와의 매칭이 가능한 딕셔너리가 있다.
   - 딕셔너리와 리스트 모두 원소의 개수를 반환하는 len() 함수를 사용 가능하다.
   - 비교문은 Boolean 값인 True/False 로 속하는 구문의 실행여부를 결정할 수 있다.
   - #을 이용하면 한줄의 코드가 주석처리가 되어 프로그램의 구동시에 무시된다.
   - 반복문은 숫자 개수가 정해졌을 때 주로 쓰는 for 문과, 조건이 정해졌을 때 주로 쓰는 while 문이 존재햔다.

5. 장고 설치하기

   - 장고 설치는 1. 설치하기에서 이미 설치하였습니다.

6. 나의 첫 번째 장고 프로젝트

   - # python -m venv venv 로 venv 폴더 생성. (가상환경)
   - # source venv/Scripts/activate 로 가상환경 실행
   - # django-admin startproject 이름 . -> 장고걸스 에서는 django-admin.py 라고 하였으나, 실제로는 .py 을 제거해야했음
   - # 설정 변경 -> mysite 에서 setting.py 의 설정을 한국에 맞게 수정하였다
   - # python manage.py runserver -> 세션 때 확인하였던 페이지 재확인

7. Django 모델

   - 객체 지향 프로그래밍에 대한 개념
   - 객체를 특징을 추상화 시킨 속성과 그 객체가 취할 수 있는 행동들인 메서드가 있다.
   - 장고는 여러 DBMS 중 SQLite 를 사용한다. 이는 관계 데이터베이스 모델을 기반으로 구성되어 있다.
   - # python manage.py startapp blog -> mysite 안에 라는 App 을 하나 생성하였다.
   - 이에 setting.py 의 INSTALLED_APPS 리스트에 'blog' 을 추가하여 장고에서 blog 를 사용할 수 있게 선언한다.
   - 세션에서 사용하지는 않았지만, 소개되었던 흐름에는 존재하였던 model 을 class 를 사용해 작성하였다. 이에대한 설명은 model.py dp에 추가하였다.
   - # python manage.py makemigrations [blog] -> 데이터 베이스에 위 과정을 통해 추가된 새 Post 모델을 추가하였음을 알린다.
   - 위 명령어를 치게 된다면, 장고는 데이터베이스에 반영할 마이그레이션 파일을 만든다.
   - 이때 이 마이그레이션은 해당 app 에서만 생성이 된다. 이때 blog 를 치지 않아도 마이그레이션 파일이 생성이 되지만, 하나의 app 이름을 지정해주는 것이 좋다. 이번 연습에는 blog 를 입력하여 blog app 에만 마이그레이션이 생성되게 하였다.
   - # python manage.py migrate [blog] [migration_name] -> 을 통해 데이터베이스에 모델을 추가하였다.
   - 마이그레이션을 적용하는 명령어로 migration_name 을 지정하여 커밋과 마찬가지로 이전 모델로 돌리는 것도 가능하다.

   ### 마이그레이션을 삭제하기 위해서는 우선 """ 적용해제 """ 를 해준 뒤 해주어야 한다.

   - 이렇게 적용된 DB 의 객체는 DBMS 에서 테이블로 적용되어 sql 문을 이용해 관리할 수 있는 것으로 보인다.

8. Django 관리자

   - blog app 의 admin.py 에 from models import Post 로 Post 클래스를 import 해준다.
   - 이는 blog app 에서 사용될 admin 계정 , 즉 관리자 계정에서 Post를 하기 위해서이다.
   - # python manage.py createsuperuser 을 관리자 계정을 생성할 수 있다.

9. Django urls

   - path('',include('blog.urls')), 을 mysite/urls.py 속 urlpatterns 리스트에 추가해준다.
   - 이는 '' 즉 http://127.0.0.1:8000 즉 local host 로 들어오는 요청을 blog.urls을 기반으로 표시한다는 뜻이다.
   - mysite 의 url 은
     from django.contrib import admin
     from django.urls import path, include
     이 2개를 import 했다. 기본적으로 생성된 admin과, url 경로 설정을 돕는 path include 를 불러온 것이다.
   - blog 의 url 은
     from django.urls import path
     from . import views
     이 2개를 import 했다. 이는 위와 같은 path 와 해당 app 에서 화면에 보여줄 views를 import 한 것이다.
   - 여기까지만 진행한다면 views.post_list 가 아직 없기 때문에 runserver 가 제대로 작동하지 않는다.
   - 실습 때는, index를 사용했지만 이번에는 views.post_list 로 정확히 명시하면서 적용한 점이 다르다.

10. Django 뷰 만들기

    - blog/view.py 에 9 단계에서 blog/url.py 에 추가했던 views.post_list 메소드를 정의해주었다.
    - 하지만 return render(request, 'blog/post_list.html', {}) 을 해준다고 해도, post_list.html 이 없으므로 렌더링이 여전히 불가하다.

11. HTMl 시작하기

    - blog apps 에 templates 폴더를 생성하여, blog app 에서 나뉘어지는 여러 url 들의 렌더링을 위한 html 파일들을 생성한다.
    - html 코드를 약식으로 작성하였다.

12. Django ORM(Querysets)

    - 쿼리셋은 전달 받은 모델의 객체 목록이다. 세션에서 ORM 이란 관계 DBM 을 객체와 연결시켜주는 것이라고 하였다.
    - # Post.objects.all()을 통해 모든 객체를 가져올 수 있다.
    - # Post.objects.create(author=me, title='Sample title', text='Test')
    - 을 하기 위해 from django.contrib.auth.models import User 을 하여 User 정보들을 가져온다음,
    - me = User.objects.get(username='yanghyeon') 을 하여 다시 적용하면 실행이 된다.
    - 그런데 이때 Post.objects.create(author=yanghyeon, title='Sample title', text='Test') 은 작동하지 않았다..
      그 이유는...? -> 아마도 author이 반환해야 하는건 객체이기 때문인 것 같다. get 을 통해서 해당 객체를 가져와야지만
      비교가 가능하다고 생각된다. 추후 더 자세히 수정 예정
    - # Post.objects.filter(author=me), Post.objects.filter(title\_\_contains='title')
    - # Post.objects.filter(published_date\_\_lte=timezone.now())
    - post = Post.objects.get(title="Sample title") 을 해주어서 위의 me 와 같이 인스턴스를 하나 생성해준다.
    - post.publish() 를 통해 게시할 수 있다.
    - # Post.objects.order_by('created_date') 을 이용해 .all 에서 오름차순 순으로 정렬도가능하다. ('-created_date')는 내림차순
    - # Post.objects.filter(published_date\_\_lte=timezone.now()).order_by('published_date')
    - 위 명령어는 쿼리셋 명령어들을 연결하여 여러 명령어를 하나의 명령어로 연결시킨 것을 의미한다.

13. 템플릿 동적 데이터

    - # blog/view.html 에 posts = Post.objects.filter(published_date\_\_lte=timezone.now()).order_by('published_date') 을 추가해준다. -> return render(request, 'blog/post_list.html', {'posts': posts}) 의 마지막 중괄호에 이것이 추가되면 html 파일에서 {{post}} 부분이 대체가 되게 된다.
    - from django.utils import timezone
      from .models import Post 해주는 것을 잊어서는 안된다...

14. Django 템플릿

    - index.html 파일 안에서 {% for post in posts %} ~ {% endfor %} 와 같은 python 문법 사이에 오는 html 문장들을 올라온 posts 원소의 수만 큼 반복한다.
    - 이때 사이트에서 post 추가는 admin만 할 수 있음에 유의하여야한다.

15. CSS - 예쁘게 만들기

    - 부트스트랩을 사용하기 위해 아래의 코드를 <head> 에 넣어준다.
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
    - 이 부트스트랩이란 css를 작성함에 있어서 여러 기능을 더해주는 프레임워크이다.
    - 정적파일은 migrations 와 templates 와 마찬가지로 blog, 즉 App 폴더 안에 static 이라는 폴더를 생성하여 그 안에 위치해야한다.
    - blog/static/css/blog.css
    - # {% load static %} 를 html 맨 위에 배치하여 static 에 있는 정적 파일들을 사용할 수 있게 해준다.
    - 이때 쓰이는 static 안의 파일들은 로고와 같이 정적으로, 어떠한 객체들을 새로이 불러오지 않아도 되는 파일들을 정적파일들이라고 한다.
    - 나머지는 지난 세션들 에서 배웠던 css 작성법과 유사하다.

16. 템플릿 확장하기

- 기본적은 툴을 만들어 두고, 각 app 에서 원하는 url 별로 다른 화면을 보여줄 수 있도록 block 을 사용하여 분리시켰다.
- {% block content %}
  {% endblock %} 을 사용하여 넣고자 하는 html 위치를 표시하고, 해당 부분의 html 파일(post_list.html) 에 {% extends 'blog/base.html' %} 을 맨 위에 추가하여 base.html 에 해당 html이 포함됨을 알려준다.

from django.conf import settings
from django.db import models
from django.utils import timezone


# 새로은 객체를 정의 해주는 것이다.
# 클래스의 속성, 즉 객체의 속성은 models.ForeignKey, models.CharField, models.TextField 등과 같이 타입을 지정해준ㄷ.
# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
        default = timezone.now)
    published_date = models.DateTimeField(
        blank=True, null=True)
    
    # Post 클래스의 메서드이다.
    def publish(self):
        self.published_date = timezone.now()
        self.save()

    # 이 클래스의 __str__ 메서드를 호출하면 제목을 얻게 된다.
    def __str__(self):
        return self.title

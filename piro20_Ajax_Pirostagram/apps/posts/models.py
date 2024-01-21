from django.db import models
from apps.users.models import User

# Create your models here.
class Post(models.Model):
    photo = models.ImageField('이미지', blank=True, upload_to='posts/%Y%m%d')
    title = models.CharField(max_length=50)
    content = models.TextField
    created_date = models.DateTimeField('작성일', auto_created=True, auto_now_add=True)
    updated_date = models.DateTimeField('수정일', auto_created=True, auto_now=True)



class Like(models.Model):
    writer = models.ForeignKey(User, on_delete=models.CASCADE,  verbose_name='작성자')
    post = models.ForeignKey(Post, on_delete=models.CASCADE,  verbose_name='게시글 번호')



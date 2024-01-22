from django.db import models
from apps.users.models import User
from apps.posts.models import Post
# Create your models here.

class Comment(models.Model):
    commenter = models.ForeignKey(User, on_delete=models.CASCADE,  verbose_name='댓글 작성자')
    post = models.ForeignKey(Post, on_delete=models.CASCADE,  verbose_name='게시글')
    content = models.TextField()
    origin_comment = models.ForeignKey('self', on_delete=models.CASCADE, null=True, verbose_name='게시글')
    
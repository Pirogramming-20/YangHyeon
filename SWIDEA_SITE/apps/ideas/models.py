from django.db import models
from apps.DevTools.models import DevTool

# Create your models here.
class Idea(models.Model):
    title = models.CharField('제목',max_length = 30)
    thumbnail = models.ImageField('Image',blank=True, upload_to='ideas/%Y/%m/%d' )
    content = models.TextField()
    interst = models.IntegerField('아이디어 관심도', default = 0)
    tools = models.ForeignKey(DevTool, on_delete=models.CASCADE, verbose_name='예상 개발툴')
    mark = models.IntegerField(default=0)

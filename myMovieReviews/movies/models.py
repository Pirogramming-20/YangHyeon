from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=32)
    release_date =  models.IntegerField()
    genre = models.CharField(max_length=20, choices=[('공포', '공포'),('스릴러', '스릴러'),('코믹', '코믹'),('드라마', '드라마')])
    rate =  models.DecimalField(max_digits=3, decimal_places=2)
    running_time = models.IntegerField()
    review = models.TextField()
    director = models.CharField(max_length=32)
    actor = models.CharField(max_length = 100)
    poster = models.CharField(max_length=200)
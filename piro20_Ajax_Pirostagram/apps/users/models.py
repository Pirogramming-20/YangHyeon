from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    profile = models.ImageField('프사', blank=True, upload_to='users/%Y%m%d')
    password = models.CharField(max_length=15)
    nickname = models.CharField(max_length=16, blank =False)
    
    def __str__(self):
        return self.nickname
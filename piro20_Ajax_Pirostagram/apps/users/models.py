from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    user_id = models.CharField(max_length=30, blank=True)
    password = models.CharField(max_length=15)
    nickname = models.CharField(max_length=16, blank =False)
    
    def __str__(self):
        return self.nickname
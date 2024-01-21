from django.contrib import admin
from apps.posts import models
# Register your models here.
admin.site.register(models.Post)
admin.site.register(models.Like)
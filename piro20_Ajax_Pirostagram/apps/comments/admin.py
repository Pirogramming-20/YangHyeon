from django.contrib import admin
from apps.comments import models
# Register your models here.

admin.site.register(models.Comment)

from django.db import models

# Create your models here.
class DevTool(models.Model):
    name = models.CharField("이름 ", max_length = 30)
    kind = models.CharField("종류 ", max_length = 40)
    content = models.TextField()

    def __str__(self):
        return self.name
# Generated by Django 5.0.1 on 2024-01-11 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_movie_poster'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]

# Generated by Django 4.0.4 on 2022-06-08 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='worker',
            name='photo',
            field=models.ImageField(default='', upload_to='uploads/', verbose_name='photo'),
        ),
    ]

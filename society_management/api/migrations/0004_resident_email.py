# Generated by Django 4.0.4 on 2022-06-10 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_worker_age_worker_role_alter_worker_photo'),
    ]

    operations = [
        migrations.AddField(
            model_name='resident',
            name='email',
            field=models.EmailField(default='', max_length=254),
        ),
    ]

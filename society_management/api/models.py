from django.db import models


class Resident(models.Model):
    name = models.CharField(max_length=100)
    flat_no = models.IntegerField()
    pending_maintainance = models.IntegerField()
    email = models.EmailField(default='')


class Worker(models.Model):
    name = models.CharField(max_length=100)
    phone_no = models.IntegerField()
    salary = models.IntegerField()
    Role = models.CharField(max_length=100, default='worker_role')
    Age = models.IntegerField(default=00)
    photo = models.ImageField(("photo"), upload_to='images/',
                              height_field=None, width_field=None, max_length=None, default='')


class Expense(models.Model):
    reason = models.CharField(max_length=100)
    expenditure = models.IntegerField()

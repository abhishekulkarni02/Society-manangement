from django.contrib import admin
from .models import Resident, Worker, Expense
# Register your models here.


@admin.register(Resident)
class ResidentAdmin(admin.ModelAdmin):
    list_display = ['id', 'flat_no', 'name', 'email', 'pending_maintainance']


@admin.register(Worker)
class ResidentAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'Role', 'Age', 'phone_no', 'salary']


@admin.register(Expense)
class ExpenseAdmin(admin.ModelAdmin):
    list_display = ['id', 'reason', 'expenditure']

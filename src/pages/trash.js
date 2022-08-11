<Photocontainer photos ={() => this.state.photos}/>

from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .custompermissions import MyPermission
from django.contrib.auth.models import User
from rest_framework.parsers import JSONParser, FormParser, MultiPartParser


from rest_framework import serializers
from .models import Resident, Worker, Expense
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token


class ResidentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resident
        fields = ['name', 'flat_no', 'pending_maintainance']


class WorkersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = ['name', 'Role', 'Age', 'phone_no', 'salary', 'photo']


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['reason', 'expenditure']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user

        history.push(`/products/${id}`));

    
            
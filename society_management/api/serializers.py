from rest_framework import serializers
from .models import Resident, Worker, Expense
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token
import yagmail


class ResidentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resident
        fields = ['id','name', 'flat_no', 'pending_maintainance', 'email', ]


class ResidentSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    flat_no = serializers.IntegerField()
    email = serializers.EmailField()
    pending_maintainance = serializers.IntegerField()


class WorkersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = ['id','name', 'Role', 'Age', 'phone_no', 'salary','photo']


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id','reason', 'expenditure']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        yag = yagmail.SMTP("societymanager06@gmail.com",
                           "ccdailuyuspzvxyt")
        yag.send(user.email,
                 "Regarding account creation in MySociety",
                 "Thank You for creating account in MySociety . Hoping that you will like our service.")
        return user

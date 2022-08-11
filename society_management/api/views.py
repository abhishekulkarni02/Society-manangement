from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from .custompermissions import MyPermission
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework.decorators import action
from rest_framework.parsers import JSONParser, FormParser, MultiPartParser
import yagmail
# Create your views here.


class ResidentModelViewSet(viewsets.ModelViewSet):
    queryset = Resident.objects.all()
    serializer_class = ResidentsSerializer
    #permission_classes = [MyPermission]
    authentication_classes = (TokenAuthentication,)

    @action(detail=False)
    def sendmsg(request, err):
        if(request):
            #resi = Resident.objects.all().values_list()
            #serializer = ResidentSerializer(resi, many=True)
            # print(serializer)
            for p in Resident.objects.all():
                if(p.pending_maintainance > 0 and p.email != ''):
                    yag = yagmail.SMTP("societymanager06@gmail.com",
                                       "ccdailuyuspzvxyt")
                    bodyofmail = "This mail is to remind you is that your maintainance is pending .The pending maintainance is " + \
                        str(p.pending_maintainance) + \
                        ". Please pay it as early as possible .\n\tIn case of descripancy contact Society manager.\nThank you..."
                    yag.send(p.email,
                             "Regarding pending maitainance of society", bodyofmail)
            d = 'task completed'
            return HttpResponse(status=200)


class WorkerModelViewSet(viewsets.ModelViewSet):
    queryset = Worker.objects.all()
    serializer_class = WorkersSerializer
   # permission_classes = [MyPermission | IsAdminUser]
    authentication_classes = (TokenAuthentication,)
    parser_classes = (FormParser, JSONParser, MultiPartParser)


class ExpenseModelViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    #permission_classes = [MyPermission]
    authentication_classes = (TokenAuthentication,)


class UserModelViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

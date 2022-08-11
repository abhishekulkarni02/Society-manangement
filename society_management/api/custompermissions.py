from rest_framework.permissions import BasePermission
from rest_framework.permissions import IsAuthenticated, IsAdminUser


class MyPermission(BasePermission):
    def has_permission(self, request, view):
        if request.method == 'GET':
            if IsAuthenticated:
                return True
        '''if request.method == 'PATCH' & IsAdminUser:
            return True
        if request.method == 'POST' & (IsAdminUser):
            return True
        elif request.method == 'PUT' & (IsAuthenticated & IsAdminUser):
            return True
        elif request.method == 'DELETE' & IsAuthenticated & IsAdminUser:
            return True
        '''
        return False

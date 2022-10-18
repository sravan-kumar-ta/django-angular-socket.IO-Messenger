from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from chat.views import UserCreateView, UserListView

urlpatterns = [
    path('register/', UserCreateView.as_view()),
    path('users/', UserListView.as_view()),
    path('token/', obtain_auth_token),
]

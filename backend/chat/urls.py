from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter

from chat.views import UserCreateView, UserListView, ChatViewSet, GetUser

router = DefaultRouter()
router.register('chat', ChatViewSet, basename='chats')

urlpatterns = [
    path('register/', UserCreateView.as_view()),
    path('users/', UserListView.as_view()),
    path('token/', obtain_auth_token),
    path('get_user/', GetUser.as_view())
] + router.urls

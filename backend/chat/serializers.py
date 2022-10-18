from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

from chat.models import Chat


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class ChatSerializer(ModelSerializer):
    class Meta:
        model = Chat
        fields = '__all__'
        extra_kwargs = {
            'sent_date': {'read_only': True}
        }

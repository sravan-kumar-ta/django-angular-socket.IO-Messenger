from django.contrib.auth.models import User
from django.db import models


class Chat(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='receiver')
    sent_date = models.DateTimeField(auto_now_add=True)
    message = models.TextField()

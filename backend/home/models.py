from django.conf import settings
from django.db import models
class ShoppingCart(models.Model):
    'Generated Model'
    test = models.BigIntegerField()
    user = models.OneToOneField("users.User",on_delete=models.CASCADE,null=True,blank=True,related_name="shoppingcart_user",)

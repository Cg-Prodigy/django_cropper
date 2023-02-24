from django.db import models

# Create your models here.
class ImageModel(models.Model):
    profile_pic=models.ImageField(upload_to="Pictures")
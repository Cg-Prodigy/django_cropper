from django.urls import path
from .views import homepage,success
urlpatterns = [
    path("",homepage,name="homepage"),
    path("sucess/",success,name="success")
]

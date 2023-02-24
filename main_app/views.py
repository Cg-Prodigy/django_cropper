from django.shortcuts import render,redirect
from .forms import ImageForm
# Create your views here.
def homepage(request):
    if request.method=="POST":
        form=ImageForm(request.POST,request.FILES)
        if form.is_valid():
            form.save()
            return redirect("success")
    else:
        form=ImageForm()
    return render(request,"main_app/index.html",{"form":form})
def success(request):
    return render(request,"main_app/success.html")
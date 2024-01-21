from django.shortcuts import render,redirect
from .models import User
from apps.posts.models import Post, Like
from apps.users.forms import SignupForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import auth


# Create your views here.

def login(request):
    if request.method == "GET":
        form = AuthenticationForm()
        ctx = {
            'form': form,
        }
        return render(request,'users/login.html', ctx)
    elif request.method == "POST":
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            auth.login(request, user)

            return redirect('posts:main')
        else:
            context = {
                'form': form,
            }
            return render(request,'users/login.html', context=context)
        
def register(request):
    if request.method == 'GET':
        form = SignupForm()
        context={
            'form': form,
        }
        return render(request, template_name='users/register.html', context=context)

    if request.method == 'POST':
        form = SignupForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save()
            print(user)
            print("login success")
            return redirect('users:login')
        else:
            ctx={
                'form':form,
            }
            return render(request, 'users/register.html',context=ctx) # 이부분 수정
    
def logout(request):
    auth.logout(request)
    return redirect('users:login')







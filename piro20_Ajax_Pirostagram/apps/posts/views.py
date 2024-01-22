from django.shortcuts import render,redirect,get_object_or_404
from .models import Post, Like
from apps.comments.models import Comment
from apps.users.models import User
from .forms import *
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.


def main(request):
    if request.method == "GET":
        posts = Post.objects.all()
        users = User.objects.all()
        now_user = request.user
        for post in posts:
            print("post = ", post)
        ctx = {
            "posts" : posts,
            "users" : users,
            "now_user" : now_user,
        }
        return render(request,'posts/list.html', ctx)

def create(request):
    if request.method == "GET":
        ctx = {'form' : PostForm}
        return render(request,'posts/post_create.html', ctx)
    if request.method == "POST":
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
        else:
            print("형식이 올바르지 않음")
        return redirect('/main/')

def update(request, pk):
    if request.method == "GET":
        return render(request,'posts/post_update.html')
    if request.method == "POST":
        return redirect('')

def delete(request, pk):
    if request.method == "POST":
        Post.objects.get(id = pk).delete()
        return redirect('')


@csrf_exempt
def pushLike(request):
    req = json.loads(request.body)
    post_id = req["post_id"]
    post = get_object_or_404(Post, pk=post_id)
    now_user = request.user

    try:
        likePointer = Like.objects.get(post=post, writer=now_user)
        likePointer.delete()
        post.likeNum -= 1  

        likeTag = 'nonlike'
        post.save()
        return JsonResponse({'post_id' : post_id, 'likeNum' : post.likeNum, 'likeTag' : likeTag})
    except Like.DoesNotExist:
        Like.objects.create(post=post, writer=now_user)
        post.likeNum += 1

        likeTag = 'liked'
        post.save()
        return JsonResponse({'post_id' : post_id, 'likeNum' : post.likeNum, 'likeTag' : likeTag})

    


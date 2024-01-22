from django.shortcuts import render,get_object_or_404
from .models import Comment
from apps.posts.models import Post
from apps.users.models import User
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

def detail(request, pk):
    post = Post.objects.get(id = pk)
    now_user = request.user
    try:
        comments = Comment.objects.filter(post = post)
    except Comment.DoesNotExist:
        ctx = {
        'post' : post,
        'now_user' : now_user,
    }
    else: 
        ctx = {
            'post' : post,
            'comments' : comments,
            'now_user' : now_user,
            
        }
    return render(request,'comments/post_detail.html', ctx)


@csrf_exempt
def comment(request, pk):
    req = json.loads(request.body)
    post_id = req["post_id"]
    content = req["content"]
    writer = request.user
    post = get_object_or_404(Post, id=post_id)

    newcomment = Comment.objects.create(post = post, commenter = writer, content = content )    
    
    return JsonResponse({'profile_url' : newcomment.commenter.profile.url, 'commenter' : newcomment.commenter.username, 'content' : newcomment.content, 'commentId' : newcomment.id})

@csrf_exempt
def delete_comment(request,Cid):
    req = json.loads(request.body)
    comment_id = req["comment_id"]
    try:
        comments = Comment.objects.get(id = comment_id)
    except Comment.DoesNotExist:
        pass
    else:
        comments.delete()

    return JsonResponse({'comment_id' : comment_id})



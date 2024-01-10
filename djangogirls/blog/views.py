from django.shortcuts import render
from django.utils import timezone
from .models import Post
from django.shortcuts import render, get_object_or_404
from .forms import PostForm
# 새로운 글 작성이 끝난 후 제대로 올라왔는지 확인하기 위해 상세 페이지로 url 을 재설정해주기 위함
from django.shortcuts import redirect

# Create your views here.
def post_list(request):
    # view 에 모델을 가져오는 작업. 오름 차순으로 Post 에서 가져온다.
    posts  = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    print(posts)
    # 윗 줄 즉 모델에서 가져온 posts 파일을 가져와 post_list.html 에서 render 을 이용해 화면에 띄워준다.
    return render(request, 'blog/post_list.html',{'posts' : posts})

def post_new(request):
    # 글을 입력하게 된다면, request 가 해당 html 에서 받아온 정보들을 가지고 있다.
    if request.method == "POST": # post 명령이 들어왔을 경우
        form = PostForm(request.POST)
            # form 안의 내용이 유효하다면!
        if form.is_valid():
            # Form 을 저장해주는 작업 commit=False 를 쓰는 이유는 추가 정보를 입력해야하기 때문이다.
            post = form.save(commit=False)
            # PostForm 에서 작성해주지 않았던 author 와 published_data 를 여기에서 작성.
            post.author = request.user
            post.published_date = timezone.now()
            # 모두 작성하였으니 저장해준다.
            post.save()
        return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()  # post 명령어가 아닐 경우 
    return render(request, 'blog/post_edit.html', {'form': form})

def post_edit(request, pk): # 차이점
    post = get_object_or_404(Post, pk=pk) #차이점 해당 인스턴스를 pk  기본키로 특정하여 가져온다.
    if request.method == "POST":
        form = PostForm(request.POST) 
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'blog/post_edit.html', {'form': form})

def post_detail(request, pk):
    Post.objects.get(pk=pk)
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})


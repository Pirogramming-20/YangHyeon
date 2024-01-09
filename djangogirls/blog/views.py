from django.shortcuts import render
from django.utils import timezone
from .models import Post

# Create your views here.
def post_list(request):
    # view 에 모델을 가져오는 작업. 오름 차순으로 Post 에서 가져온다.
    posts  = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    # 윗 줄 즉 모델에서 가져온 posts 파일을 가져와 post_list.html 에서 render 을 이용해 화면에 띄워준다.
    return render(request, 'blog/post_list.html',{'posts' : posts})


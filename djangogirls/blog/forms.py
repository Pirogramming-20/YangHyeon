# 장고 에서 forms 을 가져오고, models 에서 Post 객체를 가져온다. 각 Post 에 form 을 적용시켜 꾸며주기 위해서이다.
from django import forms
from .models import Post

# Post 에 적용시켜줄 form 의 이름! PostForm
class PostForm(forms.ModelForm):
    # 아래에서 어떤 모델의 어떤 부분이 사용되어지는 지 명시해준다.
    class Meta:
        model = Post
        fields = ('title', 'text',)
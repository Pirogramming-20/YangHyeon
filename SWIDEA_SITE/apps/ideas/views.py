from django.shortcuts import render,redirect
from .models import *
from .forms import IdeaForm
import json

# Create your views here.
def list(request):

    try:
        sort_standard = request.GET['sort']
    except:
        sort_standard = None

    if sort_standard == 'recently':
        ideas = Idea.objects.all().order_by('-pk')
    elif sort_standard == 'name':
        ideas = Idea.objects.all().order_by('title')
    elif sort_standard == 'interst':
        ideas = Idea.objects.all().order_by('-interst')
    elif sort_standard == 'mark':
        ideas = Idea.objects.all().order_by('-mark')
    else :
        ideas = Idea.objects.all()

    if request.method == "POST":
        try:
            mark_info = request.POST['marker']
        except:
            mark_info = None
        else:
            target = Idea.objects.get(id = mark_info)
            if target.mark:
                target.mark = 0
            else : 
                target.mark = 1
            target.save()

    if request.method == "PUT":
        try:
            data = json.loads(request.body.decode('utf-8'))
            pk = int(data.get('pk'))
            dir = str(data.get('dir'))
        except:
            print("error!")
        else:
            idea = Idea.objects.get(id = pk)
            if dir == 'up':
                idea.interst += 1
            elif dir == 'down':
                idea.interst -= 1
            idea.save()
            

    context={
        'ideas' : ideas,
    }
    return render(request, 'ideas/ideas_list.html', context)



def create(request):
    if request.method == "POST":
        form = IdeaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
        return redirect("/ideas")
    
    if request.method == "GET":
        context = {
            'form'  : IdeaForm
        }
        return render(request, 'ideas/ideas_create.html', context)
    

def update(request,pk):
    idea = Idea.objects.get(id = pk)
    
    if request.method == "POST":
        form = IdeaForm(request.POST, request.FILES, instance=idea)
        if form.is_valid():
            form.save()
        return redirect("ideas:detail", pk)
    
    if request.method == "GET" : 

        form  = IdeaForm(instance = idea)
        context = {"form" : form,
                   "idea" : idea,}
        return render(request, "ideas/ideas_update.html",context)

def detail(request, pk):

    if request.method == "POST":
        try:
            mark_info = request.POST['marker']
        except:
            mark_info = None
        else:
            target = Idea.objects.get(id = mark_info)
            print("이전 마크 값 :  ",target.mark)
            if target.mark:
                target.mark = 0
            else : 
                target.mark = 1
            target.save()
            print("새 마크 값 :  ",target.mark)

    idea = Idea.objects.get(id = pk)
    devtool_pk = idea.tools.pk
    context = {
        "idea" : idea,
        "devtool_pk" : devtool_pk,
    }
    return render(request,"ideas/ideas_detail.html", context )

    
def delete(request, pk):
    if request.method == "POST":
        Idea.objects.get(id=pk).delete()
        return redirect("/ideas")
    
    
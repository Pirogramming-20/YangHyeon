from django.shortcuts import render,redirect
from .models import *
from .forms import IdeaForm

# Create your views here.
def list(request):
    ideas = Idea.objects.all()
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
    if request.method == "GET":
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
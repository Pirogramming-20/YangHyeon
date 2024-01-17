from django.shortcuts import render,redirect
from .models import *
from .forms import ToolForm

# Create your views here.
def list(request):
    devtools = DevTool.objects.all()
    context={
        'devtools' : devtools,
    }
    return render(request, 'DevTools/devtools_list.html', context)


def create(request):
    if request.method == "POST":
        form = ToolForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
        return redirect("/DevTools")
    
    if request.method == "GET":
        context = {
            'form'  : ToolForm
        }
        return render(request, 'DevTools/devtools_create.html', context)
    

def update(request,pk):
    devtool = DevTool.objects.get(id = pk)
    
    if request.method == "POST":
        form = ToolForm(request.POST, request.FILES, instance=devtool)
        if form.is_valid():
            form.save()
        return redirect("devtools:detail", pk)
    
    if request.method == "GET" : 

        form  = ToolForm(instance = devtool)
        context = {"form" : form,
                   "devtool" : devtool,}
        return render(request, "DevTools/devtools_update.html",context)
    

def detail(request, pk):
    if request.method == "GET":
        devtool = DevTool.objects.get(id = pk)
        ideas = devtool.idea_set.all()  
        context = { 
            "devtool" : devtool,
            "ideas" : ideas,
        }
        return render(request,"DevTools/devtools_detail.html", context )


def delete(request, pk):
    if request.method == "POST":
        DevTool.objects.get(id=pk).delete()
        return redirect("/DevTools")
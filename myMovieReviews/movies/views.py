from django.shortcuts import render, redirect
from .models import *
# Create your views here.
def movie_list(request):
    movies = Movie.objects.all()
    context = {
        "movies" : movies
    }
    return render(request, "movies/movie_list.html", context)

def movie_detail(request, pk):
    movie = Movie.objects.get(id = pk)
    context={
        "movie" : movie
    }
    return render(request, "movies/movie_detail.html",context)

def movie_create(request):
    if request.method == "POST":
        Movie.objects.create(
            title = request.POST["title"],
            release_date = request.POST["r_date"],
            genre = request.POST["genre"],
            rate = request.POST["rate"],
            running_time = request.POST["running_time"],
            review = request.POST["review"],
            director = request.POST["director"],
            actor = request.POST["actor"],
            poster = request.POST["poster"],
        )
        return redirect("movies/")
    return render(request, "movies/movie_add.html")

def movie_update(request, pk):
    movie = Movie.objects.get(id=pk)
    context={
        "movie" : movie
    }
    if request.method == "POST":
        movie.title = request.POST["title"]
        movie.release_date = request.POST["r_date"]
        movie.genre = request.POST["genre"]
        movie.rate = request.POST["rate"]
        movie.running_time = request.POST["running_time"]
        movie.review = request.POST["review"]
        movie.director = request.POST["director"]
        movie.actor = request.POST["actor"]
        movie.poster = request.POST["poster"]
        movie.save()
        return redirect(f"movies/{pk}")
    return render(request, "movies/movie_update.html",context)

def movie_delete(request, pk):
    if request.method == "POST":
        movie = Movie.objects.get(id=pk)
        movie.delete()
    return redirect("/movies")



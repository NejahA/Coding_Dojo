from django.shortcuts import render

# Create your views here.

from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse

def root(request):
    return redirect("/blogs")

def index(request):
    return HttpResponse('placeholder to later display a list of all blogs')

def new(request):
    return HttpResponse('placeholder to display a new form to create a new blog')

def create(request):
    return redirect ("/")

def show(request,number):
    return HttpResponse(f'placeholder to edit blog {number}')

def destroy(request,number):
    return redirect ("/")

def json(request):
    return JsonResponse({'title':"My first blog", "content":"lorem" })

def edit(request,number):
    return  HttpResponse(f"placeholder to edit blog {number}")
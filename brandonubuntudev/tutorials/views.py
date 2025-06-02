from django.shortcuts import render, get_object_or_404
from .models import Tutorial, Category

def landing(request):
    return render(request, 'landing.html')

def home(request):
    featured_tutorials = Tutorial.objects.filter(featured=True)[:6]
    recent_tutorials = Tutorial.objects.order_by('-created_at')[:6]
    categories = Category.objects.all()
    
    context = {
        'featured_tutorials': featured_tutorials,
        'recent_tutorials': recent_tutorials,
        'categories': categories,
    }
    return render(request, 'home.html', context)

def quickstart(request):
    quickstart_tutorials = Tutorial.objects.filter(
        category__name='Quick Start'
    ).order_by('created_at')
    
    context = {
        'tutorials': quickstart_tutorials,
    }
    return render(request, 'quickstart.html', context)

def tutorials(request):
    category_filter = request.GET.get('category')
    difficulty_filter = request.GET.get('difficulty')
    
    tutorials = Tutorial.objects.all()
    
    if category_filter:
        tutorials = tutorials.filter(category__name=category_filter)
    
    if difficulty_filter:
        tutorials = tutorials.filter(difficulty=difficulty_filter)
    
    tutorials = tutorials.order_by('-created_at')
    categories = Category.objects.all()
    
    context = {
        'tutorials': tutorials,
        'categories': categories,
        'selected_category': category_filter,
        'selected_difficulty': difficulty_filter,
    }
    return render(request, 'tutorials.html', context)

def tutorial_detail(request, slug):
    tutorial = get_object_or_404(Tutorial, slug=slug)
    related_tutorials = Tutorial.objects.filter(
        category=tutorial.category
    ).exclude(id=tutorial.id)[:3]
    
    context = {
        'tutorial': tutorial,
        'related_tutorials': related_tutorials,
    }
    return render(request, 'tutorial_detail.html', context)

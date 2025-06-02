from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing, name='landing'),
    path('home/', views.home, name='home'),
    path('quickstart/', views.quickstart, name='quickstart'),
    path('tutorials/', views.tutorials, name='tutorials'),
    path('tutorial/<slug:slug>/', views.tutorial_detail, name='tutorial_detail'),
]

from django.urls import path

from . import views
app_name = "floorplan"
urlpatterns = [
    path("", views.index, name="index"),
]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import auth, events, photos

router = DefaultRouter()
router.register(r'photos', photos.PhotoViewSet)
router.register(r'events', events.EventViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/login/', auth.login_view, name='login'),
    path('auth/register/', auth.register_view, name='register'),
] 
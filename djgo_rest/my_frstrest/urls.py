from rest_framework.routers import DefaultRouter
from .views import StudentViewSet, MyTokenObtainPairView
from django.urls import path, include

router = DefaultRouter()
router.register(r'api/students', StudentViewSet)


# urlpatterns = router.urls
urlpatterns = [
    path('', include(router.urls)),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]

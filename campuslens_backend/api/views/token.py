from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

class LoginView(TokenObtainPairView):
    pass  # Uses built-in JWT login

class RefreshTokenView(TokenRefreshView):
    pass  # Uses built-in JWT refresh

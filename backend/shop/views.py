from rest_framework import generics
from rest_framework.response import Response
from .models import Product, Order
from .serializers import ProductSerializer, OrderSerializer

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        data = self.get_serializer(qs, many=True).data
        return Response({"items": data, "count": qs.count()})


class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "id"


class OrderCreate(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

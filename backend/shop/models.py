from django.db import models

class Product(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    img = models.URLField()

    def __str__(self):
        return self.name


class Order(models.Model):
    customer_name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id} by {self.customer_name}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name="items", on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    qty = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.qty} × {self.product.name}"

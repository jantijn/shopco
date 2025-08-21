from django.contrib import admin
from unfold.admin import ModelAdmin       # ← use Unfold's admin
from unfold.admin import TabularInline  # instead of django.contrib.admin

from .models import Product, Order, OrderItem

from django.contrib.auth.models import User, Group

# Unregister built-in auth models
admin.site.unregister(User)
admin.site.unregister(Group)

@admin.register(Product)
class ProductAdmin(ModelAdmin):
    list_display = ("id", "name", "price")
    search_fields = ("name", "description")
    ordering = ("name",)

class OrderItemInline(TabularInline):
    model = OrderItem
    extra = 0

@admin.register(Order)
class OrderAdmin(ModelAdmin):
    list_display = ("id", "created_at", "total_price")
    inlines = [OrderItemInline]
    readonly_fields = ("created_at", "total_price")

    def total_price(self, obj):
        return sum(item.product.price * item.qty for item in obj.items.all())
    total_price.short_description = "Total (€)"

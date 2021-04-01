from rest_framework import serializers

from restaurant.serializers.nested import RestaurantInUserSerializer
from review.models import Review
from user.serializers.nested import UserInReviewSerializer


class ReviewInRestaurantSerializer(serializers.ModelSerializer):
    author = UserInReviewSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'content', 'author', 'rating']

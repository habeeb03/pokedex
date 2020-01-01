from django.db import models
from autoslug import AutoSlugField


class Pokemon(models.Model):
    name = models.CharField(max_length=50)
    weight = models.DecimalField(decimal_places=2, max_digits=1000)
    thumbnail_text = models.CharField(max_length=100)
    number = models.IntegerField()
    height = models.DecimalField(decimal_places=2, max_digits=1000)
    collectibles_slug = models.CharField(max_length=100)
    thumbnail_image = models.URLField()
    slug = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Weekness(models.Model):
    name = models.CharField(max_length=100)
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)


class Abilities(models.Model):
    name = models.CharField(max_length=100)
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = AutoSlugField(populate_from='name')


class PokeToCat(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)


class Type(models.Model):
    name = models.CharField(max_length=100)
    pokemon = models.ForeignKey(Pokemon, on_delete=models.CASCADE)

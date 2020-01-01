from django.shortcuts import render, reverse, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import Pokemon, Abilities, Weekness, Category, PokeToCat
from .serializer import PokemonSerializer
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny

from helpers import updatePokemon

import json


class PokemonList(ListAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    permission_classes = (AllowAny,)

    if(len(queryset) < 1):
        updatePokemon()


def add_to_category(request):
    if request.POST:
        _id = request.POST['cat_id']
        category = Category.objects.get(pk=_id)
        for v in request.POST.getlist('poke'):
            poke = Pokemon.objects.get(name=v)
            PokeToCat(category=category, pokemon=poke).save()
        return HttpResponse(request.POST)

    poke = Pokemon.objects.all()
    return render(request, 'pokemon/form.html', {
        'poke': poke
    })


def get_by_category(request, slug):
    category = Category.objects.get(slug=slug)

    pokes = PokeToCat.objects.filter(category=category)
    pokes = serializers.serialize('json', pokes)

    return HttpResponse(pokes)

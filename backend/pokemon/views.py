from django.shortcuts import render, reverse, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import Pokemon, Abilities, Weekness, Category, PokeToCat
from .serializer import PokemonSerializer, CategorySerializer
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.http import JsonResponse
from django.core import serializers
from rest_framework.decorators import api_view, renderer_classes

from helpers import updatePokemon, poke_serializer

import json


class PokemonList(ListAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    permission_classes = (AllowAny,)

    if(len(queryset) < 1):
        updatePokemon()


def add_to_category(request):
    print('adding to category..!')
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


@api_view(('GET',))
def get_by_category(request, slug):
    category = Category.objects.get(slug=slug)
    pokes = []
    # try:
    query_set = PokeToCat.objects.filter(category=category)
    for poke in query_set:
        pokes.append(poke_serializer(poke.pokemon))

    return Response(pokes)


class CategoriesList(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny, )


def serializeQSet(p_list):
    response = []
    for item in p_list:
        response.append(item.name)

    return response

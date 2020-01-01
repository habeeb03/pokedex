import json

from urllib.request import urlopen
from pokemon.models import Pokemon, Abilities, Weekness, Type


def updatePokemon():
    print('updating pokemon list..!')
    with urlopen('https://5n6ugc33m6.execute-api.us-east-1.amazonaws.com/api/pokedex') as url:
        data = json.loads(url.read().decode())

    for poke in data:
        name = poke['name']
        weight = poke['weight']
        thumb_text = poke['ThumbnailAltText']
        number = poke['number']
        height = poke['height']
        collectibles_slug = poke['collectibles_slug']
        thumbnail_image = poke['ThumbnailImage']
        slug = poke['slug']

        try:
            Pokemon.objects.get(name=name)
        except:
            poke_obj = Pokemon.objects.create(
                name=name,
                weight=weight,
                thumbnail_text=thumb_text,
                number=number,
                height=height,
                collectibles_slug=collectibles_slug,
                thumbnail_image=thumbnail_image,
                slug=slug
            )

            poke_obj.save()

            for ability in poke['abilities']:
                Abilities(name=ability, pokemon=poke_obj).save()

            for weakness in poke['weakness']:
                Weekness(name=weakness, pokemon=poke_obj).save()

            for ptype in poke['type']:
                print(ptype)
                Type(name=ptype, pokemon=poke_obj).save()

    print('Pokemon list updated successfully..!')

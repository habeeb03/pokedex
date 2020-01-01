from rest_framework import serializers
from .models import Pokemon, Abilities, Weekness, Type


class AbilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Abilities
        fields = ['name', 'id']


class WeaknessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weekness
        fields = ['name', 'id']


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ['name', 'id']


class PokemonSerializer(serializers.ModelSerializer):
    abilities = serializers.SerializerMethodField()
    weakness = serializers.SerializerMethodField()
    types = serializers.SerializerMethodField()

    class Meta:
        model = Pokemon
        fields = '__all__'

    def get_abilities(self, obj):
        qs = obj.abilities_set.all()
        return AbilitySerializer(qs, many=True, read_only=True).data

    def get_weakness(self, obj):
        qs = obj.weekness_set.all()
        return WeaknessSerializer(qs, many=True, read_only=True).data

    def get_types(self, obj):
        qs = obj.type_set.all()
        return TypeSerializer(qs, many=True, read_only=True).data

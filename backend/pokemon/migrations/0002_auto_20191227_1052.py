# Generated by Django 2.2.9 on 2019-12-27 10:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pokemon', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.RenameField(
            model_name='abilities',
            old_name='Pokemon',
            new_name='pokemon',
        ),
        migrations.CreateModel(
            name='PokeToCat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pokemon.Category')),
                ('pokemon', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pokemon.Pokemon')),
            ],
        ),
    ]

from django.db import models

# Create your models here.
class University(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField(max_length=300)
    city=models.CharField(max_length=50)
    address=models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"

class Intership(models.Model):
    title=models.CharField(max_length=50)
    description=models.TextField(max_length=300)
    stipend=models.FloatField()
    university=models.ForeignKey(University,on_delete=models.CASCADE,related_name='University')

    def __str__(self):
        return f"{self.title}"
from django.db import models

# Create your models here.
class Company(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField(max_length=300)
    city = models.CharField(max_length=50)
    address=models.TextField(max_length=100)

    def __str__(self):
        return f"{self.name}"

class Vacancy(models.Model):
    name=models.CharField(max_length=50)
    description=models.TextField(max_length=300)
    salary= models.FloatField()
    company=models.ForeignKey(Company,on_delete=models.CASCADE, related_name="company",default=1)

    def __str__(self):
        return f"{self.name}"

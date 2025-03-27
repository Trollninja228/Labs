from django.db import models

# Create your models here.

class Student(models.Model):
    name=models.CharField(max_length=100)
    score=models.JSONField(default=list)

    def get_averrage_score(self):
        arr=self.score
        sum=0
        for i in arr:
            sum+=i
        return sum/len(arr)
        
    
    def get_top_score(self):
        # return "any"
        return max(self.score)

    def __str__(self):
        return f"{self.name},{self.get_averrage_score()},{self.get_top_score()}"




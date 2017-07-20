from django.db import models
import time, uuid


def next_id():
    return '%015d%s000' % (int(time.time()*1000), uuid.uuid4().hex)


# Create your models here.
class Blog(models.Model):
    id = models.CharField(max_length=50, primary_key=True, default=next_id)
    name = models.CharField(max_length=50)
    summary = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.FloatField(default=time.time)
    
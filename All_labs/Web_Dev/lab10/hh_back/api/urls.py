from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('getCompanies/', getCompanies.as_view()),
    path('getVacancies/', getVacancies.as_view()),
    path('getTop10Vacancies/', getTop10Vacancies.as_view()),
    path('getCompanies/<int:id>/', getCompaniesRUD.as_view()),
    path('getVacancies/<int:id>/', getVacancyRUD.as_view()),
    path('Companies/<int:id>/Vacancies/', VacanciesByCompany.as_view()),
    path('getVacanciesv2',FBVgetVacancies),
]

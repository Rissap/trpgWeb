from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class Main(TemplateView):
	template_name = "main.html"

	def get(self, request):
		args = {}
		return render(request, self.template_name, args)

	def post(self, request):
		return render(request, self.template_name, args)
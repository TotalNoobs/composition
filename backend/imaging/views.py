from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.http import JsonResponse

from django.template import loader

from django.views.decorators.csrf import csrf_exempt

import common.aiapi as aiapi

import tempfile
import os

def index(request):
    template = loader.get_template("imaging/index.html")

    return HttpResponse(template.render({}, request))
    # return render(request, "imaging/index.html")

@csrf_exempt
def upload(request):
    print("UPLOAD")
    print(request)
    respHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "86400",
    }
    return JsonResponse({ 'status': 'ok' }, headers=respHeaders)
    if request.method == "POST":
        for f in request.FILES:
            print(request.FILES[f])
        if 'photo' in request.FILES:
            f = request.FILES['photo']
            print('AAA')
            # Save file to temporary location
            with tempfile.NamedTemporaryFile(delete_on_close=False) as fp:
                fp.write(f.read())
                fp.close()
                res = aiapi.process_image(fp.name)
                print('GPT Response:\n', res)
                os.remove(fp.name)
        else:
            print('No photo')

        # print(request.body)
        # print(request.FILES)


    return JsonResponse({ 'status': 'ok' }, headers=respHeaders)

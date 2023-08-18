import os
import urllib.request
from dotenv import load_dotenv
import json
def transl(txt, lan_type):
    load_dotenv()
    client_id = os.environ.get('ClientID')
    client_secret = os.environ.get('ClientSecret')
    
    encText = urllib.parse.quote(txt)
    data = "source={}&target=ko&text=".format(lan_type) + encText
    url = "https://openapi.naver.com/v1/papago/n2mt"

    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)

    response = urllib.request.urlopen(request, data=data.encode("utf-8"))
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read()
        res_txt = response_body.decode('utf-8')
        res_txt = json.loads(res_txt)
        res_txt = res_txt["message"]["result"]["translatedText"]
        return res_txt
    else:
        print("Error Code:" + rescode)
        return "Error Code : {}".format(rescode)

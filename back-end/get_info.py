import requests
from bs4 import BeautifulSoup as bs


def get_food():
    r = requests.get('https://raw.githubusercontent.com/asw-dod/Deu_food_api/master/output/api.json')

    if r.status_code == 200:
        return r.json()
    else:
        return r.status_code

def school_info():
    html_text = requests.get('https://www.deu.ac.kr/www/content/57')

    html = bs(html_text.text, 'html.parser')
    html = html.find("tbody")
    html = html.select("tr")
    return html
    # if r.status_code == 200:
    #     return r.json()
    # else:
    #     return r.status_code


if __name__ == "__main__":
    print(school_info())

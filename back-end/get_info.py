import requests

def get_food():
    r = requests.get('https://raw.githubusercontent.com/asw-dod/Deu_food_api/master/output/api.json')

    if r.status_code == 200:
        return r.json()
    else:
        return r.status_code

if __name__ == "__main__":
    print(get_food())
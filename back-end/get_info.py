import collections
import requests
from bs4 import BeautifulSoup as bs
from html_table_parser import parser_functions as parser
import pandas as pd
from collections import OrderedDict
import json


def get_food():
    r = requests.get('https://raw.githubusercontent.com/asw-dod/Deu_food_api/master/output/api.json')

    if r.status_code == 200:
        return r.json()
    else:
        return r.status_code

def school_info(key):
    collections.Callable = collections.abc.Callable
    html_text = requests.get('https://www.deu.ac.kr/www/content/57')
    number_html_text = requests.get("https://www.deu.ac.kr/www/content/14")

    soup = bs(html_text.text, 'html.parser')
    temp = soup.find_all("table")
    p = parser.make2d(temp[0])

    number_list = [[1,"대학본관"],
                    [2,"법정관"],
                    [3,"상경관"],
                    [5,"국제관"],
                    [6,"동의스포츠센터"],
                    [7,"상영관(제2학생회관)"],
                    [8,"수덕전(학생회관)"],
                    [9,"제1인문관"],
                    [10,"제2인문관"],
                    [11,"효민체육관"],
                    [12,"중앙도서관"],
                    [13,"여대생커리어개발관"],
                    [14,"제2효민생활관"],
                    [15,"의료보건관"],
                    [16,"생활과학관"],
                    [17,"음악관"],
                    [18,"창의관"],
                    [19,"지천관"],
                    [20,"산학협력관"],
                    [21,"건윤관"],
                    [22,"공학관"],
                    [23,"정보공학관"],
                    [24,"제1효민생활관"],
                    [25,"학생군사교육단"],
                    [26,"행복기숙사(미래생활관)"],
                    ["H","건학이념비"],
                    ["F","야외음악당"],
                    ["I","정문"],
                    ["E","정심정"],
                    ["G","테니스장"],
                    ["D","혜안지"],
                    ["C","효민원"],
                    ["B","효민축구장"],
                    ["A","효민야구장"]]


    list = set()

    if key == "ATM":
        for i in range(len(p)):
            if p[i][2].find(key) != -1:
                list.add(p[i][0])
    elif key == "편의점":
        for i in range(len(p)):
            if p[i][2].find(key) != -1:
                list.add(p[i][0])
    elif key == "식당":
        for i in range(len(p)):
            if p[i][2].find("터틀즈컵밥") != -1 or p[i][2].find("복사점") != -1 or p[i][2].find("SUBWAY") != -1 or p[i][2].find("맘스터치") != -1 or p[i][2].find("청춘쌀핫도그") != -1:
                list.add(p[i][0])
    elif key == "카페":
        for i in range(len(p)):
            if p[i][2].find("커피 골든벨") != -1 or p[i][2].find("HOLLYS") != -1 or p[i][2].find("스파지오") != -1 or p[i][2].find("투썸") != -1:
                list.add(p[i][0])
    elif key == "스터디 공간":
        for i in range(len(p)):
            if p[i][2].find("PRIME 학습실") != -1 or p[i][2].find("북카페") != -1 or p[i][2].find("도서관") != -1 or p[i][2].find("정독실") != -1:
                list.add(p[i][0])
    elif key == "편의시설":
        for i in range(len(p)):
            if p[i][2].find("서점") != -1 or p[i][2].find("복사점") != -1 or p[i][2].find("헌혈의 집") != -1:
                list.add(p[i][0])

    # final_list = OrderedDict()
    final_list = []
    # cnt = 0
    for i in list:
        for j in number_list:
            if i == j[1]:
                # cnt += 1
                # final_list["{}".format(cnt)] = {"idx" : str(j[0]), "name" : j[1]}
                final_list.append([str(j[0]), j[1]])

    final_list = sorted(final_list, key=lambda x: int(x[0]))

    if html_text.status_code == 200:
        # json.dumps(final_list, ensure_ascii=False, indent="\t")
        return final_list
    else:
        return html_text.status_code
    

def date_info():
    collections.Callable = collections.abc.Callable
    html_text = requests.get('https://www.deu.ac.kr/www/academic_calendar')
    soup = bs(html_text.text, 'html.parser')
    temp = soup.find_all("div > ul > li")

    return temp

if __name__ == "__main__":
    print(date_info())

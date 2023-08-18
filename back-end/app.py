import time

from flask import Flask, jsonify, request

from get_info import *
from translate import trans

app = Flask(__name__)

# 메인 페이지(홈 페이지) 라우팅/ 리퀘스트 방법 GET, POST
@app.route("/translation/food", methods=['POST'])
def traslation():
    if request.form.get('data') != 'ko':
        lan_type = request.form.get('data')
    else:
        lan_type = 'ko'

    data = get_food()
    building = []
    restaurant = {}

    for key in data:
        building.append([key, data[key]])

    # hyomin      = building[0]
    # happy       = building[1]
    # inforamtion  = building[2]
    # suduck      = building[3]

    if building[0][1][0]['Date'] == 'No data':
        building[0] = ['hyomin', None]
    if building[2][1] == None:
        building[2] = ['inforamtion', None]
    if building[3][1] == None:
        building[3] = ['suduck', None]

    for day in building:
        if day[1] is not None:
            for data in day[1]:
                if data['Date'] == time.strftime("%Y-%m-%d", time.localtime(time.time())):
                    breakfast = data['breakfast']
                    lunch = data['lunch_s']
                    dinner = data['dinner']
                    break

    breakfast = trans(breakfast, lan_type)
    lunch = trans(lunch, lan_type)
    dinner = trans(dinner, lan_type)

    # send_list = []
    restaurant['happy'] = [breakfast, lunch, dinner]

    return jsonify(restaurant)

@app.route("/building/info", methods=['POST'])
def information():
    keyword = request.form.get('keyword')
    lan_type = request.form.get('lan_type')

    if lan_type == "ko":
        build_info = school_info(keyword)
    else :
        build_info = school_info(keyword)
        for i in range(len(build_info)):
            tr = trans(build_info[i][1], lan_type)
            tr = json.loads(tr)
            tr = tr["message"]["result"]["translatedText"]
            build_info[i][1] = tr            

    return build_info

# debug 모드로 실행
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
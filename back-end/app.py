from flask import Flask, render_template, request
from translate import trans

app = Flask(__name__)

# 메인 페이지(홈 페이지) 라우팅/ 리퀘스트 방법 GET, POST
@app.route("/translation", methods=['POST'])
def traslation():
    lan_type = request.form.get('data')

    # json data를 txt안에 넣어주세요
    # list = []
    # json.stringfy()
    for i in list:
        txt = i
        t = trans(txt, lan_type)
        list.append(t)
        # json으로 만들기
    return t

# debug 모드로 실행
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
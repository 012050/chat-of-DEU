from flask import Flask, render_template, request
from translate import trans

app = Flask(__name__)

# 메인 페이지(홈 페이지) 라우팅/ 리퀘스트 방법 GET, POST
@app.route("/translation", methods=['POST'])
def traslation():
    lan_type = ""
    print(lan_type)
    txt = ""
    # t = trans(txt, lan_type)
    return "hello"

# debug 모드로 실행
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
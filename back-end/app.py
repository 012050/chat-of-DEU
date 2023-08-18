from flask import Flask, render_template
from translate import trans

app = Flask(__name__)

# 메인 페이지(홈 페이지) 라우팅/ 리퀘스트 방법 GET, POST
@app.route("/")
def home():
    # 사용자에게 home.html 파일을 보여줌
    txt = input()
    t = trans(txt)
    return t

# debug 모드로 실행
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)
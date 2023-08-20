import React, { useEffect, useState } from "react";
import "../css/Translation.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

//TODO: 번역 버튼 언어 추가

/**
 * @returns 번역기 페이지
 */
const Translation = () => {
  const [word, setWord] = useState(""); // 번역할 단어
  const [data, setData] = useState(""); // 번역된 단어

  function input_handler(event) {
    setWord(event.target.value);
  }

  const language = useSelector((state) => state.language.value);

  // 번역 데이터 요청
  const translateWords = () => {
    axios.post("http://localhost:8080/translator", {},{
          params: {
            text: word,
            lan_type: language,
          },
        }
      )
      .then((response) => {
        setData(response.data.return_txt);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          class="center"
          onChange={input_handler}
          placeholder="Please write here."
        />
      </div>
      <div>
        <div class="wrap">
          <button class="button" onClick={translateWords}>번역</button>
        </div>
      </div>
      <div className="output">{data}</div>
    </div>
  );
};

export default Translation;

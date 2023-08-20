import React, { useEffect, useState } from "react";
import "../css/Translation.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

/**
 * @returns 번역기 페이지
 */
const Translation = () => {

    //텍스트 언어 데이터
    const languages = [
      {
        country: "ko",
        button: "번역"
      },
      {
        country: "en",
        button: "Translator"
      },
      {
        country: "ja",
        button: "翻訳"
      },
      {
        country: "vi",
        button: "Dịch"
      },
      {
        country: "zh-CN",
        button: "翻译"
      }
    ];
  const [word, setWord] = useState(""); // 번역할 단어
  const [data, setData] = useState(""); // 번역된 단어
  const language = useSelector((state) => state.language.value); //선택 언어
  let button = languages.find((element) => element.country === language).button; //선택 언어 버튼

  function input_handler(event) {
    setWord(event.target.value);
  }

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
        setData("<translate error>")
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
          <button class="button" onClick={translateWords}>{button}</button>
        </div>
      </div>
      <div className="output">{data}</div>
    </div>
  );
};

export default Translation;

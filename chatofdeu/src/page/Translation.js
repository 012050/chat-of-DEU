import React, { useEffect,useState } from 'react'
import '../css/Translation.css'
import axios from 'axios'

const Translation = () => {

  const [word, setWord] = useState('')
  const [data,setData]=useState('')
  function input_handler(event){
    
    setWord(event.target.value)
  }

  const translateWords=()=>{
    axios.post("http://minimalist.iptime.org:8080/translator", {}, {
        params:{
          text : word,
          lan_type : "en"
  
        }
      }).then((response) => {
        setData(response.data.return_txt)
      }).catch((err) => {
        console.log(err)
      })
    
  }


  return (
    <div className='container'>
      <div>
        <input type="text" class="center" onChange={input_handler} placeholder="Please write here." />
      </div>
      <div>
        <div class="wrap">
          <button class="button" onClick={translateWords}>번역</button>
        </div>

      </div>
      <div className='output'>
        {data}
      </div>
    </div>
  )
}

export default Translation

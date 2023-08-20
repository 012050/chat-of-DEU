import React, { useEffect,useState } from 'react'
import '../css/SchoolSchedule.css'
import axios from 'axios'
import ModalForCalendar from '../components/ModalForCalendar'

/**
 * @returns 학사일정 페이지
 */
const SchoolSchedule = () => {

    const [data,setData] = useState([]);//학사 일정 데이터
    
    // 학사 일정 데이터 요청
    useEffect(() => {
        axios.post("http://localhost:8080/calender", {}, {
            params:{
                lan_type : "ko"
            }
        }).then((response) => {
            setData(response.data.calen_list)
        }).catch((err) => {
            console.log(err)
        })
    },[])
    

    return (
        <div className='container'>
            {data.map((month)=><ModalForCalendar month={month}/>)}
        </div>
    )
}

export default SchoolSchedule

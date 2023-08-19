import React, { useEffect,useState } from 'react'
import '../css/SchoolSchedule.css'
import axios from 'axios'
import ModalForCalendar from '../components/ModalForCalendar'

const SchoolSchedule = () => {
    const [data,setData]=useState([])
    
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
            {data.map((month)=>
            <ModalForCalendar month={month}/>
            )}
        </div>
    )
}

export default SchoolSchedule

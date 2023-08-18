import { useEffect, useState } from "react";
import axios from "axios";
import "./../css/Building.css"

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function Building(){
    let [select, setSelect] = useState("식당"); //선택 값
    let [data, setData] = useState([ //건물 데이터
        {idx: 1, name: "지천관"},
        {idx: 2, name: "국제관"},
        {idx: 3, name: "정보공학관"}
    ])


    axios.post('http://minimalist.iptime.org:8080/building/info', {
        keyword: "ATM",
        lan_type: "ko"
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    useEffect(()=>{

    },[select])

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
      <div className="container">
        <img
          src={process.env.PUBLIC_URL + "/img/camplus-map.jpg"}
          width="100%"
        />
        <BuildingRadio select = {select} setSelect = {setSelect}/>
        {data.map((r, i) => <BuildingCard key={i} i={i} data={data}/>)}
      </div>
    );
}

/**
 * 시설 선택 라디오 버튼
 * @param select 선택값
 * @param setSelect 선택값 설정 함수
 */
function BuildingRadio({select, setSelect}){
    const handleChange = (event) => {
        setSelect(event.target.value);
    };
    return(
        <Box sx={{ flexGrow: 1 }}>
            <FormControl>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="식당"
                name="radio-buttons-group"
                onChange={handleChange}
            >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="식당" control={<Radio />} label="식당" />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="카페" control={<Radio />} label="카페" />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="스터디" control={<Radio />} label="스터디" />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="ATM" control={<Radio />} label="ATM" />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="편의점" control={<Radio />} label="편의점" />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="편의시설" control={<Radio />} label="편의시설" />
                </Grid>
        </Grid>
        </RadioGroup>
            </FormControl>
        </Box>
    )
}

function BuildingCard({i, data}){
    return(
        <div className="mealCard">
            <div className="mealDetail">
                <h3>{data[i].name}</h3>
                <p><b>건물번호 : </b>{data[i].idx}</p>
            </div>
        </div>
    )
}


export default Building;
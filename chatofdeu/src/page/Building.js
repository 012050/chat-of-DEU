import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
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
    let [data, setData] = useState([]);

    let [buildingName, setBuildingName] = useState([
        {
            country: "ko",
            building: "건물 번호",
            selects: ["식당", "카페", "스터디", "ATM", "편의점", "편의시설"]
        },
        {
            country: "en",
            building: "Building number",
            selects: ["Restaurant", "Cafe", "Study Area", "ATM", "Convenience Store", "Facilities"]
        },
        {
            country: "ja",
            building: "ビル番号",
            selects: ["レストラン", "カフェ", "スタディエリア", "ATM", "コンビニ", "施設"]
        },
        {
            country: "vi",
            building: "số tòa nhà",
            selects: ["Nhà hàng", "Quán cà phê", "Khu vực học", "Máy ATM", "Cửa hàng tiện lợi", "Tiện ích"]
        },
        {
            country: "zh-CN",
            building: "楼号",
            selects: ["餐厅", "咖啡馆", "自习区", "自动提款机", "便利店", "便利设施"]
        },
    ])

    

    const [translatedData, setTranslatedData] = useState(buildingName[0])

    
    let language = useSelector((state) => state.language.value); //언어 정보
    let dispatch = useDispatch();


    useEffect(()=>{
        let num = buildingName.findIndex((element => element.country === language));
        setTranslatedData(buildingName[num]);

        axios.post('http://localhost:8080/building/info', {}, {params:{
            keyword: `${select}`,
            lan_type: `${language}`
          }})
          .then((res) => {
            setData(res.data.build_info);
          })
          .catch((error) => {
            console.log(error);
          });
    },[select, language])

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
        <BuildingRadio select = {select} setSelect = {setSelect} translatedData = {translatedData}/>
        {data.map((r, i) => <BuildingCard key={i} i={i} data={data}  translatedData = {translatedData}/>)}
      </div>
    );
}

/**
 * 시설 선택 라디오 버튼
 * @param select 선택값
 * @param setSelect 선택값 설정 함수
 */
function BuildingRadio({select, setSelect, translatedData}){
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
                    <FormControlLabel value="식당" control={<Radio />} label={translatedData.selects[0]} />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="카페" control={<Radio />} label={translatedData.selects[1]} />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="스터디 공간" control={<Radio />} label={translatedData.selects[2]} />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="ATM" control={<Radio />} label={translatedData.selects[3]} />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="편의점" control={<Radio />} label={translatedData.selects[4]} />
                </Grid>
                <Grid item xs={2} md={4}>
                    <FormControlLabel value="편의시설" control={<Radio />} label={translatedData.selects[5]} />
                </Grid>
        </Grid>
        </RadioGroup>
            </FormControl>
        </Box>
    )
}

/**
 * 건물 시설 정보 카드
 * @param i data 반복 인덱스
 * @param data 건물 시설 정보
 * @returns 
 */
function BuildingCard({i, data, translatedData}){
    console.log(translatedData)
    return(
            <div className="mealCard">
                <div className="mealDetail">
                    <h3>{data[i][1]}</h3>
                    <p><b>{translatedData.building} : </b>{data[i][0]}</p>
                </div>
            </div>
    )
}


export default Building;
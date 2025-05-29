import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TourButton from "../components/TourButton";
import TourInput from "../components/TourInput";
import './styles/page.css'

function TourAddPage() {

    const navigate = useNavigate()
    const [tour,setTour] = useState({title:'',content:''})

    const onChangeTourState = (data) =>
        setTour(data)

    const onClickSubmit = () =>{
        const savedData = localStorage.getItem('tour-list') || '[]'

        const parsedData = JSON.parse(savedData)
        parsedData.unshift({...tour, id:new Date().getTime()})

        const saveTourListData = JSON.stringify(parsedData)
        
        localStorage.setItem('tour-list',saveTourListData)

        navigate('/')

    }

    const homeButton = () =>{
        navigate('/')
    }
    
    return (
        <div className="home-page">
            <TourButton size={'sm'} color={'black'} label={'뒤로가기'} onClickButton={homeButton}/>
            <h2>여행 추가하기</h2>
            <TourInput onChangeTourState={onChangeTourState}/>
            <br />
            <TourButton size={'lg'} color={'green'} label={'추가하기'}
            onClickButton={onClickSubmit}/>
        </div>
    );
}

export default TourAddPage;
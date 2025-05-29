import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TourTab from "../components/TourTab";
import TourItem from "../components/TourItem";
import TourButton from "../components/TourButton";

function HomePage() {

    const navigate = useNavigate()
    
    const [selecttab,setSelectTab] = useState('tour')
    const [tourList,setTourList] = useState([])
    
    const initRender = () =>{
        const savedData = localStorage.getItem('tour-list') || '[]'
        const parsedData = JSON.parse(savedData)
        setTourList(parsedData);
        
    }

    useEffect(() =>{
        initRender()
    },[])

    const onClickAdd = ()=>{
        navigate('/add')
    }

    const renderTourList = () =>{
        const savedData = localStorage.getItem('tour-list') || '[]'
        const parsedData = JSON.parse(savedData)
        setTourList(parsedData)
    }

    const renderNoTourList = () =>{
        const savedData = localStorage.getItem('tour-finish-list') || '[]'
        const parsedData = JSON.parse(savedData)
        setTourList(parsedData)
    }

    const onChangeTab = (menu) =>{
        setSelectTab(menu)
        if(menu === 'tour'){
            renderTourList()
        }

        if(menu ==='notour'){
            renderNoTourList()
        }
    }

    const handleClickTourItem = (id) =>{
        const path = selecttab === 'tour' ?
        `/plan/${id}`:`/plan/completed/${id}`;
        navigate(path)
    }

    return (
        <div className="home-page">
            <TourTab onChangeTab={onChangeTab}/>
            <div className="touritemlist">
                <button onClick={onClickAdd} className="plus-btn">+</button>
                {tourList.map((tour,index) =>(
                    <div
                    key={`tourlist-key-${index}`}
                    onClick={() => handleClickTourItem(tour.id)}
                    >
                        <TourItem
                        id={tour.id}
                        type={selecttab}
                        title={tour.title}
                        completedData={tour.completedData || 0}
                        />	
                    </div>
                ))}
            </div>
            
            <TourButton
            size={'lg'} color={'green'} style={'bold'} label={'여행추가하기'}
            onClickButton={onClickAdd}
            />
        </div>
    );
}

export default HomePage;


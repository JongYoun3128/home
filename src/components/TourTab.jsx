import { useState } from "react";
import './styles/tourtap.css'

function TourTab({onChangeTab}) {

    const [activetab,setActiveTab] = useState('tour')
    const handleClickTab = (menu) =>{
        setActiveTab(menu)
        onChangeTab(menu)
    }

    return (
        <div className="tourtab">
            <div
            className="tourtab-menu"
            onClick={() =>handleClickTab('tour')}
            style={{
                color:activetab === 'tour' ?
                'dodgerblue' : 'gray',
                borderColor: activetab === 'tour' ?
                'dodgerblue' : 'white'
            }}
            >여행하고싶은곳</div>
            <div
            className="tourtab-menu"
            onClick={() =>handleClickTab('notour')}
            style={{
                color:activetab === 'notour' ?
                'dodgerblue' : 'gray',
                borderColor: activetab === 'notour' ?
                'dodgerblue' : 'white'
            }}
            >여행해본곳</div>
        </div>
    );
}

export default TourTab;

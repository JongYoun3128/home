import { useState } from "react";
import './styles/calendertabmenu.css'

const CalenderTabMenu = ({onChangeTab}) => {

    const [activeTab, setActiveTab] = useState('calender')
    const calenderClickTab = (menu) =>{
        setActiveTab(menu);
        onChangeTab(menu);

    }
return(
    <div className="calendermenu_wrap">
        <div 
            onClick={()=>calenderClickTab('calender')}
            className="calendermenu"
            style = {{
                color:activeTab === 'calender' ?
                'blue' : 'black',
                borderColor: activeTab === 'calender' ?
                'blue' : 'gray'

            }}
        >
            Today
        </div>
        <div 
            onClick={()=>calenderClickTab('promise')}
            className="calendermenu"
            style = {{
                color:activeTab === 'promise' ?
                'blue' : 'black',
                borderColor: activeTab === 'promise' ?
                'blue' : 'gray'

            }}
        >
            Promise
        </div>
        <div 
            onClick={()=>calenderClickTab('date')}
            className="calendermenu"
            style = {{
                color:activeTab === 'date' ?
                'blue' : 'black',
                borderColor: activeTab === 'date' ?
                'blue' : 'black'

            }}
        >
            Date
        </div>
         
    </div>

);
}

export default CalenderTabMenu;
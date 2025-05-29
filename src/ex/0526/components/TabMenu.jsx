import { useState } from "react";
import './styles/tapmenu.css';

const TabMenu = ({onChangeTab}) => {


    const [activeTab, setActiveTab] = useState('clean');
    const handleClickTab = (menu) => {
    setActiveTab(menu);
    onChangeTab(menu);
    }

  
return(

   
<div className="wrap">
    <div className="tabmenu-wrapper">
        <div   
            onClick={()=>handleClickTab('clean')}    
            className="tabmenu"
            style={{                
                color:activeTab === 'clean' ? 
                'deeppink' : 'gray',
                borderColor: activeTab === 'clean' ?
                'deeppink' : 'gray'
            }}                            
        >
            청소 목록
            
            
        </div>
           
        
        <div              
            //휴지통
            onClick={()=>handleClickTab('finish')}      
            className="wastebasket"                                
            >              
        </div>
        
    </div>
    
    
    </div>

);
}

export default TabMenu;


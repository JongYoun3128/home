import { useState } from "react";
import './styles/tapmenu.css';


const TabMenu = ({onChangeTab}) => {

 const [activeTab, setActiveTab] = useState('todo');
 const handleClickTab = (menu) => {
    setActiveTab(menu);
    onChangeTab(menu);
}
return(

   

    <div className="tabmenu-wrapper">
        <div   
            onClick={()=>handleClickTab('todo')}    
            className="tabmenu"
            style={{                
                color:activeTab === 'todo' ? 
                'deeppink' : 'gray',
                borderColor: activeTab === 'todo' ?
                'deeppink' : 'gray'
            }}                            
        >
            Todo
        </div>
        <div   
            onClick={()=>handleClickTab('done')}      
            className="tabmenu"
            style={{                
                color:activeTab === 'done' ? 
                'deeppink' : 'gray',
                borderColor: activeTab === 'done' ?
                'deeppink' : 'gray'
            }}                            
        >
            Done
        </div>
    </div>

);
}

export default TabMenu;
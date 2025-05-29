import './styles/page.css'
import Button from '../components/Button';
import CleanItem from '../components/CleanItem';
import TabMenu from '../components/TabMenu';
import { useNavigate } from 'react-router';
import { useState, useEffect } from "react";

const CleanMainPage= ()=>{

    const navigate = useNavigate();

    const [selectedTab, setSelectedTab] = useState('clean');
    const [cleanList, setCleanList] = useState([])

    const initRender = () => {

        const savedData = localStorage.getItem('clean-list') || '[]'
        const parsedData = JSON.parse(savedData)
        setCleanList(parsedData);
    }

    useEffect(()=>{
        initRender()
    },[]);

    const onClickAdd = () => {
        navigate('/add')
    }

    const renderCompleteList = () => {

        const savedData = localStorage.getItem('clean-finish-list') || '[]'
        const parsedData = JSON.parse(savedData)
        setCleanList(parsedData);
    }

    const renderCleanList = () => {

        const savedData = localStorage.getItem('clean-list') || '[]'
        const parsedData = JSON.parse(savedData)
        setCleanList(parsedData);
    }

    const onChangeTab = (menu) => {
        setSelectedTab(menu);
        if(menu === 'clean'){
            renderCleanList();
        }

        if(menu === 'finish'){
            renderCompleteList();
        }
    }

    const handleClickCleanItem = (id) => {

        const path = selectedTab === 'clean' ?
        `/cleanpage/${id}` : `/cleanpage/finish/${id}`;
        navigate(path)
    }



    return(
        <div className="cleanmainpage-wrap">
            <div className="cleanmainpage-header">
                <h1>
                    <img src="img/clean_main_logo_icon.png" alt=""  className='main_icon'/>
                    싹쓸이
                    </h1>
                
            </div>
            
            <div className="place_title">
                <h2 className='place_list'>목록</h2>
                <Button 
                onClickButton={onClickAdd}
                className='cleanmainpage_add_button'
                size={'sm'} type={'white'} label={'+'}
                ></Button>
            </div>
            
            
            <div className='cleanitemlist-wrap'>
                <TabMenu onChangeTab={onChangeTab}/>                 
                <div className="cleanitemlist-wrapper">
                    
                    {cleanList.map((clean, index)=>(
                        
                        <div
                        
                            key = {`cleanlist-key-${index}`}
                            onClick={()=>handleClickCleanItem(clean.id)}
                            >
                                
                            
                            <CleanItem
                                id={clean.id}
                                type={selectedTab}
                                title={clean.title}
                                date={clean.date}
                                cleanDate={clean.cleanDate || 0}                            
                            />


                        </div>

                    ))}
                </div>

            </div>


        </div>
    )
}

export default CleanMainPage;
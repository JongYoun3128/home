import Button from "../components/Button";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router";
import './styles/page.css'
import { useState } from "react";

const AddPlace =()=> {
    const navigate = useNavigate();
    const [clean, setClean] = useState({title:'', content:'', date: ''  });
    const onChangeCleanState = (data) => 
        setClean(data);

    const onClickSubmit = () => {
        const savedData = localStorage.getItem('clean-list') || '[]'
        const parsedData = JSON.parse(savedData);

        parsedData.unshift({...clean,id:new Date().getTime()});

        const saveCleanListData= JSON.stringify(parsedData);
        
        localStorage.setItem('clean-list', saveCleanListData);

        navigate('/');

    }


    const homeMoveButton = () => {
        navigate('/');        
    }
    
   

    return(
         <div className="cleanmainpage-wrap">            
            <div className="cleanmainpage-header">
                <h2>공간정리</h2>
            </div>
            <div className="addplacepage_wrap">
                <div className="addplacepage_button">
                    <Button onClickButton={homeMoveButton}
                        size= {'sm'} type={'primary'} label={'Back'}
                        
                    />
            </div>
            <h2>방 추가</h2>
            <FormInput onChangeCleanState={onChangeCleanState}/>
            <br/>
            
                <Button onClickButton={onClickSubmit}
                size= {'lg'} type={'yellow'} label={'추가'} />
            

           </div>
                        
        </div>
    )
}
export default AddPlace;

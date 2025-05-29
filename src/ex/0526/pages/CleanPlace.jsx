
import { useLocation, useParams, useNavigate } from "react-router-dom";
import './styles/page.css'
import {  useState } from "react";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import CleanStatus from "../components/CleanStatus";


const setInitData = (id, isCompleted) => {
    const savedCleanList = 

    localStorage.getItem(isCompleted ? 'clean-finish-list' : 'clean-list') || '[]';
    const parsedCleanList=JSON.parse(savedCleanList);
    const cleanData = parsedCleanList.find((clean)=> clean.id === id);
    return cleanData;
}
const CleanPlace = () => {    
    
    const navigate = useNavigate();  
    
    const location = useLocation();
    const pathname = location.pathname;

    const isCompletedDetail = pathname.includes('/completed')

    const params = useParams();
    const cleanId = Number(params.id);

    const [editData, setEditData] = useState( 
        () => setInitData(cleanId, isCompletedDetail))
    

    const onChangeCleanState = (clean) => {
        setEditData(clean);
    }

    const onClickUpdate = () => {
        const savedCleanList =localStorage.getItem('clean-list') || '[]'
        const parsedCleanList = JSON.parse(savedCleanList);

        const updatedCleanList = parsedCleanList.map((savedClean) => {
            if(savedClean.id === cleanId){
                return{
                    ...savedClean,
                    ...editData,
                }
            }
            return savedClean
        })
    
        localStorage.setItem('clean-list', JSON.stringify(updatedCleanList));
        navigate('/')
    
    }


     const onClickDelete = () => {
        
            const savedCleanList = localStorage.getItem('clean-list') || '[]';
            const parsedCleanList = JSON.parse(savedCleanList);

            const removedCleanList = parsedCleanList.filter(
                (savedClean) => savedClean.id !== cleanId

            );

            localStorage.setItem('clean-list', JSON.stringify(removedCleanList));
            navigate('/')

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
                        size= {'sm'} type={'primary'} label={'back'}
                        
                    />
            </div>
            

            <h2>
                방 수정 <CleanStatus type ={isCompletedDetail ? 'completed' : 'clean'}/>
            </h2>
            <FormInput
                isReadonly = {isCompletedDetail}
                onChangeCleanState={onChangeCleanState}
                editData={editData}
                />

                {isCompletedDetail ? (

                    <></>
                ) : (<div className="cleandetail-buttons-wrapper">
                    
              
            <Button
            onClickButton={onClickUpdate} 
            size= {'lg'} type={'yellow'} label={'수정하기'} />
            
            
            <Button 
            onClickButton={onClickDelete}
            size= {'lg'} type={'danger'} label={'삭제하기'} />
            
            </div>

            )}
            </div>
        </div>
    );
}

export default CleanPlace;
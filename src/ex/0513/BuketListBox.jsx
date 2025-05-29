import '../App.css'
import AddButton from './AddButton'
import BuketList from './BuketList'
import BuketInput from './BuketInput'
import TextButton from './TextButton'
import { useState } from 'react'

const BuketListBox = () => {

    const [inputValue, setTextInput] = useState('');
    const [Buketlist, setBuketList] = useState([]);

    const handleChange = (e) => {
        setTextInput(e.target.value)
    }

    const addBuket = () => {
        setBuketList((current)=> [...current,
            {isComplete:false, value:inputValue}]);
        setTextInput('');
    }

    const toggleComplete = (index) => {
        setBuketList((current)=> current.map((buketbox, buketindex)=>{

            if(buketindex ===index){
                const newBuket = Object.assign({},buketbox);

                newBuket.isComplete = !newBuket.isComplete

                return newBuket

            }else{
                return buketbox
            }
        }));
    };

    const isUnCompletedBuket = buketbox => !buketbox.isComplete;

    const getUnCompletedBuketList = () => Buketlist.filter(isUnCompletedBuket)

    const removeAllCompletedBuketList = () => {
        setBuketList((current)=> current.filter(isUnCompletedBuket))
    }

    return(
        <div className="buketList Box">
            <h1 className="buketList_title">
                &#128466;Buket List
            </h1>

            <div className="buket_form">
                {/* //input//Addbutton */}
                <BuketInput
                    placeHolder='추가하고 싶은 버킷리스트는?'
                    value={inputValue}
                    onChange={handleChange}
                />
                <AddButton
                    label='버킷리스트 추가'
                    onClick={addBuket}
                />
            </div>

            <div className="buket_list_box">
                {/* BuketList */}
                {Buketlist.map((buketbox, index)=>
                <>
                    <BuketList
                        key = {index}
                        isComplete={buketbox. isComplete}
                        value={buketbox. value}
                        onClick={()=>toggleComplete(index)}                    
                    />
                </>
                )}
            </div>
            
            <div className="buket_footer">
                {/* 하고 싶은 것/textbutton */}
                <p>하고 싶은 것 : {getUnCompletedBuketList().length} 개</p>
                <TextButton
                    label= '성공 목록 삭제'
                    onClick={removeAllCompletedBuketList}
                />
            </div>
        </div>

    )
}

export default BuketListBox


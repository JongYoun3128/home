import { useState } from 'react';
import './styles/forminput.css'
const FormInput = ({onChangeCleanState, editData={}, isReadonly = false}) => {
 
    const [cleanState, setCleanState] = useState({
        title : editData.title || '',
        content : editData.content||'',
        date : editData.date||''
    })
        
    const [input, setInput] = useState(editData.title || '')
    const [text, setText] = useState(editData.content || '')
    const [date, setDate] = useState(editData.date || '')

    const handleChangeInput = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        const resultCleanState = {...cleanState, title:inputValue}
        setCleanState(resultCleanState);
        onChangeCleanState(resultCleanState);
    }

    const handleChangeText = (e) => {
        const textValue = e.target.value;
        setText(textValue);
        const resultCleanState = {...cleanState, content:textValue}
        setCleanState(resultCleanState);
        onChangeCleanState(resultCleanState);
    }

     const handleChangeDate = (e) => {
        const dateValue = e.target.value;
        setDate(dateValue);
        const resultCleanState = {...cleanState, date:dateValue}
        setCleanState(resultCleanState);
        onChangeCleanState(resultCleanState);
    }

    return(
        <div className="forminput-wrapper">
            <label className="forminput-label">공간 이름</label>
            <div className="forminput-title-input-wrapper">
                <input                 
                readOnly={isReadonly}
                className="forminput-title-input"    
                value={input}
                onChange={handleChangeInput}                
                />
            </div>

            <label className="forminput-label">청소 주기</label>
            <div className="fonminput-date-input-wrapper">
                <select 
                name="clean_date" id=""
                readOnly={isReadonly}
                className="forminput-title-date"    
                value={date}
                onChange={handleChangeDate}
                >
                    <option value="">==선택==</option>
                    <option value="1주일">1주일</option>
                    <option value="1개월">1개월</option>
                    <option value="3개월">3개월</option>
                    <option value="1년">1년</option>
                </select>

            </div>
            <br/>
            <label className="forminput-label">특이사항</label>
            <div className="forminput-content-textarea-wrapper">
                <textarea 
                    readOnly={isReadonly}
                    className="forminput-content-textarea"                    
                    value={text}
                    onChange={handleChangeText}
                    
                />

                
            </div>

        </div>
    );
}

export default FormInput
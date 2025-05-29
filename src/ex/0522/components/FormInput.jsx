import { useState } from 'react';
import './styles/forminput.css'
const FormInput = ({onChangeTodoState, editData={}, isReadonly = false}) => {
 
    const [todoState, setTodoState] = useState({
        title : editData.title || '',
        content : editData.content||'',
    })
        
    const [input, setInput] = useState(editData.title || '')
    const [text, setText] = useState(editData.content || '')

    const handleChangeInput = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
        const resultTodoState = {...todoState, title:inputValue}
        setTodoState(resultTodoState);
        onChangeTodoState(resultTodoState);
    }

    const handleChangeText = (e) => {
        const textValue = e.target.value;
        setText(textValue);
        const resultTodoState = {...todoState, content:textValue}
        setTodoState(resultTodoState);
        onChangeTodoState(resultTodoState);
    }

    return(
        <div className="forminput-wrapper">
            <label className="forminput-label">제목</label>
            <div className="forminput-title-input-wrapper">
                <input 
                readOnly={isReadonly}
                className="forminput-title-input"    
                value={input}
                onChange={handleChangeInput}

                
                />
            </div>
            <br/>
            <label className="forminput-label">내용</label>
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
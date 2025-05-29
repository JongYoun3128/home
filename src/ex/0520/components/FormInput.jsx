import { useState } from "react";
import './styles/forminput.css'
const FormInput = (onChangeTodoState) => {

    const [todoState, setTodoState] = useState({
        title:'',
        content:'',

    })

    const [input, setInput] = useState('');
    const [text, setText] = useState('');

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
        <div className="formdinput-wrapper">
            <label className="forminput-label">제목</label>
            <div className="forminput-title-input-wrapper">
                <input type="text" 
                className="forminput-title-input" 
                value={input}
                onChange={handleChangeInput}
                
                />
            </div>
            <br/>
            <label className="forminput-label">내용</label>
            <div className="forminput-content-textarea-wrapper">
                <textarea 
                    className="forminput-content-textarea"
                    value={text}
                    onChange={handleChangeText}
                />

                
            </div>

        </div>
    );
}

export default FormInput
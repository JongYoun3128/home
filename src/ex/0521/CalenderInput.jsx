import { useState } from "react";
import './styles/calenderinput.css'

const CalenderInput = (onChangeCalenderState) => {

    const [calenderState, setCalenderState] = useState({
        title:'',
        content:'',

    })

    const [input, setInput] = useState('');
    const [text, setText] = useState('');

    const calenderChangeInput = (e)=>{
        const inputValue = e.target.value;
        setInput(inputValue);
        const resultCalenderState = {...calenderState, title:inputValue}
        setCalenderState(resultCalenderState);
        onChangeCalenderState(resultCalenderState);
    }
    const calenderChangeText = (e)=>{
        const textValue = e.target.value;
        setText(textValue);
        const resultCalenderState = {...calenderState, content:textValue}
        setCalenderState(resultCalenderState);
        onChangeCalenderState(resultCalenderState);
    }
    return(
        <div className="calenderinput-wrap">
            <label className="calenderinput_label">제목</label>
            <div className="calenderinput_text_input_wrap">
                <input type="text" 
                        className="calenderinput_text"
                        value={input}
                        onChange={calenderChangeInput}
                        placeholder="추가할 일정을 입력하세요."
                />
            </div>
            <br/>
            <label className="calenderinput_label">내용</label>
            <div className="calenderinput_content_textarea_wrap">
                <textarea 
                    className="calenderinput_content_textarea"
                    value={text}
                    onChange={calenderChangeText}
                    placeholder="내용을 입력하세요."
                >

                </textarea>


            </div>
        </div>
    )
}
export default CalenderInput;
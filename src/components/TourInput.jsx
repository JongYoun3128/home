import { useState } from "react";
import './styles/tourinput.css'

function TourInput({onChangeTourState, editDate={}, isReadOnly = false}) {

    const [tourState,setTourState] = useState({
        title:editDate.title || '',
        content:editDate.content || '',
    })

    const [input,setInput] = useState(editDate.title || '')
    const [text,setText] = useState(editDate.content || '')

    const handleChangeInput = (e) =>{
        const inputValue = e.target.value;
        setInput(inputValue)
        const resultTourState = {...tourState,title:inputValue}
        setTourState(resultTourState)
        onChangeTourState(resultTourState)
    }

    const handleChangeText = (e) =>{
        const textValue = e.target.value;
        setText(textValue)
        const resultTourState = {...tourState,content:textValue}
        setTourState(resultTourState)
        onChangeTourState(resultTourState)
    }

    return (
    <div className="tourinput">
        <label className="tourinput-label">여행지</label>
        <div className="tourinput-title">
            <input
            className="tourinput-title-input"
            value={input}
            onChange={handleChangeInput}
            readOnly={isReadOnly}
            />
        </div>
        <br />
        <label className="tourinput-label">여행계획</label>
        <div className="touritem-text">
            <textarea
            className="touritem-text-textarea"
            value={text}
            onChange={handleChangeText}
            readOnly={isReadOnly}
            />
        </div>
    </div>
    );
}

export default TourInput;

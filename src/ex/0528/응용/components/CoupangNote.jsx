import { useEffect, useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

function CoupangNote({id,onRemoveNote}) {

    const colorOptions =[
        'bg-yellow-300',
        'bg-pink-300',
        'bg-blue-300',
        'bg-green-300',
        'bg-red-300',
        'bg-sky-300',
    ]

    const [isEditing,setIsEditing] = useState(false)
    const [content,setContent] =useState('')
    const randomIndex = Math.floor(Math.random()*colorOptions.length)

    const [color,setColor] = useState(colorOptions[randomIndex])

    const textareaRef = useRef(null)
    useEffect(()=>{
        if(textareaRef.current){
            textareaRef.current.style.height=
            textareaRef.current.scrollHeight +'px'
        }
    },[content])

    return (
        <div className={`p-4 relative max-h-[32rem] overflow-hidden ${color}`}
        onClick={()=> setIsEditing(true)}>
            <div className="absolute top-2 right-2">
            {isEditing ? (
                <button
                className="text-gray-700"
                onClick={e=>{
                    e.stopPropagation()
                    setIsEditing(false)
                }}
                aria-label="Check Note"
                >
                <AiOutlineCheck size={20}/>
                </button>
            ) : (
                <button
                onClick={()=>onRemoveNote(id)}
                aria-label="Close Note"
                className="text-gray-700"
                >
                <AiOutlineClose size={20}/>                    
                </button>
            )}
            </div>
            <textarea 
            className="w-full h-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden"
            placeholder="메모를 작성하세요"
            readOnly={!isEditing}
            aria-label="Edit-Note"
            onChange={e=>setContent(e.target.value)}
            style={{height:'auto',minHeight:'8rem'}}
            />
            {isEditing && (
                <div className="flex space-x-2">
                    {colorOptions.map((option,index)=>(
                        <button
                        key={index}
                        onClick={()=> setColor(option)}
                        className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default CoupangNote;
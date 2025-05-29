import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {v4 as uuidv4} from 'uuid'
import CoupangNote from "./CoupangNote";

function CoupangCard({title,isSubTitle = false}) {


    const [notes,setNote] = useState([])
    const handleAddNote = () =>{
        setNote([
            ...notes,{id:uuidv4(),content:''}
        ])
    }

    const handleRemoveNote = id =>{
        setNote(notes.filter(note=>note.id !== id))
    }


    return (
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
            <div
            className={`${isSubTitle === false && 'bg-gray-100 border-b border-gray-300'} flex items-center justify-between px-3 py-2`}>
                <h3
                className={`${isSubTitle === false && 'font-bold'}`}>
                    {title}
                </h3>
                <button
                onClick={handleAddNote}
                className="bg-blue-400 text-white p-1.5 text-xs rounded-md">
                    <FaPlus/>
                </button>
            </div>
            <div className="space-y-3 min-h-32 p-3">
                {notes.map(note=>(
                    <CoupangNote
                    key={note.id}
                    id={note.id}
                    content={note.content}
                    onRemoveNote={handleRemoveNote}
                    />
                ))}
            </div>
        </div>
    );
}

export default CoupangCard;
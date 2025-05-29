import { useState } from 'react';
import './App.css'
import { sculptureList } from "../../components/Data";

function Gallery (){

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);


    function handleClick(){
        setIndex(index + 1)
    }

    function handleMoreClick(){
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index];

    return(
        <article>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <li>{sculpture.name}</li>
                by {sculpture.artist}
            </h2>

            <h3>
                ({index+1} of {sculptureList.length})

            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}

            <img src={sculpture.url} alt={sculpture.alt} />
            
        </article>
    )

}

export default Gallery
import Card from "./Card";
import NationalItem from "./NationalItem";
import { Fragment } from "react";


function National({items, title}) {
    
    const lastIndex = items.length -1;
    return (
        <Card title={title}>
            <div className="nationalList">
               {items.map((national, index)=>(
                    <Fragment key={national.id}>
                        <NationalItem {...national}/>
                        {index !== lastIndex && <hr className="divider"/>}
                    </Fragment>
               ))}
                
            </div>           
        </Card> 
                    
    );
}

export default National;
import Card from "./Card";
import OganicItem from "./OganicItem";
import { Fragment } from "react";


function Oganic({items, title}) {
    
    const lastIndex = items.length -1;
    return (
        <Card title={title}>
            <div className="oganicList">
               {items.map((oganic, index)=>(
                    <Fragment key={oganic.id}>
                        <OganicItem {...oganic}/>
                        {index !== lastIndex && <hr className="divider"/>}
                    </Fragment>
               ))}
                
            </div>           
        </Card> 
                    
    );
}

export default Oganic;
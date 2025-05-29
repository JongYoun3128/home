import Card from "./Card";
import ItemBox from "./ItemBox";
import { Fragment } from "react";


function Item({items, title}) {
    
    const lastIndex = items.length -1;
    return (
        <Card title={title}>
            <div className="itemlList">
               {items.map((item, index)=>(
                    <Fragment key={item.id}>
                        <ItemBox {...item}/>
                        {index !== lastIndex && <hr className="divider"/>}
                    </Fragment>
               ))}
                
            </div>           
        </Card> 
                    
    );
}

export default Item;
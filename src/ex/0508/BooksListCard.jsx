import { Fragment } from "react";
import Books from "./Books";
import Card from "./Card";

function BooksListCard ({items, title}) {

    const lastIndex = items.length - 1
    
    return (
        <Card title={title}>
            <div className="books">
                {items.map((book, index) => (
                    <Fragment>
                <Books key={book.id} {...book}/>
                {index !== lastIndex && <hr className='divider' />}
                </Fragment>
                ))}
            
            </div>
        </Card>
    );
}



export default BooksListCard;
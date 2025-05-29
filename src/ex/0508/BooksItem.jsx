
function BooksItem({title,description,thumbnail,price}) {
    return (
        <article className="book">
            <img src={thumbnail} alt="" className="book_img"/>
            <div className="book_body">
                <div className="book_title">
                    {title}
                </div>
                <div className="book_description">
                    {description}
                </div>
                <div className="book_price">
                    <span className="discount">10%</span>
                    {price}
                </div>
            </div>
        </article>
    );
}

export default BooksItem;
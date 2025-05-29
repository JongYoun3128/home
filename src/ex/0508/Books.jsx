function NewIconBtn(){
    return(

        <img className="new_img" src="/img/new.png"/>
    )
}

function LinkBtn({link}){
    return(
        <a href={link} target="_blank">
            <img src="/img/link-icon.svg" alt="" className="link_img"/>
        </a>
    )
}

function HeartIconBtn({isFavorite=false}){
    return(
        <img className="heart_img" src = {isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg'}/>
    )
}


function Books({title,description,thumbnail,price,isAwrad,link,isFavorite}) {

    return (
        <article className="book">
            <img src={thumbnail} alt="" className="book_img"/>
            <div className="book_body">
                <div className="book_title">
                    {title}
                    {isAwrad && <NewIconBtn isAwrad={isAwrad}/>}
                    <HeartIconBtn isFavorite={isFavorite}/>          
                </div>
                <div className="book_description">
                    {description}
                    {link && <LinkBtn link={link}/>}

                </div>
                <div className="book_price">
                    <span className="discount">10%</span>
                    {price}
                </div>
            </div>
        </article>
    );
}

export default Books;
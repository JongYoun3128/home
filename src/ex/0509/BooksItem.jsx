function BestIconBtn(){
    return(
        <img className="best_img" src='/img/best_icon.svg'/>
    )
}

function NewIconBtn(){
    return(
        <img className="new_img" src='/img/New_img.svg'/>
    )
}

function LinkBtn({link}){
    return(
        <a href={link} target="_blank">
            <img src="/img/link-icon.svg" alt="" className="link_img"></img>
        </a>
    )
}

function HeartIconBtn({isFavorite=false}){
    return(
        <img className="heart_img" src={isFavorite ? '/img/heart-fill-icon.svg' : '/img/heart-icon.svg'  } />

        )

}
    


function BooksItem({title,description,thumbnail,price,isbest,link,isFavorite,isnew}) {
    
    return (
        <article className="book">
            <img src={thumbnail} alt="" className="book_img" />
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
                <div className="book_icon">
                <HeartIconBtn isFavorite={isFavorite}/>
                {isbest&& <BestIconBtn isbest={isbest}/>} 
                {isnew&& <NewIconBtn isnew={isnew}/>} 
                {link && <LinkBtn link={link}/>}
                
                 </div>
            </div>
            
        </article>
    );
}

export default BooksItem;
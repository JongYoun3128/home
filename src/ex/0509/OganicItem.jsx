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

function NewImgIcon(){
    return(
        <img className="newImgIcon" src='/img/new_icon.png'/>
    )
}

function BestBtn(){
    return(
        <img className="bestIcon_img" src='/img/best_icon.png'/>
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
    


function OganicItem({title,thumbnail,price,isbest,link,isFavorite,isnew,isbestcon,newimg}) {
    
    return (
        <article className="oganic">
            <img src={thumbnail} alt="" className="oganic_img"/>
            <div className="oganic_icon_box">
                {isbestcon &&<BestBtn isbestcon={isbestcon}/>}
                {newimg &&<NewImgIcon newimg={newimg}/>}
            </div>
            <div className="oganic_body">
                <div className="oganic_title">
                    {title}         
                </div>                
                <div className="oganic_price">
                    {price} 
                    
                </div>
                <div className="oganic_icon">
                <HeartIconBtn isFavorite={isFavorite}/>
                {isbest&& <BestIconBtn isbest={isbest}/>} 
                {isnew&& <NewIconBtn isnew={isnew}/>} 
                {link && <LinkBtn link={link}/>}
                
                 </div>
            </div>
            
        </article>
    );
}

export default OganicItem;
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
    


function NationalItem({title,thumbnail,location,isbest,link,isFavorite,isbestcon,newimg}) {
    
    return (
        <article className="national">
            <img src={thumbnail} alt="" className="national_img"/>
            <div className="national_icon_box">
                {isbestcon &&<BestBtn isbestcon={isbestcon}/>}
                {newimg &&<NewImgIcon newimg={newimg}/>}
            </div>
            <div className="national_body">
                <div className="national_title">
                    {title}         
                </div>                
                <div className="national_location">
                    {location} 
                    
                </div>
                <div className="national_icon">
                <HeartIconBtn isFavorite={isFavorite}/>
                {isbest&& <BestIconBtn isbest={isbest}/>} 
                {link && <LinkBtn link={link}/>}
                
                 </div>
            </div>
            
        </article>
    );
}

export default NationalItem;
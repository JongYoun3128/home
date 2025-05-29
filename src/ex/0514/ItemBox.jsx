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




function ItemBox({name,img,star,price,isbest,link,company,isnew}) {
    
    return (
        <article className="item">
            <img src={img} alt="" className="item_img"/>           
            <div className="item_body">
                <div className="item_company">
                    {company}
                </div>
                <div className="item_title">
                    {name}         
                </div>                
                <div className="item_star">
                    {star} 
                    
                </div>
                <div className="item_price">
                    <span>10%</span> {price}
                    
                </div>
                <div className="item_icon">   
                {isnew&& <NewImgIcon isnew={isnew}/>} 
                {isbest&& <BestBtn isbest={isbest}/>}
                {link && <LinkBtn link={link}/>}
                
                 </div>
            </div>
            
        </article>
    );
}

export default ItemBox;
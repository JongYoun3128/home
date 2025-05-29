function EverLandItem({thumbnail,titleText1,titleText2,subText,timeIcon1,timeIcon2,time,people,ht01,ht02, ht03,ht04,ht05,ht06}) {
    return (
            
        <article className="program_box">                
            <img src={thumbnail}alt="" className="program_box_img"/>
            <div className="program_body">
                <div className="body_text">
                    <h2><span className="bt_title">{titleText1}</span> <span className="yellow">{titleText2}</span></h2>
                    <p className="sub_text">{subText}</p>
                </div>
                <div className="time_box">
                    <img src={timeIcon1} alt=""/>
                    <p className="time">{time}</p>
                    <img src={timeIcon2} alt=""/>
                    <p className="peopel">{people}</p>
                </div>
                <div className="hashtag">
                    <p className="ht_01">{ht01}</p>
                    <p className="ht_02">{ht02}</p>
                    <p className="ht_03">{ht03}</p>
                    <p className="ht_04">{ht04}</p>
                    <p className="ht_05">{ht05}</p>
                    <p className="ht_06">{ht06}</p>
                </div>
            </div>
        </article>
            
    );
}

export default EverLandItem;
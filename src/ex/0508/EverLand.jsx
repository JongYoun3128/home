import EverLandItem from "./EverLandItem";

function EverLand({items}) {
    
    const [elbox1,elbox2,elbox3,elbox4,elbox5] = items;
    
    
    
    return (
        <div class="program">  
        <h2 class="title"><img src="img/m_tit_exper1.jpg" alt=""/></h2> 
            <EverLandItem
                {...elbox1}/>
         <h2 class="title"><img src="img/m_tit_exper2.jpg" alt=""/></h2>
            <EverLandItem
                {...elbox2}/>       
            <EverLandItem
                {...elbox3}/>
         <h2 class="title"><img src="img/m_tit_exper3.jpg" alt=""/></h2>
            <EverLandItem
                {...elbox4}/>
            <EverLandItem
                {...elbox5}/>
            
        </div>
    );
}

export default EverLand;
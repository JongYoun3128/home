const BuketList = ({
    isComplete,
    value,
    onClick
})=>{

    return(
        <div 
            className="buket_list"
            data-is-complete = {isComplete}
            onClick={onClick}
        >

            <p>{isComplete && <span>&#x2611;</span>}</p>
            <p>{value}</p>
        </div>
    )
}

export default BuketList
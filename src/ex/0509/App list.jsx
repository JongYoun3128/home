function Item({name, isPacked}){

    if(isPacked){
        return(
        <li className="item">
            <del>
                {name}✅;
            </del>
        </li>
        )
    }

    return(
        <li className="item">
            <b><i>{name}</i></b>
        </li>
    )
}

//  return (
//         <li className="item">
//             {isPacked ? (
//                 <del>
//                     {name + '✅'}
//                 </del>
//             ) : (
//                 <b><i>name</i></b>
//             )}
        

//         </li>
//         )

// }

function PackingList(){
    return(
        <section>
            <h1>JS Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name = 'Space suit'
                />
                <Item
                    isPacked={true}
                    name = 'Book'
                />
                <Item
                    isPacked={false}
                    name = 'Cup'
                />
            </ul>
        </section>
    )
}

export default PackingList
function Card({title,children}) {
    return (
        <div className="card">
            <div className="card_header">{title}</div>
                <div className="card_body">
                    {children}
                </div>
        </div>
    );
}

export default Card;

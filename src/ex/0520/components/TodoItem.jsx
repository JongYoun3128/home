import './styles/todoitem.css'

const TodoItem = ({title,}) => {


    return(
        <div className="todoitem-wrapper">
            <div className="todoitem-title">
                {title}
                <button>완료</button>
            </div>
            
        </div>
    );
}

export default TodoItem;
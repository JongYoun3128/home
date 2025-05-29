import './styles/todoitem.css'
import Button from './Button';

const TodoItem = ({title, id, type,completedDate}) => {


    const onClickComplete = () => {

        const savedData = localStorage.getItem('todo-list') || '[]';
        const parsedData = JSON.parse(savedData)

        //완료시킬 Todo데이터 찾기

        const targetData = parsedData.find((todo) => todo.id === id);

        //완료시킬 데이터를 Todo-list에서 제거
        const removedTodoListData = parsedData.filter((todo) => todo.id !== id);

        //제거한 다음 다시 todo-list에 저장

        localStorage.setItem('todo-list', JSON.stringify(removedTodoListData))

        //완료된 목록은 todo-finish-list 로컬스토리지 키로 저장
        const completedData = {
            ...targetData,
            completedDate: new Date().getTime()
            
        }

        const savedFinishList = localStorage.getItem('todo-finish-list') || '[]';
        const ParsedFinishList = JSON.parse(savedFinishList);

        //완료된 명령을 배열에 추가하는 명령

        ParsedFinishList.unshift(completedData)

        localStorage.setItem('todo-finish-list', JSON.stringify(ParsedFinishList));

        window.location.reload();
    }


    return(
        <div className="todoitem-wrapper">
            <div className="todoitem-title">
                {title}
                
            </div>
            <div className="todoitem-button-wrapper">

                {type === 'todo' && (
                    <Button 
                    onClickButton={onClickComplete}                
                    size={'sm'} type={'danger'} label={'완료'}/>

                )}

                {type === 'done' &&(
                    <div className="todoitem-completed">
                        {new Date(completedDate).toISOString().split('T')[0]}
                    </div>
                )}


                
            </div>
            
        </div>
    );
}

export default TodoItem;


import { useState } from 'react';
import './App.css'
import OutLineInput from '../../components/OutLineInput';
import PrimaryButton from '../../components/AddButton';
import TextButton from '../../components/TextButton';
import ToDo from '../../components/ToDo';

const App = ()=> {

    const [inputValue, setInputValue] = useState('');
    const [ToDoList, setToDoList] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const addToDo = () => {
        setToDoList((current)=> [...current, {isComplete: false, value:inputValue}]);
        setInputValue('');
    }

    const toggleComplete = (index) => {
        setToDoList((current)=> current.map((toDo, toDoIndex)=>{

            if(toDoIndex ===index){
                const newToDo = Object.assign({}, toDo);

                newToDo.isComplete = !newToDo.isComplete

                return newToDo;
                
            }else{
                return toDo
            }
        }));
    };

    const isUncompletedToDo = toDo =>!toDo.isComplete;

    const getUnCompletedTodoList = () => ToDoList.filter(isUncompletedToDo);

    const removeAllCompletedTodo = () => {
        setToDoList((current)=> current.filter(isUncompletedToDo))
    }

    return(
        <div className="app">
            <h1 className="app_title">
                &#128466; To Do List
            </h1>

            <div className="app_form">
                {/* //OutLineInput//PrimaryButton */}
                <OutLineInput
                    placeHolder='무엇을 해야하나요?'
                    value={inputValue}
                    onChange={handleChange}
                />
                <PrimaryButton
                    label='할 일 추가'
                    onClick={addToDo}
                />
            </div>

            <div className="app_list">
                {/* //ToDo 필요만큼 */}
                {ToDoList.map((toDo, index)=>
                 <ToDo
                    key = {index}
                    isComplete={toDo. isComplete}
                    value={toDo. value}
                    onClick={()=>toggleComplete(index)}
                    />
            )}
               
            </div>

            <div className="app_footer">
                {/* //남은 일수//textButton */}

                <p>남은 일 : {getUnCompletedTodoList().length} 개</p>
                <TextButton
                    label='완료 목록 삭제'
                    onClick={removeAllCompletedTodo}
                />
            </div>



        </div>

    )


}

export default App;

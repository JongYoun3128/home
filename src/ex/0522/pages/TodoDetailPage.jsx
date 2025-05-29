
import { useLocation, useParams, useNavigate } from "react-router-dom";
import './styles/page.css'
import {  useState } from "react";
import TodoStatus from "../components/TodoStatus";
import Button from "../components/Button";
import FormInput from "../components/Forminput";


const setInitData = (id, isCompleted) => {
    const savedTodoList = 

    localStorage.getItem(isCompleted ? 'todo-finish-list' : 'todo-list') || '[]';
    const parsedTodoList=JSON.parse(savedTodoList);
    const todoData = parsedTodoList.find((todo)=> todo.id === id);
    return todoData;
}
const TodoDetailPage = () => {    
    
    const navigate = useNavigate();  
    
    const location = useLocation();
    const pathname = location.pathname;

    const isCompletedDetail = pathname.includes('/completed')

    const params = useParams();
    const todoId = Number(params.id);

    const [editData, setEditData] = useState( 
        () => setInitData(todoId, isCompletedDetail))
    

    const onChangeTodoState = (todo) => {
        setEditData(todo);
    }

    const onClickUpdate = () => {
        const savedTodoList =localStorage.getItem('todo-list') || '[]'
        const parsedTodoList = JSON.parse(savedTodoList);

        const updatedTodoList = parsedTodoList.map((savedTodo) => {
            if(savedTodo.id === todoId){
                return{
                    ...savedTodo,
                    ...editData,
                }
            }
            return savedTodo
        })
    
        localStorage.setItem('todo-list', JSON.stringify(updatedTodoList));
        navigate('/')
    
    }


     const onClickDelete = () => {
        
            const savedTodoList = localStorage.getItem('todo-list') || '[]';
            const parsedTodoList = JSON.parse(savedTodoList);

            const removedTodoList = parsedTodoList.filter(
                (savedTodo) => savedTodo.id !== todoId

            );

            localStorage.setItem('todo-list', JSON.stringify(removedTodoList));
            navigate('/')

    }


    const homeMoveButton = () => {
        navigate('/');        
    }
    

    return(
        <div className="page_wrapper">
           
            <Button onClickButton={homeMoveButton}
            size= {'sm'} type={'normal'} label={'back'}
            />
            

            <h2>
                Todo Detail <TodoStatus type ={isCompletedDetail ? 'done' : 'todo'}/>
            </h2>
            <FormInput
                isReadonly = {isCompletedDetail}
                onChangeTodoState={onChangeTodoState}
                editData={editData}
                />

                {isCompletedDetail ? (

                    <></>
                ) : (<div className="tododetail-buttons-wrapper">
              
            <Button
            onClickButton={onClickUpdate} 
            size= {'lg'} type={'primary'} label={'submit'} />
            
            
            <Button 
            onClickButton={onClickDelete}
            size= {'lg'} type={'danger'} label={'delete'} />
            
            </div>

            )}
            
        </div>
    );
}

export default TodoDetailPage;
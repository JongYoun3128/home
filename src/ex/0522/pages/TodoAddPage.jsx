import Button from "../components/Button";
import FormInput from "../components/Forminput";
import { useNavigate } from "react-router";
import './styles/page.css'
import { useState } from "react";

const TodoAdd =()=> {
    const navigate = useNavigate();
    const [todo, setTodo] = useState({title:'', content:'', });
    const onChangeTodoState = (data) => 
        setTodo(data);

    const onClickSubmit = () => {
        const savedData = localStorage.getItem('todo-list') || '[]'
        const parsedData = JSON.parse(savedData);

        parsedData.unshift({...todo,id:new Date().getTime()});

        const saveTodoListData= JSON.stringify(parsedData);
        
        localStorage.setItem('todo-list', saveTodoListData);

        navigate('/');

    }


    const homeMoveButton = () => {
        navigate('/');        
    }
    
   

    return(
        <div className="page_wrapper">
            
            <Button onClickButton={homeMoveButton}
                size= {'sm'} type={'normal'} label={'back'}
            />
            <h2>Todo Add</h2>
            <FormInput onChangeTodoState={onChangeTodoState}/>
            <br/>
               <Button onClickButton={onClickSubmit}
               size= {'lg'} type={'primary'} label={'submit'} />
           

        </div>
    );
}

export default TodoAdd;
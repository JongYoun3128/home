import Button from "../components/Button";
import TodoItem from "../components/TodoItem";
import TabMenu from "../components/TabMenu";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
const MainPage = () => {

    const navigate = useNavigate();

    const [selectedTab, setSelectedTab] = useState('todo');
    const [todoList, setTodoList] = useState([])

    const initRender = () => {

        const savedData = localStorage.getItem('todo-list') || '[]'
        const parsedData = JSON.parse(savedData)
        setTodoList(parsedData);
    }

    useEffect(()=>{
        initRender()
    },[]);

    const onClickAdd = () => {
        navigate('/add')
    }

    const renderDoneList = () => {

        const savedData = localStorage.getItem('todo-finish-list') || '[]'
        const parsedData = JSON.parse(savedData)
        setTodoList(parsedData);
    }

    const renderTodoList = () => {

        const savedData = localStorage.getItem('todo-list') || '[]'
        const parsedData = JSON.parse(savedData)
        setTodoList(parsedData);
    }

    const onChangeTab = (menu) => {
        setSelectedTab(menu);
        if(menu === 'todo'){
            renderTodoList();
        }

        if(menu === 'done'){
            renderDoneList();
        }
    }

    const handleClickTodoItem = (id) => {

        const path = selectedTab === 'todo' ?
        `/detail/${id}` : `/detail/completed/${id}`;
        navigate(path)
    }
    
    return(
        <div className="page_wrapper">       
                <TabMenu onChangeTab={onChangeTab}/> 
                <div className="todoitemlist-wrapper">
                    {todoList.map((todo, index)=>(
                        <div
                        
                            key = {`todolist-key-${index}`}
                            onClick={()=>handleClickTodoItem(todo.id)}
                            >

                            <TodoItem
                                id={todo.id}
                                type={selectedTab}
                                title={todo.title}
                                completedDate={todo.completedDate || 0}                            
                            />


                        </div>

                    ))}
                </div>
                <Button onClickButton={onClickAdd} size={'lg'} type={'primary'} label={'Add'}/>
             

    
        </div>
    );

}

export default MainPage;



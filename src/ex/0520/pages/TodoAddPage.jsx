import Button from "../components/Button";
import FormInput from "../components/Forminput";
import { Link } from "react-router";
import './styles/page.css'
import TodoStatus from "../components/TodoStatus";

const TodoAdd =()=> {

    return(
        <div className="page_wrapper">
            <Link to={'/'}>
                <Button
                    size= {'sm'} type={'normal'} label={'back'}
                />
            </Link>
            <h2>Todo Add <TodoStatus type={'done'}/></h2>
            <FormInput/>
            <br/>
            <Link to={'/'}>
                <Button
                    size= {'lg'} type={'primary'} label={'submit'}
                />
            </Link>

        </div>
    );
}

export default TodoAdd;
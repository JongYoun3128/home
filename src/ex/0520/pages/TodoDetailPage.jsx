import TodoStatus from "../components/TodoStatus";
import Button from "../components/Button";
import FormInput from "../components/Forminput";
import './styles/page.css'
import { Link } from "react-router";

const TodoDetailPage = () => {

    return(
        <div className="page_wrapper">
            <Link to={'/'}>
                <Button
                    size={'sm'} type={'normal'} label={'back'}
                />
            </Link>

            <h2>
                Todo Detail <TodoStatus type={'todo'}/>
            </h2>
            <FormInput/>
            <div className="tododetail-buttons-wrapper">
                <Link to={'/'}>
                    <Button
                        size={'lg'} type={'primary'} label={'Update'}
                    />
                </Link>
                <br/>
                <Link to={'/'}>
                    <Button
                        size={'lg'} type={'danger'} label={'Delete'}
                    />
                </Link>
            </div>
        </div>
    );
}

export default TodoDetailPage;
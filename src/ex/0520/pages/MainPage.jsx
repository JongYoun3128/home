import Button from "../components/Button";
import TodoItem from "../components/TodoItem";
import TabMenu from "../components/TabMenu";
import { Link } from "react-router";
const MainPage = () => {
    
    return(
        <div className="page_wrapper">       
                <TabMenu/>       
                <div className="todoItemlist-wrapper">
                    <Link to={'/detail'}>
                        <TodoItem title={'할일목록1'}/>
                    </Link>
                    <TodoItem title={'할일목록2'}/>
                    <TodoItem title={'할일목록3'}/>
                    <TodoItem title={'할일목록4'}/>
                    <TodoItem title={'할일목록5'}/>
                </div>     
                <Link to={'/add'}>            
                    <Button size={'lg'} type={'primary'} label={'Add'}/>
                </Link>

    
        </div>
    );

}

export default MainPage;

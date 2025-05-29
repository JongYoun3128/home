import './styles/cleanitem.css'
import Button from './Button';

const CleanItem = ({title, date, id, type,completedDate}) => {


    const onClickComplete = () => {

        const savedData = localStorage.getItem('clean-list') || '[]';
        const parsedData = JSON.parse(savedData)

     

        const targetData = parsedData.find((clean) => clean.id === id);


        const removedCleanListData = parsedData.filter((clean) => clean.id !== id);



        localStorage.setItem('clean-list', JSON.stringify(removedCleanListData))


        const completedData = {
            ...targetData,
            completedDate: new Date().getTime()
            
        }

        const savedFinishList = localStorage.getItem('clean-finish-list') || '[]';
        const ParsedFinishList = JSON.parse(savedFinishList);

        //완료된 명령을 배열에 추가하는 명령

        ParsedFinishList.unshift(completedData)

        localStorage.setItem('clean-finish-list', JSON.stringify(ParsedFinishList));

        window.location.reload();
    }


    return(
        <div className="cleanitem-wrapper">
            <div className="cleanitem-title">
                {title}
                
            </div>
            <div className="cleanitem-title">
                {date}
                
            </div>
            

            <div className="cleanitem-button-wrapper">

                {type === 'clean' && (
                    <Button 
                    onClickButton={onClickComplete}                
                    size={'sm'} type={'danger'} label={'완료'}/>

                )}               


                {type === 'complete' &&(
                    <div className="cleanitem-completed">
                        {new Date(completedDate).toISOString().split('T')[0]}
                        
                    </div>
                )}



                
            </div>
            
        </div>
    );
}

export default CleanItem;


import TourButton from './TourButton'
import './styles/touritem.css'

function TourItem({id,title,type,completedData}) {

    

    const onClickComplete = () =>{

        const savedData = localStorage.getItem('tour-list') ||'[]';
        const parsedData = JSON.parse(savedData);

        const targetData = parsedData.find((tour) => tour.id === id);

        const removeTourListData = parsedData.filter((tour) => tour.id !== id);

        localStorage.setItem('tour-list',JSON.stringify(removeTourListData));

        const completedData = {
            ...targetData,
            completedData : new Date().getTime()
        }
        const savedFinishList = localStorage.getItem('tour-finish-list') || '[]';
        const ParsedFinishList = JSON.parse(savedFinishList);
        
        ParsedFinishList.unshift(completedData);

        localStorage.setItem('tour-finish-list',JSON.stringify(ParsedFinishList));
    

        window.location.reload();
    }
    



    return (
        <div className="touritem">
            <div className="touritem-title">
                {title}
            </div>
            <div className="touritem-button">
                
                {type === 'tour' && (
                    <TourButton
                    onClickButton={onClickComplete}
                    size={'sm'} color={'green'} label={'완료'}
                    />
                )}
                {type === 'notour' &&(
                      <div className="touritem-completed">
                        {new Date(completedData).toISOString().split('T')[0]}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TourItem;
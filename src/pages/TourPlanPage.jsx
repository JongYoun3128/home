import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import TourButton from "../components/TourButton"
import TourStatus from "../components/TourStatus"
import TourInput from "../components/TourInput"
import './styles/page.css'

const setInitData = (id, isCompleted) =>{

    const savedTourList = localStorage.getItem(isCompleted ? 'tour-finish-list' : 'tour-list') || '[]'
    const parsedTourList = JSON.parse(savedTourList)
    const tourData = parsedTourList.find((tour) => tour.id === id)
    return tourData;
}


function TourPlanPage() {

    const navigate = useNavigate();

    const location = useLocation();
    const pathname = location.pathname
    
    const isCompletedPlan = pathname.includes('/completed')

    const params = useParams()
    const tourId = Number(params.id)

    const [editData,setEditData] = useState(
        () => setInitData(tourId,isCompletedPlan))

        const onChangeTourState = (tour) =>{
            setEditData(tour)
        }

        const  onClickUpdate = () =>{

            const savedTourList = localStorage.getItem('tour-list') || '[]'
            const parsedTourList = JSON.parse(savedTourList)
            const updatedTourList = parsedTourList.map((savedTour) =>{
                if(savedTour.id === tourId){
                    return{
                        ...savedTour,
                        ...editData,
                    }
                }
                return savedTour;
            })

            localStorage.setItem('tour-list',JSON.stringify(updatedTourList))
            navigate('/')
        }

        const onClickDelete = () =>{

            const savedTourList = localStorage.getItem('tour-list') || '[]'

            const parsedTourList = JSON.parse(savedTourList);

            const removedTourList = parsedTourList.filter((savedTour) => savedTour.id !== tourId)

            localStorage.setItem('tour-list',JSON.stringify(removedTourList))
            navigate('/')
        }
        const onClickDeleteCompleted = () =>{

            const savedTourList = localStorage.getItem('tour-finish-list') || '[]'

            const parsedTourList = JSON.parse(savedTourList);

            const removedTourList = parsedTourList.filter((savedTour) => savedTour.id !== tourId)

            localStorage.setItem('tour-finish-list',JSON.stringify(removedTourList))
            navigate('/')
        }

        const homeButton = () =>{
            navigate('/')
        }


    return (
        <div className="home-page plan-page">
        <TourButton
        onClickButton={homeButton}
        size={'sm'} type={'black'} label={'뒤로가기'}/>
        <h2>
            여행계획<TourStatus type={isCompletedPlan ? 'notour' : 'tour'}/>
        </h2>
        <TourInput

            isReadOnly = {isCompletedPlan}
            onChangeTourState={onChangeTourState}
            editDate={editData}/>
            
            {isCompletedPlan ?(
            <div className="tour-delete-button">
            <TourButton
            label='여행한 나라 목록 삭제'
            onClickButton={onClickDeleteCompleted}
            color={'red'}
            />
        </div>
            ):(
                <div className="tododetail-buttons-wrapper">
                            <TourButton
                            onClickButton={onClickUpdate}
                            size={'lg'}
                            color={'blue'}
                            label={'수정하기'}
                            />
                            <br />
                            <TourButton
                            onClickButton={onClickDelete}
                            size={'lg'}
                            color={'red'}
                            label={'삭제하기'}
                                />
                            </div>
            )}
       </div>
    );
}

export default TourPlanPage;
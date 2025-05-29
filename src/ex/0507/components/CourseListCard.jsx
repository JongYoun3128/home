import CourseItem from "../../../components/CourseItem";

function CourseListCard() {
    return (
    <div>
        <div className="card">
            <div className="card_header">
                    강의목록
            </div>
            <div className="card_body">
                <div className="courses">
                    <CourseItem/>
                    <CourseItem/>
                    <CourseItem/>
                                        
                
                </div>
            </div>
        </div>
    </div>
    );
}

export default CourseListCard;
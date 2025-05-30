import { useState } from "react";
import CanvasList from './CanvasList'
import SearchBar from "./SearchBar";
import ViewToggle from "./ViewToggle";

function Home() {

    const [isGridView,setIsGridView] = useState(true)
    const [searchText,setSearchText] = useState('')
    const [dummyData,setDummyData] = useState([

    

    
        {
            id:1,
            title:'친환경 도시 농업 플랫폼',
            lastModified:'2023-06-15',
            category:'농업'
        },
        {
            id:2,
            title:'AI 기반 건강 관리 앱',
            lastModified:'2023-06-10',
            category:'헬스케어'
        },
        {
            id:3,
            title:'온디맨드 물류 서비스',
            lastModified:'2023-06-05',
            category:'물류'
        },
        {
            id:4,
            title:'VR 가상 여행 서비스',
            lastModified:'2023-06-01',
            category:'여행'
        },
    ])

    const filteredData = dummyData.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
    )

    const handleDeleteItem = id =>{
        setDummyData(dummyData.filter(item => item.id !== id))
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
            <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            />
            <ViewToggle
            isGridView={isGridView}
            setIsGridView={setIsGridView}
            />
            </div>
            <CanvasList
            searchText={searchText}
            isGridView={isGridView}
            filteredData={filteredData}
            onDeleteItem={handleDeleteItem}
            />
            
        </div>
    );
}

export default Home;
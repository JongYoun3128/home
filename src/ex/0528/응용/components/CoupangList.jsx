import CoupangItem from './CoupangItem'

function CoupangList({filteredData,searchText,isGridView,onDeleteItem}) {
    if(filteredData.length === 0){
            return(
                <div className="text-center py-10">
                <p className="text-xl text-gray-600">
                    {searchText ? '검색 결과가 없습니다.' : '목록이 없습니다.'}
                </p>
                </div>
            )
        }
    return(
            <div className={`grid gap-6 ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5' : 'lg:grid-cols-2 sm:grid=cols-1' }`}>
                    
                    {filteredData.map(item =>(
                        <CoupangItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        image={item.image}
                        star={item.star}
                        onDelete={e =>{
                        e.preventDefault();
                        onDeleteItem(item.id)
                        }}
                        />
                    ))}
                    </div>
        )
}

export default CoupangList;
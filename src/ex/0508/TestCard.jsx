import Test from "./test";

function TestCard() {
    const test01 = {
        title: '행동은 불안을 이긴다',
        description: '의지박약 만성적 미루기에서 벗어나는 특별한 솔류션',
        thumbnail: 'img/img_01.jpg',
        price:'18,000원'
    }
    const test02 = {
        title: '돈의 해방',
        description: '세계적 실천윤리학자 피터 싱어의 담대한 제언',
        thumbnail: 'img/img_02.jpg',
        price:'19,800원'
    }
    const test03 = {
        title: '호기심의 뇌과학',
        description: '50세부터 시작하는 두뇌 저속노화 솔루션',
        thumbnail: 'img/img_03.jpg',
        price:'15,210원'
    }
       
    
    return (
        <div className="card">
            <div className="card_header">도서목록</div>
            <div className="card_body">
                <div className="books">
                    <Test
                        title={test01.title}
                        description={test01.description}
                        thumbnail={test01.thumbnail}
                        price={test01.price}
                    />
                    <Test
                         title={test02.title}
                        description={test02.description}
                        thumbnail={test02.thumbnail}
                        price={test02.price}
                    />
                    <Test
                        title={test03.title}
                        description={test03.description}
                        thumbnail={test03.thumbnail}
                        price={test03.price}
                    />
                </div>
            </div>
        </div>
    );
}

export default TestCard
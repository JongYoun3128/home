import Item from './Item';


function NewArrivals() {


    const items = [
        {
            id:1,
            name: '밸롭 카본 볼트 런닝화 화이트',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '159,000원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/best_item_01.jpg',
            isbest: false,
            isNewArrivals: false,
            isnew: false
            
        }, {
            id:2,
            name: '밸롭 카본 볼트 런닝화 블랙',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '159,000원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/best_item_02.jpg',
            isbest: true,
            isNewArrivals: false,
            isnew: false
        }, {
            id:3,
            name: '밸롭 카본 볼트 옐로우',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '159,900원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/best_item_03.jpg',
            isbest: false,
            isNewArrivals: false,
            isnew: false
        }, {
            id:4,
            name: '밸롭 워킹화 티바트 4.0 화이트',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '99,000원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/best_item_04.jpg',
            isbest: false,
            isNewArrivals: false,
            isnew: false
        }, {
            id:5,
            name: '밸롭 워킹화 티바트 4.0 오프화이트',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: ' 99,000원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/best_item_05.jpg',
            isbest: false,
            isNewArrivals: true,
            isnew: false
        }, {
            id:6,
            name: '밸롭 워킹화 티바트 4.0',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '99,000원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/best_item_06.jpg',
            isbest: false,
            isNewArrivals: true,
            isnew: false
        }, {
            id:7,
            name: '밸롭 플랙스젤 스니커즈',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '119,000원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/new_collection_01.jpg',
            isbest: false,
            isNewArrivals: false,
            isnew: false
        }, {
            id:8,
            name: '밸롭 워킹화 티바트3.0',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '89,9000원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/new_collection_02.jpg',
            isbest: false,
            isNewArrivals: true,
            isnew: false
        }, {
            id:9,
            name: '밸롭 아쿠아슈즈 블럭1+1',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '39,900원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/new_collection_03.jpg',
            isbest: false,
            isNewArrivals: true,
            isnew: false
        }, {
            id:10,
            name: '밸롭 인젝션 아쿠아슈즈 레터링 1+1',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '39,900원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/new_collection_04.jpg',
            isbest: false,
            isNewArrivals: true,
            isnew: false
        }, {
            id:11,
            name: '밸롭 컨비니언트 샌들',
            company: '밸롭 스포츠',
            star: '[김선호 착용]',
            price: '29,000원',
            url: 'https://m.ballop.co.kr/skin-skin132/product/detail.html?product_no=4447',
            img: './img/new_collection_05.jpg',
            isbest: false,
            isNewArrivals: false,
            isnew: false
        }
 
    ]

        const NewArrivals = items.filter(item => item.isNewArrivals)
                       
    
    
    return (
        <div className="new_arrivals">
            <div className="wrap w-5xl">
                <h2 className="title">New Arrivals</h2>
                <ul className="menu_box">   
                    <li>전체</li>
                    <li>스포츠</li>
                    <li>아쿠아</li>
                    <li>캐주얼</li>
                </ul>
                <ul className="new_arrivals_list">               
                    <li>
                        <Item title = '' items={NewArrivals}/> 
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default NewArrivals;
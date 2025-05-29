import CoupangCard from "./CoupangCard";

function Frontend() {
    return (
        <div className="border-4 border-black">
            <div className="grid grid-cols-2">
            <CoupangCard title={'마이쿠팡'}/>
            <CoupangCard title={'장바구니'}/>
            </div>

            <div className="grid grid-cols-5">
            <CoupangCard title={'쿠팡플레이'} isSubTitle/>
            <CoupangCard title={'로켓배송'}/>
            <CoupangCard title={'로켓프레시'}/>
            <CoupangCard title={'다시구매'}/>
            <CoupangCard title={'쿠팡비즈'}/>
            <CoupangCard title={'로켓직구'}/>
            <CoupangCard title={'골드박스'} isSubTitle/>
            <CoupangCard title={'상위개념'} isSubTitle/>
            <CoupangCard title={'이달의신상'} isSubTitle/>
            <CoupangCard title={'얼리어답터'} isSubTitle/>
            <CoupangCard title={'판매자특가'} isSubTitle/>
            <CoupangCard title={'와우회원할인'} isSubTitle/>
            <CoupangCard title={'이벤트/쿠폰'}/>
            <CoupangCard title={'반품마켓'} isSubTitle/>
            <CoupangCard title={'착한상점'} isSubTitle/>
            </div>
        </div>
    );
}

export default Frontend;
import CanvasCard from "./CanvasCard";

function Frontend() {
    return (
        <div className="border-4 border-black">
            <div className="grid grid-cols-5">
            <CanvasCard title={'1.문제'}/>
            <CanvasCard title={'4.해결안'}/>
            <CanvasCard title={'3가치/제안'}/>
            <CanvasCard title={'5.경쟁우위'}/>
            <CanvasCard title={'2.목표고객'}/>
            <CanvasCard title={'기존대안'} isSubTitle/>
            <CanvasCard title={'8.핵심지표'}/>
            <CanvasCard title={'상위개념'} isSubTitle/>
            <CanvasCard title={'9.고객경로'}/>
            <CanvasCard title={'얼리어답터'} isSubTitle/>
            </div>

            <div className="grid grid-cols-2">
            <CanvasCard title={'7.비용구조'}/>
            <CanvasCard title={'6.수익흐름'}/>
            </div>
        </div>
        
        
       
    );
}

export default Frontend;
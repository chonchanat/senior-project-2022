import { useNavigate } from 'react-router-dom'

function Card({ title, bgColor, link }) {

    const navigate = useNavigate();

    function goToLink() {
        if(link){
            navigate(link);
        }
    }
    return (
        <div className="w-[48%] h-[160px] rounded-xl mb-4 p-4" style={{ backgroundColor: bgColor }} onClick={goToLink}>
            <p className="text-center text-white text-lg font-bold">{title}</p>
        </div>
    );
}

function CardWithHead({ title, bgColor="#F8F8F8", children }) {
    return (
        <div className="w-full rounded-xl mb-4 overflow-hidden" style={{ backgroundColor: bgColor }}>
            <p className="text-center bg-fha py-1 text-white text-sm">{title}</p>
            <div className="h-auto p-4 flex flex-col items-center">
                {children}
            </div>
        </div>
    );
}

export { Card, CardWithHead };
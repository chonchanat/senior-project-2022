import { useNavigate } from 'react-router-dom'

function Card({ title, bgColor, link, icon }) {

    const navigate = useNavigate();

    function goToLink() {
        if (link) {
            navigate(link);
        }
    }

    return (
        <div className="w-[48%] h-[120px] rounded-xl mb-4 pb-1 py-3 shadow-lg flex flex-col items-center justify-between" style={{ backgroundColor: bgColor }}
            onClick={goToLink}>
            <div className={`bg-white w-fit rounded-xl text-[${bgColor}]`}>
                {icon}
            </div>
            <p className="text-white font-bold">{title}</p>
        </div>
    );
}

function CardWithHead({ title, bgColor = "white", children }) {
    return (
        <div className="w-full rounded-xl mb-4 overflow-hidden shadow-lg" style={{ backgroundColor: bgColor }}>
            <p className="text-center bg-fha-desktop py-1 text-white text-sm">{title}</p>
            <div className="h-auto p-4 flex flex-col items-center">
                {children}
            </div>
        </div>
    );
}

export { Card, CardWithHead };
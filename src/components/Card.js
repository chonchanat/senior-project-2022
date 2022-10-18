function Card({ bgColor, children }) {
    return (
        <div className="w-[48%] h-[160px] rounded-xl mb-4" style={{ backgroundColor: bgColor }}>
            {children}
        </div>
    );
}

function CardWithHead({ bgColor }) {
    return (
        <div className="w-full h-[180px] rounded-xl mb-4 overflow-hidden" style={{ backgroundColor: bgColor }}>
            <p className="text-center bg-fha py-1 text-white">คิวที่กำลังจะถึง</p>
        </div>
    );
}

export { Card, CardWithHead };
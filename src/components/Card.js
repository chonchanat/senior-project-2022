function Card({ title, bgColor }) {
    return (
        <div className="w-[48%] h-[160px] rounded-xl mb-4 p-4" style={{ backgroundColor: bgColor }}>
            <p className="text-center text-white text-lg font-bold">{title}</p>
        </div>
    );
}

function CardWithHead({ title, bgColor, children }) {
    return (
        <div className="w-full rounded-xl mb-4 overflow-hidden" style={{ backgroundColor: bgColor }}>
            <p className="text-center bg-fha py-1 text-white">{title}</p>
            <div className="h-auto p-4">
                {children}
            </div>
        </div>
    );
}

export { Card, CardWithHead };
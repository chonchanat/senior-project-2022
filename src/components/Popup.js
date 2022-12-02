function Popup({ children, state }) {
    return (
        <div className={`relative overflow-hidden ${state ? "visible" : "invisible"}`}>
            {children}
        </div>
    );
}

function PopupCard({ children }) {
    return (
        <div className="w-[480px] bg-white rounded-lg shadow-xl fixed z-50 left-[50%] top-[35%] translate-x-[-50%] translate-y-[-50%]">
            {children}
        </div>
    );
}

function PopupHeader({ children }) {
    return (
        <div className="bg-fha py-3">
            <p className="text-center font-bold text-white text-lg">{children}</p>
        </div>
    );
}

function PopupBody({ children }) {
    return (
        <div className="px-10 py-8">
            {children}
        </div>
    );
}

function PopupAction({children}) {
    return (
        <div className="pb-6 flex justify-center">
            {children}
        </div>
    );
}

export { Popup, PopupCard, PopupHeader, PopupBody, PopupAction };
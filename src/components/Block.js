export default function Block({children}) {
    return (
        <div className="mt-[50px] px-6 py-4">
            <div className="max-w-sm mx-auto">
                {children}
            </div>
        </div>
    );
}
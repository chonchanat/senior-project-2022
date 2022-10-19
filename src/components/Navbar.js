import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <div className="h-[50px] w-full bg-fha fixed top-0 flex items-center px-4">
                <p className="text-lg sm:text-2xl font-bold text-white" onClick={() => navigate("/customer-home")}>Camel Republic</p>
            </div>
        </>
    );
}

export { Navbar };
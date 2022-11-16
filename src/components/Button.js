import { useNavigate } from 'react-router-dom';

function Button({ title, bgColor, w="w-full", f, link }) {
    
    const navigate = useNavigate();

    function goToLink() {
        if (link){
            navigate("/customer-home")
        }
    }

    return (
        <div>
            <button className={`${bgColor} ${w} ${f} py-2 px-4 rounded-md text-white text-sm drop-shadow-md`}
                onClick={() => goToLink()}>
                {title}
            </button>
        </div>
    );
}

export { Button };
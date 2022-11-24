import { useNavigate } from 'react-router-dom';

function Button({ title, bgColor, textColor="text-white", width="w-full", font, link }) {
    
    const navigate = useNavigate();

    function goToLink() {
        if (link){
            navigate("/customer-home")
        }
    }

    return (
        <div>
            <button className={`${bgColor} ${width} ${font} ${textColor} py-2 px-4 rounded-md text-sm drop-shadow-md`}
                onClick={() => goToLink()}>
                {title}
            </button>
        </div>
    );
}

function ButtonSubmit({ title, bgColor, textColor="text-white", width="w-full", font, link }) {
    return (
        <input type="submit" className={`${bgColor} ${width} ${font} ${textColor} py-2 px-4 rounded-md text-sm drop-shadow-md`}>
        </input>
    );
}

export { Button, ButtonSubmit };
function Button({ title, bgColor, w="w-full", f }) {
    return (
        <div>
            <button className={`${bgColor} ${w} ${f} py-2 px-4 rounded-md text-white text-sm drop-shadow-md`}
                onClick={() => console.log("Clicked!")}>
                {title}
            </button>
        </div>
    );
}

export { Button };
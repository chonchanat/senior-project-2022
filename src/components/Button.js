function Button({ text, user }) {
    return (
        <div>
            <button className="bg-accept w-full py-2 px-4 rounded-md text-white font-bold text-sm drop-shadow-md"
                onClick={() => console.log(user)} >{text}</button>
        </div>
    );
}

export { Button };
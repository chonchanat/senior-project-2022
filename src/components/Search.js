function SearchWithIcon() {
    return (
        <div className="h-[40px] bg-[#E9E9E9] rounded-[20px] flex items-center pl-4 pr-2">
            <input type="text" className="bg-transparent w-full"></input>
            {/* <img src="https://img.icons8.com/ios-filled/16/000000/search--v1.png" alt="search icon" className="w-[36px] h-[36px] bg-fha p-2 rounded-[50%]"/> */}
            <img src="https://img.icons8.com/ios-filled/16/000000/search--v1.png" alt="search icon"/>
        </div>
    );
}

export { SearchWithIcon };
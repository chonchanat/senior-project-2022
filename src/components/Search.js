import { useState } from "react";

function SearchWithIcon({ setSearch }) {

    const [state, setState] = useState(false);

    return (
        <div className="h-[40px] bg-white rounded-[20px] shadow-lg flex items-center pl-4 pr-2 mb-2">
            <input type="text" className="bg-transparent w-full outline-0"
            onChange={(e) => setSearch(e.target.value)}></input>
            <img src="https://img.icons8.com/ios-filled/16/000000/search--v1.png" alt="search icon" className="bg-fha-desktop p-2 rounded-[50%]" onClick={() => setState(!state)}/>
        </div>
    );
}

export { SearchWithIcon };
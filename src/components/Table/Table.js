function TableHead({ children }) {
    return (
        <p className="text-sm text-center text-[#7d7d7d] w-[20%]">
            {children}
        </p>
    );
}

function TableBody({ children }) {
    return (
        <p className="flex justify-center w-[20%] last:invisible group-hover:visible">
            {children}
        </p>
    );
}

function TableRow({ children, condition }) {
    return (
        <div className={`flex justify-around items-center py-4 border-b-2 border-[#E0E0E0] ${condition === "head" ? "" : "hover:bg-[#F4F4F4]"} group`}>
            {children}
        </div>
    );
}

export { TableHead, TableBody, TableRow };
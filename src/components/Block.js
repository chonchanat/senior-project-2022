function BlockMobile({ children }) {
    return (
        <div className="mt-[50px] px-6 py-4">
            <div className="max-w-sm mx-auto">
                {children}
            </div>
        </div>
    );
}

function ContentDesktop({ children }) {
    return (
        <div className="bg-bg-desktop w-full min-h-screen pt-[50px]">
            {children}
        </div>
    );
}

function BlockDesktop({ children}) {
    return (
        <div className="w-fit pt-4">
            {children}
        </div>
    );
}

export { BlockMobile, ContentDesktop, BlockDesktop };
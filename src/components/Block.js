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
        <div className="bg-bg-desktop w-full flex min-h-screen pt-[50px]">
            {children}
        </div>
    );
}

function BlockDesktopLeft({ children}) {
    return (
        <div className="py-4 flex">
            {children}
        </div>
    );
}

function BlockDesktopRight({ children }) {
    return (
        <div className="py-4 w-full">
            {children}
        </div>
    );
}

export { BlockMobile, ContentDesktop, BlockDesktopLeft, BlockDesktopRight };
function Wrapper({ state, click }) {
    return (
        <div className={`fixed top-0 left-0 right-0 bottom-0 ${state ? "block" : "hidden"}`}
            onClick={click}>
        </div>
    );
}

export default Wrapper;
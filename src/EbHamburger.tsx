import "./EbHamburger.scss";

const EbHamburger = (): JSX.Element => {
    const isOpen = false;
    const renderIcon = () => {
        if (!isOpen) {
            return (
                <>
                    <span className="btn-line"></span>
                    <span className="btn-line"></span>
                    <span className="btn-line"></span>
                </>
            );
        }
    };
    return (
        <div className={isOpen ? "hamburger hide-for-desktop" : "hamburger close hide-for-desktop"}>
            {renderIcon()}
        </div>
    );
};

export default EbHamburger;

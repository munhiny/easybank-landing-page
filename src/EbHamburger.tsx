import "./EbHamburger.scss";
import {useState} from "react";

const EbHamburger = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            onClick={onClickHandler}
            className={!isOpen ? "hamburger hide-for-desktop" : "hamburger close hide-for-desktop"}
        >
            <span className="btn-line"></span>
            <span className="btn-line"></span>
            <span className="btn-line"></span>
        </div>
    );
};

export default EbHamburger;

import {useState} from "react";
import "./EbHeader.scss";

const EbHeader = (): JSX.Element => {
    const links = ["Home", "About", "Contact", "Blog", "Careers"];
    const [showModal, setShowModal] = useState(false);
    const onClickHandler = () => {
        setShowModal(!showModal);
    };

    const displayFade = () => {
        const body = document.querySelector("body");
        const fadeIn = document.querySelector(".overlay")?.classList.contains("fade-in");
        if (showModal && !fadeIn) {
            body?.classList.add("no-scroll");
            return ` fade-in`;
        } else if (!showModal && fadeIn) {
            body?.classList.remove("no-scroll");
            return ` fade-out`;
        }
        return "";
    };

    return (
        <header className={`header ${showModal ? " open" : ""}`}>
            <div className={`overlay ${displayFade()}`}></div>
            <nav className="container flex flex-jc-sb flex-ai-ac">
                <a href="/" className="header__logo">
                    <img src="../images/logo.svg"></img>
                </a>
                <div onClick={onClickHandler} className={"header__toggle hide-for-desktop"}>
                    <span className="btn-line"></span>
                    <span className="btn-line"></span>
                    <span className="btn-line"></span>
                </div>
                <div className="header__links hide-for-mobile">
                    {links.map((link, index) => (
                        <a key={index} href="/">
                            {link}
                        </a>
                    ))}
                </div>
                <a href="/" className="button header__cta hide-for-mobile">
                    Request Invite
                </a>
            </nav>
            <div
                className={`header__menu container ${
                    !showModal ? " has-fade" : ""
                } hide-for-desktop ${displayFade()}`}
            >
                {links.map((link, index) => (
                    <a key={index} href="/">
                        {link}
                    </a>
                ))}
            </div>
        </header>
    );
};

export default EbHeader;

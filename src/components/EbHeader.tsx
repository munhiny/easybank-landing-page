import {useState, useEffect} from "react";

import "./EbHeader.scss";

const EbHeader = (): JSX.Element => {
    const links = ["Home", "About", "Contact", "Blog", "Careers"];
    const [showModal, setShowModal] = useState(false);
    const onClickHandler = () => {
        const overlay = document.querySelector(".overlay");

        setShowModal(!showModal);
    };

    useEffect(() => {
        const overLay = document.querySelector(".overlay");
        const menu = document.querySelector(".header__menu");
        const body = document.querySelector("body");
        const fadeIn = overLay?.classList.contains("fade-in");
        if (showModal && !fadeIn) {
            overLay?.classList.remove("fade-out");
            overLay?.classList.add("fade-in");
            menu?.classList.add("fade-in");
            body?.classList.add("no-scroll");
        } else if (!showModal && fadeIn) {
            overLay?.classList.remove("fade-in");
            overLay?.classList.add("fade-out");
            menu?.classList.add("fade-out");
            body?.classList.remove("no-scroll");
        }
        return;
    }, [showModal]);

    return (
        <header className={"header" + (showModal ? " open" : "")}>
            <div className="overlay"></div>
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
                className={
                    "header__menu container" + (!showModal ? " has-fade" : "") + " hide-for-desktop"
                }
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

import {useState} from "react";
import EbHamburger from "./EbHamburger";
import EbCta from "./EbCta";
import EbModal from "./EbModal";

import "./EbHeader.scss";

const EbHeader = (): JSX.Element => {
    const [showModal, setShowModal] = useState(false);
    const onClickHandler = () => {
        return setShowModal(!showModal);
    };

    const renderModal = () => {
        return (
            <>
                <EbModal />
            </>
        );
    };

    return (
        <header className="header">
            <nav className="flex flex-jc-sb flex-ai-ac">
                <a href="/" className="header__logo">
                    <img src="../images/logo.svg"></img>
                </a>
                <div onClick={onClickHandler}>
                    <EbHamburger showModal={showModal} />
                </div>
                <EbCta />
                <a href="/" className="button header__cta hide-for-mobile">
                    Request Invite
                </a>
                {showModal && renderModal()}
            </nav>
        </header>
    );
};

export default EbHeader;

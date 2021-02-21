import EbHamburger from "./EbHamburger";
import EbCta from "./EbCta";
import "./EbHeader.scss";

const EbHeader = (): JSX.Element => {
    return (
        <header className="header ">
            <nav className="flex flex-jc-sb flex-ai-ac">
                <a href="/" className="header__logo">
                    <img src="../images/logo.svg"></img>
                </a>
                <EbHamburger />
                <EbCta />
                <a href="/" className="button header__cta hide-for-mobile">
                    Request Invite
                </a>
            </nav>
        </header>
    );
};

export default EbHeader;

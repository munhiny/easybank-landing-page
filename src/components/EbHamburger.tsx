import "./EbHamburger.scss";

type Props = {
    showModal?: boolean;
};

const EbHamburger = ({showModal = false}: Props): JSX.Element => {
    return (
        <div
            className={
                !showModal ? "hamburger hide-for-desktop" : "hamburger close hide-for-desktop"
            }
        >
            <span className="btn-line"></span>
            <span className="btn-line"></span>
            <span className="btn-line"></span>
        </div>
    );
};

export default EbHamburger;

import {spawn} from "child_process";
import "./EbModal.scss";

const EbModal = (): JSX.Element => {
    const links = ["Home", "About", "Contact", "Blog", "Careers"];

    return (
        <div className="modal flex flex-jc-se flex-ai-ac">
            {links.map((link, index) => (
                <a href="/" key={index}>
                    {link}
                </a>
            ))}
        </div>
    );
};

export default EbModal;

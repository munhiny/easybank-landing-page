import "./EbCta.scss";

const EbCta = (): JSX.Element => {
    const links = ["Home", "About", "Contact", "Blog", "Careers"];

    return (
        <div className="links hide-for-mobile">
            {links.map((link, index) => (
                <a key={index} href="/">
                    {link}
                </a>
            ))}
        </div>
    );
};

export default EbCta;

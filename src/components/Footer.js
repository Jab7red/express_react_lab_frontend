const Footer = (props) => {
    return (
        <footer>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"></link>
            <div className="footerName">
            <h5>Jared Bradley <span>&copy;</span></h5>
            </div>
            <div className="footerGithub">
            <h3><a href="https://github.com"><i class="fab fa-github"></i></a></h3>
            </div>
            <div className="footerLinkedIn">
                <h3><a href="https://www.linkedin.com/in/jaredbradley95/"><i class="fab fa-linkedin"></i></a></h3>
            </div>
        </footer>
    )
};

export default Footer;
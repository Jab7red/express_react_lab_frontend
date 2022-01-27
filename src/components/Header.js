import { Link } from "react-router-dom";

const Header = (props) => {

    const h4Style = {
        color: "#787878"
    }

    return (
        <header>
            <h1>Hi,<br /> I'm Jared,<br />Software Engineer</h1>
            <h4 style={h4Style}>Full Stack Developer</h4>
            <nav>
                <Link to="/">
                    <div>HOME</div>
                </Link>
                <Link to="/about">
                    <div>ABOUT</div>
                </Link>
                <Link to="/projects">
                    <div>PROJECTS</div>
                </Link>
            </nav>
        </header>
    )
};

export default Header;
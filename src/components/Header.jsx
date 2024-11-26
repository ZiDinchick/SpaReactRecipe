import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="teal darken-1">
            <div className="nav-wrapper">
                <Link
                    to="/"
                    className="brand-logo"
                    style={{
                        fontFamily: "Protest Revolution",
                        fontSize: "3rem",
                    }}
                >
                    Recipes
                </Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/contact">contact</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };

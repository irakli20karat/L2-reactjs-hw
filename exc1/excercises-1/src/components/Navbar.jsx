import { useState } from "react"

function NavLink({ title, isActive, onClick }) {
    return (
        <li className={isActive ? "active-link" : ""} onClick={onClick}>
            <a href="#">{title}</a>
        </li>
    )
}

export default function Navbar() {
    const NAVLINKS = ["Home", "Menu", "About", "Contact"];
    const [activeLink, setActiveLink] = useState(null);

    return (
        <nav className="navbar">
            <div className="logo">☕ Sunny Side</div>

            <ul className="nav-links">
                {NAVLINKS.map((title) => (
                    <NavLink
                        key={`${title}_Key`}
                        title={title}
                        isActive={activeLink === title}
                        onClick={() => setActiveLink(title)}
                    />
                ))}
            </ul>
        </nav>
    )
}
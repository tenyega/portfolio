import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/skills"> Mes compétences</NavLink>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
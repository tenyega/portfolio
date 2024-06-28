import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex w-full p-4 m-10 bg-gray-800">
        <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl text-white "><img src="./logo.png" width={50} height={50} className="rounded-full"/></div>
            <ul className="flex space-x-4">
                <li>
                    <NavLink to="/skills" className="text-gray-300 hover:text-white"> Mes compétences</NavLink>
                </li>
                <li>
                    <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                </li>
                
            </ul>
        </div>
        </nav>
    );
}
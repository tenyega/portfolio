import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex w-full p-4 m-10 bg-gray-800">
        <div className="container flex items-center justify-between mx-auto">
        <div className="text-xl text-white "><img src="../assets/logo.png" width={50} height={50} className="rounded-full"/></div>
                <ul className="flex space-x-4">
                <li>
                    <NavLink to="/diplome" className="text-gray-300 hover:text-white"> Diplomes</NavLink>
                </li>
                <li>
                    <NavLink to="/work" className="text-gray-300 hover:text-white">Work</NavLink>
                </li>
                <li>
                    <NavLink to="/skills" className="text-gray-300 hover:text-white"> Skill Sets</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="text-gray-300 hover:text-white">Contact</NavLink>
                </li>
                
            </ul>
        </div>
        </nav>
    );
}
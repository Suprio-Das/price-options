import { useState } from "react";
import Link from "../Link/Link";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { name: 'Home', id: 1, path: '/' },
        { name: 'About', id: 2, path: '/about' },
        { name: 'Contact', id: 3, path: '/contact' },
        { name: 'User Profile', id: 4, path: '/user/:id' },
        { name: 'Not Found', id: 5, path: '*' },
    ];
    return (
        <nav className="bg-amber-500 p-3 lg:flex flex-row justify-center items-center relative">
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <MdOutlineRestaurantMenu></MdOutlineRestaurantMenu> : <ImSpoonKnife></ImSpoonKnife>
                }
            </div>
            <ul className={`lg:flex ${open ? 'block' : 'hidden'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;
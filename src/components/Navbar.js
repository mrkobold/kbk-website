import {NavLink, useLocation} from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const {pathname} = location;
    return(
        <div className="menu">
            <NavLink className={pathname==="/" ? "active-menu-button" : "passive-menu-button"} to="/">Home</NavLink>
            <NavLink className={pathname==="/portfolio" ? "active-menu-button" : "passive-menu-button"} to="/portfolio">Portfolio</NavLink>
            <NavLink className={pathname==="/contact" ? "active-menu-button" : "passive-menu-button"} to="/contact">Contact</NavLink>
        </div>
    );
}

export default Navbar;
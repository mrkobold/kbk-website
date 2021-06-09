import '../css/Header.css'

import Navbar from './Navbar'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <div className="logo-kbk">KBK</div>
                <div className="logo-softare-solutions">software solutions</div>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
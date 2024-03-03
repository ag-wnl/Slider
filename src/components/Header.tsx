import { Text } from "@geist-ui/core";
import '../components/components.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Menu, X } from '@geist-ui/icons'


function Header() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return(
        <>
            <div className="header">
                <div>
                    <Link to="/" style={{color:"black"}}>
                        <Text h1 font="32px" style={{cursor:"pointer"}}><span style={{color:'#ff0080'}}>^\</span> Slider</Text>
                    </Link>  
                </div>

                <div className="mobile-menu-icon">
                    <button 
                    style={{border:"none", textDecoration:"none", background:"none  "}}
                    onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
                </div>

                <div className="header-right-section">
                    <div>
                        <Link to="/about" style={{color:"grey"}}>
                            <Text font="18px" b className="header-clickable-option">About</Text>
                        </Link>
                    </div>
                </div>
                
            </div>
            {isMenuOpen && (
                        <div className="mobile-navbar-dropdown">
                            <div>
                            <Link to="/about">
                                <Text h4 b type="success">About</Text>
                            </Link>
                            </div>
                            <div>
                                <Text h4 b type="success">Resume Scanner <sup style={{color:"red"}}>soon</sup></Text>
                            </div>
                        </div>
                    )}
        </>
    )
}

export default Header;
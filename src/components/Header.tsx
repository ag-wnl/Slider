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
                <div    >
                    <Link to="/" style={{color:"black"}}>
                        <Text h1 style={{cursor:"pointer"}}><span style={{color:'#ff0080'}}>^\</span> Slider</Text>
                    </Link>  
                </div>

                <div className="mobile-menu-icon">
                    <button 
                    style={{border:"none", textDecoration:"none", background:"none  "}}
                    onClick={toggleMenu}>{isMenuOpen ? <X /> : <Menu />}</button>
                </div>

                <div className="header-right-section">
                    <Text font="18px" b className="header-clickable-option">About</Text>
                    <Text font="18px" b className="header-clickable-option">Resume Scanner</Text>
                </div>
                
            </div>
            {isMenuOpen && (
                        <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center", justifyItems:"center", zIndex:"10"}}>
                            <div>About</div>
                            <div>Resume Scanner</div>
                        </div>
                    )}
        </>
    )
}

export default Header;
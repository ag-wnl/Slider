import { Text } from "@geist-ui/core";
import '../components/components.css'
import { Link, useNavigate } from 'react-router-dom';


function Header() {
    return(
        <>
            <div className="header">
                <div    >
                    <Link to="/" style={{color:"black"}}>
                        <Text h1 style={{cursor:"pointer"}}><span style={{color:'#ff0080'}}>^\</span> Slider</Text>
                    </Link>  
                </div>
                <div style={{display:"flex", flexDirection:"row", gap:"40px"}}>
                    <Text font="18px" b className="header-clickable-option">About</Text>
                    <Text font="18px" b className="header-clickable-option">Resume Scanner</Text>
                </div>
            </div>
        </>
    )
}

export default Header;
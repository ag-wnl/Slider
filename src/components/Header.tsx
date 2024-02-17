import { Text } from "@geist-ui/core";
import '../components/components.css'


function Header() {
    return(
        <>
            <div className="header">
                <div><Text h1 style={{cursor:"pointer"}}><span style={{color:'#ff0080'}}>^\</span> Slider</Text></div>
                <div style={{display:"flex", flexDirection:"row", gap:"40px"}}>
                    <Text font="18px" b style={{color:'#333', cursor:"pointer"}}>About</Text>
                    <Text font="18px" b style={{color:'#333', cursor:"pointer"}}>Resume Scanner</Text>
                </div>
            </div>
        </>
    )
}

export default Header;
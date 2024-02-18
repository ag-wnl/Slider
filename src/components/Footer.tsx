import { Text } from '@geist-ui/core';
import '../components/components.css'



function Footer() {
    return(
        <>
            <div className='footer'>
                <div>
                    <Text h3><span style={{color:'#8a63d2'}}>^\</span> Slider</Text><Text font="12px" type="secondary">© 2024 Slider. All rights reserved.
                    </Text>
                </div>
            </div>
        </>
    );
}

export default Footer;
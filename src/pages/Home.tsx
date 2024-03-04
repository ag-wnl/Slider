import { Text} from '@geist-ui/core'
import '../pages/pages.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import desktopBanner from '../imgs/desktop-banner.png'
import mobileBanner from '../imgs/mobile-banner.png'
import companyBanner from '../imgs/company-banner.png'
import iphonePreview from '../imgs/iphone-display2.png'
import { Link } from 'react-router-dom';
// mockup graphics : https://appetize.io/demo?device=iphone14pro&osVersion=17.2&record=true



function Home() {
    
    const[isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <div>
                <div className='centered-page-parent-box'>
                    <Header />

                    <div className='banner-parent'>
                        <div style={{position:'relative'}} >
                            <img src={isMobile ? mobileBanner : desktopBanner} alt='Desktop-banner' />
                            {!isMobile && 
                            <Link to="/explore" style={{color:"grey"}}>
                                <button 
                                style={{position:'absolute', top:'70%', left:'10%', zIndex:'2'}}
                                className='blue-button'>Get Started</button>
                            </Link>
                            }
                        </div>

                        {isMobile && 
                            <Link to="/explore" style={{color:"grey"}}>
                                <button className='blue-button'>Get Started</button>
                            </Link>
                            
                        }
                    </div>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'80px'}}>
                        <span className='banner-text-heading'>Discover openings at big tech companies</span>
                        <img src={companyBanner} height={'auto'} alt = 'companies' />
                    </div>

                    <div className='banner-below-main-parent'>
                        <div style={{display:'flex', flexDirection:'column', gap:'30px'}}>
                            <Text h2>Focus on what the candidate <span style={{color:'#0070f3'}}>needs</span></Text>
                            
                            <div>
                                <Text p b type='secondary'>We try to cut out the noise and make applying for jobs less overwhelming. We have been on your
                                    side of the spectrum and know exactly how tiring finding openings and applying can be.
                                </Text>

                                <Text p b type='secondary'>
                                    To let you have more time preparing for the role, we try to make it as easy as possible.
                                </Text>
                            </div>             
                        </div>

                        <div>
                            <img width={'800px'} src={iphonePreview} alt='Phone-Preview' />
                        </div>
                    </div>
                            
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;

import { Text } from "@geist-ui/core"
import Header from "../components/Header"
import Footer from "../components/Footer"
import iphone1 from '../imgs/iphone-display.png'

function About () {
    return(
        <>
            <div>
                <div className='centered-page-parent-box'>
                    <Header />

                    <div>
                        <Text h2 type="success">About</Text>
                        
                        <div style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                            <div>
                                <Text p b type="secondary">
                                    Slider is dedicated to simplifying the internship search process for students. We ensure they can effortlessly discover internship opportunities at top tech companies within minutes. With firsthand experience in navigating the overwhelming nature of applying for numerous internships, we've identified all the associated challenges. Therefore, our primary focus is to streamline the search and application process, making it as efficient as possible for aspiring interns.
                                </Text>
                                <Text p b type="secondary">
                                    Our mission is to create a seamless experience for both applicants and recruiters. We're committed to expanding our platform to provide a user-friendly experience, and we deeply value your support on this journey. Thank you for showing interest in our platform; together, we're transforming the internship search landscape.
                                </Text>

                                <Text p b>
                                    Cheers from the <span style={{color:'#ff0080'}}>^\</span>Slider Team!
                                </Text> 
                            </div>

                            <div className="about-image-mockups">
                                <img src={iphone1} width={'1000px'} alt='Phone Preview' />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}


export default About
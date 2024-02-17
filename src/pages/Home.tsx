import { Text, Pagination, Card, Button } from '@geist-ui/core'
import '../pages/pages.css'
import Footer from '../components/Footer';

// API endpoints:
// levels.fyi : https://www.levels.fyi/_next/data/durNS2QKC9YoAnXLOOr3N/jobs/location/india.json


function Home() {
    return(
        <>
            <div>
                <div className='centered-page-parent-box'>
                    <Text h1><span style={{color:'#ff0080'}}>^\</span> Slider</Text>
                    
                    <Text h4 type="secondary">Your internship search condensed to a single page</Text>

                    <Text h3 type='success'>Recent Openings</Text>

                    <div className='centered-table'>
                        
                        <div className='openings-table-parent-box'>
                            <div className='openings-table-row'>
                                <div className='table-row-left'>
                                    <img width="30px" src="https://logo.clearbit.com/meta.com" />
                                    <Text font="20px" b type='success'>Software Engineering Intern</Text>
                                </div>
                                <Button type="success" placeholder='apply'>Apply</Button>
                            </div>

                            <div className='openings-table-row'>
                                <div className='table-row-left'>
                                    <img width="30px" src="https://logo.clearbit.com/meta.com" />
                                    <Text font="20px" b type='success'>Software Engineering Intern</Text>
                                </div>
                                <Button type="success" placeholder='apply'>Apply</Button>
                            </div>

                            <div className='openings-table-row'>
                                <div className='table-row-left'>
                                    <img width="30px" src="https://logo.clearbit.com/meta.com" />
                                    <Text font="20px" b type='success'>Software Engineering Intern</Text>
                                </div>
                                <Button type="success" placeholder='apply'>Apply</Button>
                            </div>

                            <div className='openings-table-row'>
                                <div className='table-row-left'>
                                    <img width="30px" src="https://logo.clearbit.com/meta.com" />
                                    <Text font="20px" b type='success'>Software Engineering Intern</Text>
                                </div>
                                <Button type="success" placeholder='apply'>Apply</Button>
                            </div>
                        </div>
                    
                        <Pagination count={20} initialPage={1} style={{marginTop:"20px"}} />        
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Home;
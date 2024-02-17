import { Text, Pagination, Card, Button, Loading, Grid } from '@geist-ui/core'
import '../pages/pages.css'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useEffect, useState } from 'react';

// API endpoints:
// levels.fyi : https://www.levels.fyi/_next/data/durNS2QKC9YoAnXLOOr3N/jobs/location/india.json

type JobDataType = {
    listings: string[];
};

function Home() {
    const [jobListings, setJobListings] = useState<string[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/api")
            .then((res) => res.json())
            .then((data: JobDataType) => {
                setJobListings(data.listings);
            })
            .catch((error) => {
                console.error('Error fetching job listings:', error);
            });
    }, []);

    return (
        <>
            <div>
                <div className='centered-page-parent-box'>
                    <Header />

                    <Text b type="secondary">Your internship search condensed to a single page</Text>

                    <Text h3 type='success'>Recent Openings</Text>

                    <div className='centered-table'>
                        
                        <div className='openings-table-parent-box'>
                            {jobListings.length === 0 ? (
                                <Grid.Container gap={2.5}>
                                <Grid xs={24}>
                                  <Loading type="success" />
                                </Grid>
                                <Grid xs={24}>
                                  <Loading type="secondary" />
                                </Grid>
                                <Grid xs={24}>
                                  <Loading type="warning" />
                                </Grid>
                                 <Grid xs={24}>
                                  <Loading type="error" />
                                </Grid>
                              </Grid.Container>
                            ) : (
                                jobListings.map((job, index) => (
                                    <div className='openings-table-row' key={index}>
                                        <div className='table-row-left'>
                                            <img width="30px" src={`https://logo.clearbit.com/${job}.com`} alt={`${job} Logo`} />
                                            <Text font="20px" b type='success'>{job}</Text>
                                        </div>
                                        <Button type="success" placeholder='apply'>Apply</Button>
                                    </div>
                                ))
                            )}
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


{/* <div className='openings-table-row'>
                                <div className='table-row-left'>
                                    <img width="30px" src="https://logo.clearbit.com/meta.com" />
                                    <Text font="20px" b type='success'>Software Engineering Intern</Text>
                                </div>
                                <Button type="success" placeholder='apply'>Apply</Button>
                            </div> */}
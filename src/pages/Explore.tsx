import { Button, Drawer, Grid, Loading, Pagination, Select, Text, Toggle } from "@geist-ui/core"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useEffect, useLayoutEffect, useState } from "react";
import { Search } from "@geist-ui/icons";



type JobDataType = {
    position: string;
    company: string;
    companyLogo?: string;
    location?: string;
    date?: string;
    agoTime?: string;
    salary?: string;
    jobUrl: string;
    internship?: boolean
};

function Explore()  {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const [jobListings, setJobListings] = useState<JobDataType[]>([]);
    const [searchJobListings, setSearchJobListings] = useState<JobDataType[]>([]);
    // const [internListings, setInternListings] = useState<JobDataType[]>([]);
    const [drawerState, setDrawerState] = useState(false);
    const [jobType, setJobType] = useState('internship');
    const [remoteOnly, setRemoteOnly] = useState(false);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState(1);
    const [dataLoading, setDataLoading] = useState(false);
    const [onlyBigTech, setOnlyBigTech] = useState(true);

    useEffect(() => {
        setDataLoading(true);
        
        let remoteUrl : string = "https://api-slider-jobs.onrender.com/api/remote";
        let bigTechUrl : string = "https://api-slider-jobs.onrender.com/api/bigtech";
        // let bigTechUrl : string = "http://localhost:5000/api/bigtech/";
        // let remoteUrl : string = "http://localhost:5000/api/remote/";
        // Currently remote represents remote jobs and YC backed startups (prominant startups or big tech remote)
        
        if(onlyBigTech && !remoteOnly) {
            fetch(bigTechUrl)
            .then((res => res.json()))
            .then((data : JobDataType[]) => {
                
                const internships = data.filter(job => job.internship)
                if(jobType === 'internship') {
                    setJobListings(internships)
                } else {
                    setJobListings(data);
                }
                setDataLoading(false);
            }).catch((err) => {
                console.log('Error in fetching from big tech jobs endpoint : ', err);
                setDataLoading(false);
            });
        }
        else if(remoteOnly && !onlyBigTech) {
            fetch(remoteUrl)
            .then((res => res.json()))
            .then((data : JobDataType[]) => {

                const internships = data.filter(job => job.internship)
                if(jobType === 'internship') {
                    setJobListings(internships)
                } else {
                    setJobListings(data);
                }
    
                setDataLoading(false);
            
            }).catch(err => {
                console.log("Error in fetching remote openingscendpoint : ", err);
                setDataLoading(false);
            })
        }
        else if ((remoteOnly && onlyBigTech) || (!remoteOnly && !onlyBigTech)) { 
            const remotePromise = fetch(remoteUrl)
            .then((res) => res.json())
            .catch((err => {
                console.log('Error in fetching from remote postings endpoint : ', err);
                return [];
            }))

            const bigTechPromise = fetch(bigTechUrl)
            .then((res) => res.json())
            .catch((err => {
                console.log('Error in fetching from bigTech postings: ', err);
                return [];
            }))

            Promise.all([remotePromise, bigTechPromise])
            .then(([remoteData, bigTechData]) => {

                const allListingData : JobDataType[]  = remoteData.concat(bigTechData);                
                const internships : JobDataType[] = allListingData.filter(job => job.internship)

                if(jobType === 'internship') {
                    setJobListings(internships)
                } else {
                    setJobListings(allListingData);
                }
                setDataLoading(false);
            
            }).catch((err) => {
                console.log('Error in combined remote and big-tech fetch: ', err);
                setDataLoading(false);
            })
        }
    }, [onlyBigTech, remoteOnly, jobType]);
    

    let jobsPerPage : number = 10;
    const totalPages = Math.ceil((searchQuery === "" ? jobListings.length : searchJobListings.length) / jobsPerPage);

    const handlePageChange = (page : number) => {
        setCurrentPage(page);
    }

    const startIndex : number = (currentPage - 1) * jobsPerPage;
    const endIndex : number = startIndex + jobsPerPage;

    const currentJobsDisplay = (searchQuery === "" ? jobListings : searchJobListings).slice(startIndex, endIndex);



    const jobApplyButtonClick = (jobApplyLink : string) => {
        window.open(jobApplyLink);
    };

    const RemoteTogglehandler = (event : any) => {
        setRemoteOnly(event.target.checked);
    }

    const toggleBigTech = (event : any) => {
        setOnlyBigTech(event.target.checked);
    }


    const handleJobTypeChange = (value: string | string[]) => {
        if (typeof value === 'string') {
            setJobType(value);
        } else {
            setJobType(value[0]);
        }
    };


    const handleSearch = (event : React.ChangeEvent<HTMLInputElement>) => {
        setDataLoading(true)

        const value = event.currentTarget.value;
        setSearchQuery(value);

        const filteredListings = jobListings.filter(listing => 
            listing.position.toLowerCase().includes(value.toLowerCase()) 
            || 
            (listing.location && listing.location.toLowerCase().includes(value.toLowerCase())) 
            || 
            listing.company.toLowerCase().includes(value.toLowerCase())
        ); 

        setSearchJobListings(filteredListings);
        
        setCurrentPage(1); // Reset current page when search query changes
        setDataLoading(false)
    }

    return(
        <>
            <div>
                <div className='centered-page-parent-box'>
                    <Header />
                            
                    <div className='job-table-filter-bar-parent'>
                        <div><Text h3 className='recent-openings-text' type='success'>Recent Openings</Text></div>

                        <div style={{display:"flex", justifyContent:"center"}}>
                            <div className='search-bar-parent'>
                                <Search size={18} />
                                <input className='search-bar' 
                                type = "text"
                                onChange={handleSearch} 
                                placeholder='Search'></input>
                            </div>
                        </div>

                        <div>
                        <Button placeholder='' auto onClick={() => setDrawerState(true)}>Filters</Button>
                        
                        <Drawer width='400px' visible={drawerState} onClose={() => setDrawerState(false)} placement="right">
                            <Drawer.Title><Text b>Filter Options</Text></Drawer.Title>
                            <Drawer.Content>
                                <div style={{display:"flex", flexDirection:"row", gap:"30px", alignItems:"center", justifyContent:"space-between"}}>
                                    <Text>Job Type</Text>
                                    <Select placeholder="Type"  
                                    width='200px' 
                                    value = {jobType}
                                    onChange={handleJobTypeChange}>
                                        <Select.Option value="internship">Internship</Select.Option>
                                        <Select.Option value="full time">Full-Time</Select.Option>
                                    </Select>
                                </div>

                                <div style={{display:"flex", flexDirection:"row", gap:"30px", alignItems:"center", justifyContent:"space-between"}}>
                                    <Text>Big-Tech Only</Text>
                                    <Toggle checked={onlyBigTech} onChange={toggleBigTech} />
                                </div>

                                <div style={{display:"flex", flexDirection:"row", gap:"30px", alignItems:"center", justifyContent:"space-between"}}>
                                    <Text>Work remotely</Text>
                                    
                                    <Toggle checked={remoteOnly} onChange={RemoteTogglehandler} />
                                </div>
        
                                <div>
                                    <Button placeholder='' 
                                    auto 
                                    style={{marginTop:"10px"}}
                                    onClick={() => setDrawerState(false)}
                                    scale={2/3}>Close</Button>
                                </div>

                            </Drawer.Content>
                        </Drawer>

                        </div>
                    </div>

                    <div className='centered-table'>
                        
                        <div className='openings-table-parent-box'>
                            {(jobListings.length === 0 || dataLoading) ? (
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
                                currentJobsDisplay
                                .map((job, index) => (
                                    <div className='openings-table-row' key={index}>
                                        <div className='table-row-left'>
                                            <div className='table-row-left-primary'> 
                                                <img width="30px" src={`https://logo.clearbit.com/${job.company}.com`} alt={""} onError={(e) => {
                                                    e.currentTarget.src = 'https://i.imgur.com/5mv5RX6.png'
                                                }} />
                                                <Text font="20px" b type='success'>{job.position}</Text>
                                            </div>

                                            <div style={{display:"flex", flexDirection:"row", gap:"10px", alignItems:"center"}}>
                                                <Text font="12px" b type='secondary'>{job.company}  •</Text>
                                                <Text font="12px" b type='secondary'>{job.location}</Text>
                                                <Text font="10px" b type='secondary'>{job.agoTime}</Text>
                                            </div>
                                            
                                        </div>
                                        
                                        <Button onClick={() => jobApplyButtonClick(job.jobUrl)} type="success" placeholder='apply'>Apply</Button>
                                    </div>
                                ))
                            )}
                        </div>
                    
                        <Pagination count={totalPages} initialPage={currentPage} onChange={handlePageChange} style={{marginTop:"20px"}} />        
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Explore
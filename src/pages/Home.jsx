import React, { useState } from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import ZigZag from '../assets/icon/ZigZag.jsx'
import ButtonComponent from '../components/ButtonComponent'
import DownArrow from '../assets/icon/DownArrow.jsx'
import Group from '../assets/image/Group81.png'
import fly from '../assets/image/fly.png'
import trivago from '../assets/image/trivago.png'
import air from '../assets/image/air.png'
import turkish from '../assets/image/turkish.png'
import swiss from '../assets/image/swiss.png'
import tourguide from '../assets/image/tour-guide.png'
import travelling from '../assets/image/travelling.png'
import hands from '../assets/image/hands.png'
import medicalteam from '../assets/image/medical-team.png'
import RectangleOne from '../assets/icon/RectangleOne.jsx'
import RectangleTwo from '../assets/icon/RectangleTwo.jsx'
import ourromantic from '../assets/image/our-romantic.png'
import resortbooking from '../assets/image/resort-booking.png'
import Check from '../assets/icon/Check.jsx'
import Choose from '../assets/icon/Choose.jsx'
import Lets from '../assets/icon/Lets.jsx'
import Line from '../assets/image/Line.png'
import Europe1 from '../assets/image/Europe1.png'
import Europe2 from '../assets/image/Europe2.png'
import Europe3 from '../assets/image/Europe3.png'
import Europe4 from '../assets/image/Europe4.png'
import Europe5 from '../assets/image/EuropeSightseeing.png'
import TouePackage from '../layouts/data/Data.jsx'
import Clander from '../assets/icon/Calender.jsx'
import UserProfile from '../assets/icon/UserProfile.jsx'
import Location from '../assets/icon/Location.jsx'
import Rating from '../assets/icon/RatingStar.jsx'
import OurClients from '../layouts/OurClients.jsx'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleExploreNow = (packageData) => {
        navigate('/packages', { state: { selectedPackage: packageData } });
    };


    const [visibleCount, setVisibleCount] = useState(6);

    return (
        <section>
            <div className="home-background">
                <NavBar />
                <div className="container">
                    <div className="home-head">
                        <ZigZag />
                        <h2>No matter where you’re going to, we’ll take you there</h2>
                        <div className="where-blur-1">
                            <div className="where-blur">
                                <h5>Where to?</h5>
                                <span></span>
                                <h5>Travel Type <DownArrow /></h5>
                                <span></span>
                                <h5>Duration <DownArrow /></h5>
                            </div>
                            <ButtonComponent customClass="nav-btn" label="Submit" width={"176px"} height={"56px"} />
                        </div>
                        <div className="hero-user-img">
                            <img src={Group} alt="image" />
                            <p>2,500 people booked Tommorowland Event in last 24 hours</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ads */}
            <div className="home-ads-head">
                <img src={fly} alt="image" />
                <img src={trivago} alt="image" />
                <img src={air} alt="image" />
                <img src={turkish} alt="image" />
                <img src={swiss} alt="image" />
            </div>
            {/* ads */}

            {/* CATEGORY */}
            <div className="category-head">
                <div className="container">
                    <div className="category-1">
                        <h4>CATEGORY</h4>
                        <h2>We Offer Best Services</h2>
                        <div className="category-2">
                            <div className="category-box">
                                <div className="category-guide-img">
                                    <div className="categoryimage">
                                        <img style={{ zIndex: '10px' }} src={tourguide} alt="img" />
                                    </div>
                                    <span style={{ zIndex: '-1' }} className='icon'><RectangleOne /></span>
                                </div>
                                <h5>Guided Tours</h5>
                                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                            </div>
                            <div className="category-box">
                                <div className="category-guide-img">
                                    <div className="categoryimage">
                                        <img style={{ zIndex: '10px' }} src={travelling} alt="img" />
                                    </div>
                                    <span style={{ zIndex: '-1' }} className='icon-1'><RectangleTwo /></span>
                                </div>
                                <h5>Best Flights Options</h5>
                                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                            </div>
                            <div className="category-box">
                                <div className="category-guide-img">
                                    <div className="categoryimage">
                                        <img style={{ zIndex: '10px' }} src={hands} alt="img" />
                                    </div>
                                    <span style={{ zIndex: '-1' }} className='icon-2'><RectangleTwo /></span>
                                </div>
                                <h5>Religious Tours</h5>
                                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                            </div>
                            <div className="category-box">
                                <div className="category-guide-img">
                                    <div className="categoryimage">
                                        <img style={{ zIndex: '10px' }} src={medicalteam} alt="img" />
                                    </div>
                                    <span style={{ zIndex: '-1' }} className='icon-3'><RectangleTwo /></span>
                                </div>
                                <h5>Medical insurance</h5>
                                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CATEGORY */}

            {/* Romantic */}
            <div className="Romantic-head">
                <div className="container-1">
                    <div className="Romantic-sub-head">
                        <div className="Romantic-1">
                            <img src={ourromantic} alt="img" />
                        </div>
                        <div className="Romantic-2">
                            <h6>Honeymoon Specials</h6>
                            <h2>Our Romantic Tropical Destinations</h2>
                            <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                            <ButtonComponent  onClick={() => handleNavigate('/packages')} customClass="romantic-btn" label="View Packages" width={"176px"} height={"56px"} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Romantic */}

            {/* Fast & Easy */}
            <div className="Fast-head">
                <div className="container-2">
                    <div className="Fast-sub-head">
                        <div className="Fast-1">
                            <h5>Fast & Easy</h5>
                            <h2>Get Your Favourite
                                Resort Bookings</h2>
                            <div className="Fast-1-sub">
                                <div style={{ background: '#f0bb1f' }} className="Fast-icon">
                                    <span style={{ marginTop: '5px' }}><Choose /></span>
                                </div>
                                <div className="Fast-sub">
                                    <h6>Choose Destination</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                            <div className="Fast-1-sub">
                                <div style={{ background: '#f15a2b' }} className="Fast-icon">
                                    <span style={{ marginTop: '5px' }}><Check /></span>
                                </div>
                                <div className="Fast-sub">
                                    <h6>Check Availability</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                            <div className="Fast-1-sub">
                                <div style={{ background: '#006380' }} className="Fast-icon">
                                    <span style={{ marginTop: '5px' }}><Lets /></span>
                                </div>
                                <div className="Fast-sub">
                                    <h6>Let’s Go</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Urna, tortor tempus. </p>
                                </div>
                            </div>
                        </div>
                        <div className="Fast-2">
                            <img src={resortbooking} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Fast & Easy */}

            {/* holiday  */}
            <div className="holiday-background">
                <div className="container">
                    <div className="holiday-1">
                        <h1>Let’s make your
                            next holiday amazing</h1>
                    </div>
                    <img className='line-holiday' src={Line} alt="" />
                </div>
            </div>
            {/* holiday  */}

            {/* EuropeSightseeing */}
            <div className="Promotion">
                <div className="container">
                    <div className="Promotion-head">
                        <div className="Promotion-2">
                            <h5>Promotion</h5>
                            <h2>We Provide You Best Europe Sightseeing Tours</h2>
                            <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                            <ButtonComponent  onClick={() => handleNavigate('/packages')} customClass="romantic-btn" label="View Packages" width={"176px"} height={"56px"} />
                        </div>
                        <div className="Promotion-image">
                            <div className="Promotion-img-sub">
                                <img className='promorion-img' src={Europe1} alt="img" />
                                <ButtonComponent customClass="promotion-btn" label="$700" width={"83px"} height={"35px"} />
                            </div>
                            <div className="Promotion-img-sub">
                                <img className='promorion-img' src={Europe2} alt="img" />
                                <ButtonComponent customClass="promotion-btn" label="$800" width={"83px"} height={"35px"} />
                            </div>
                            <div className="Promotion-img-sub">
                                <img className='promorion-img' src={Europe3} alt="img" />
                                <ButtonComponent customClass="promotion-btn" label="$500" width={"83px"} height={"35px"} />
                            </div>
                            <div className="Promotion-img-sub">
                                <img className='promorion-img' src={Europe4} alt="img" />
                                <ButtonComponent customClass="promotion-btn" label="$400" width={"83px"} height={"35px"} />
                            </div>
                        </div>
                        <div className="Promotion-1">
                            <img src={Europe5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* EuropeSightseeing */}

            {/* explore-city */}
            <div className="explore-head">
                <div className="explore-1">
                    <div className="explore-text">
                        <h5>Promotion</h5>
                        <h2>Explore Nature</h2>
                        <ButtonComponent  onClick={() => handleNavigate('/packages')} customClass="explore-btn" label="View Packages" width={"176px"} height={"56px"} />
                    </div>
                </div>
                <div className="explore-2">
                    <div className="explore-text">
                        <h5>Promotion</h5>
                        <h2>Explore Cities</h2>
                        <ButtonComponent  onClick={() => handleNavigate('/packages')} customClass="explore-btn" label="View Packages" width={"176px"} height={"56px"} />
                    </div>
                </div>
            </div>
            {/* explore-city */}

            {/* Trending */}
            <div className="Trending">
                <div className="container">
                    <div className="Trending-head">
                        <h5>trendy</h5>
                        <h2>Our Trending Tour Packages</h2>
                        <div className="Trending-sub-head">
                            <div className="Trending-1">
                                {TouePackage.slice(0, visibleCount).map((data, index) => (
                                    <div key={index} className="Trending-box">
                                        <img  src={data.image} alt="" />
                                        <div className="Trending-days">
                                            <p><Clander />{data.days}</p>
                                            <p><UserProfile />{data.people}</p>
                                        </div>
                                        <h4>{data.name}<Rating /></h4>
                                        <p><Location/>{data.place}</p>
                                        <h3>{data.price} <span style={{textDecoration:'line-through'}}>1,200$</span></h3>
                                        <h6>{data.description}</h6>
                                        <ButtonComponent   onClick={() => handleExploreNow(data)} customClass="romantic-btn" label="Explore Now" width={"134px"} height={"43px"} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Trending */}

            {/* Our Clients */}
            <OurClients/>
            {/* Our Clients */}
            <Footer />
        </section>
    )
}

export default Home
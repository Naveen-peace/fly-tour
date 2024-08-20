import React from 'react'
import NavBar from '../layouts/NavBar'
import OurClients from '../layouts/OurClients'
import Footer from '../layouts/Footer'
import ButtonComponent from '../components/ButtonComponent'
import abouthero from '../assets/image/about-hero-1.png'
import aboutcircle from '../assets/image/about-hero-11.png'
import aboutmountain from '../assets/image/about-hero-111.png'
import PlayButton from '../assets/icon/PlayButton.jsx'
import abouthero2 from '../assets/image/about-hero-3.png'
import vacation from '../assets/image/Vacations.png'
import honeymoon from '../assets/image/Honeymoon.png'
import musical from '../assets/image/Musical.png'
import shell from '../assets/image/about-hero-33.png'
import GalleryItem from '../components/GalleryItem.jsx'
import InternationalBarcelona from '../assets/image/InternationalBarcelona.png'
import InternationalSwitzerland from '../assets/image/InternationalSwitzerland.png'
import InternationalRiodeJenero from '../assets/image/InternationalRiodeJenero.png'
import InternationalBarcelona2 from '../assets/image/InternationalBarcelona(2).png'
import InternationalTommorowland from '../assets/image/InternationalTommorowland.png'
import InternationalLosAngelas from '../assets/image/InternationalLosAngelas.png'
import InternationalIndia from '../assets/image/InternationalIndia.png'
import InternationalBarcelona3 from '../assets/image/InternationalBarcelona(3).png'
import InternationalMaldives from '../assets/image/InternationalMaldives.png'
import InternationalBarcelona4 from '../assets/image/InternationalBarcelona(4).png'
import InternationalPakistan from '../assets/image/InternationalPakistan.png'
import { useNavigate } from 'react-router-dom'


function About() {


    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    const images = [
        { image: InternationalBarcelona, alt: 'Barcelona', location: 'Barcelona', price: '$840' },
        { image: InternationalSwitzerland, alt: 'Switzerland', location: 'Switzerland', price: '$840' },
        { image: InternationalRiodeJenero, alt: 'Rio de Jenero', location: 'Rio de Jenero', price: '$840' },
        { image: InternationalBarcelona2, alt: 'Barcelona', location: 'Barcelona', price: '$840' },
        { image: InternationalTommorowland, alt: 'Tommorow land', location: 'Tommorow land', price: '$840' },
        { image: InternationalLosAngelas, alt: 'Los Angelas', location: 'Los Angelas', price: '$840' },
        { image: InternationalIndia, alt: 'India', location: 'India', price: '$840' },
        { image: InternationalBarcelona3, alt: 'Barcelona', location: 'Barcelona', price: '$840' },
        { image: InternationalMaldives, alt: 'Maldives', location: 'Maldives', price: '$840' },
        { image: InternationalBarcelona4, alt: 'Barcelona', location: 'Barcelona', price: '$840' },
        { image: InternationalPakistan, alt: 'Pakistan', location: 'Pakistan', price: '$840' },
    ];


    return (
        <section>
            <div className="about-background">
                <NavBar />
                <div className="about">
                    <h4>Read</h4>
                    <h1>About Us</h1>
                </div>
            </div>

            {/* Europe Sightseeing */}
            <div className="container">
                <div className="Europe">
                    <div className="Europe-head">
                        <h5>Promotion</h5>
                        <h2>We Provide You Best Europe Sightseeing Tours</h2>
                        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                        <ButtonComponent  onClick={() => handleNavigate('/packages')} customClass="romantic-btn" label="View Packages" width={"176px"} height={"56px"} />
                    </div>
                    <div className="Europe-img">
                        <img style={{ width: '100%' }} src={abouthero} alt="img" />
                        <div className="Europe-img1">
                            <img style={{ width: '100%' }} src={aboutcircle} alt="img" />
                        </div>
                        <div className="Europe-img2">
                            <img style={{ width: '100%' }} src={aboutmountain} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Europe Sightseeing */}

            {/* Wanderlust */}
            <div className="Wanderlust-background">
                <h1>Wanderlust</h1>
                <div className="wander-icon">
                    <PlayButton />
                </div>
            </div>
            {/* Wanderlust */}

            {/* Tour Plans */}
            <div className="Tour-Plans">
                <div className="container-4">
                    <div className="Tour-Plans-head">
                        <div className="Tour-Plans-headimg">
                        <img src={abouthero2} alt="img" />
                        </div>
                        <div className="Tour-Plans-1">
                            <div className="Tour-Plans-2">
                                <h5>Trend</h5>
                                <h2>Our Popular Tour Plans</h2>
                                <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.</p>
                                <div className="Tour-Plans-img1">
                                    <img src={vacation} alt="img" />
                                    <img src={honeymoon} alt="img" />
                                    <img src={musical} alt="img" />
                                </div>
                            </div>
                            <div className="Tour-Plans-img">
                                <img src={shell} alt="img" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Tour Plans */}

            {/* gallery */}
            <div className="gallery-head">
                <div className="container">
                    <h5>Explore more</h5>
                    <h2>Our International Packages</h2>
                    <div className="gallery">
                        {images.map((image, index) => (
                            <GalleryItem
                                key={index}
                                imageSrc={image.image}
                                altText={image.alt}
                                location={image.location}
                                price={image.price}
                            />
                        ))}
                    </div>

                    <div className="gallery-btn">
                    <ButtonComponent  onClick={() => handleNavigate('/packages')} customClass="romantic-btn" label="View Packages" width={"176px"} height={"56px"} />
                    </div>
                </div>
            </div>

            {/* gallery */}

            {/* Our Clients */}
            <OurClients />
            {/* Our Clients */}

            <Footer />
        </section>
    )
}

export default About
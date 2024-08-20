import React, { useState, useRef } from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import TouePackage from '../layouts/data/Data';
import ButtonComponent from '../components/ButtonComponent';
import Clander from '../assets/icon/Calender.jsx';
import UserProfile from '../assets/icon/UserProfile.jsx';
import Location from '../assets/icon/Location.jsx';
import Rating from '../assets/icon/RatingStar.jsx';
import { Icon } from '@iconify/react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import PlanImg from '../assets/image/PlanYourTrip.png';
import { useNavigate } from 'react-router-dom';
import ToastifyComponent from '../components/toastifyComponent.jsx';

function Packages() {
    const ITEMS_PER_PAGE = 4;

    const [currentPage, setCurrentPage] = useState(1);
    const [sortType, setSortType] = useState('default');
    const [priceRange, setPriceRange] = useState([0, 1200]);

    const navigate = useNavigate();

    const trendingRef = useRef(null); // Create a reference to the Trending-1-1 section

    const handleNavigate = (path, tourData) => {
        navigate(path, { state: { tourData } });
    };

    const handleExploreNowClick = () => {
        if (trendingRef.current) {
            trendingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sortItems = (items) => {
        switch (sortType) {
            case 'priceLowToHigh':
                return items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            case 'priceHighToLow':
                return items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            case 'name':
                return items.sort((a, b) => a.name.localeCompare(b.name));
            default:
                return items;
        }
    };

    const filteredItems = TouePackage.filter((item) => {
        const price = parseFloat(item.price.replace('$', '').trim());
        return price >= priceRange[0] && price <= priceRange[1];
    });
    const sortedItems = sortItems(filteredItems);

    const totalPages = Math.ceil(sortedItems.length / ITEMS_PER_PAGE);
    const currentItems = sortedItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePriceChange = (range) => {
        setPriceRange(range);
        setCurrentPage(1); // Reset to the first page when the price range changes
    };

    return (
        <section>
            <div className='package-head'>
                <NavBar />
                <div className="about">
                    <h4>Search tour</h4>
                    <h1>Travel With Us</h1>
                </div>
            </div>

            <div className="package-tour-head">
                <div className="container">
                    <div className="price-tour">
                        <h4><Icon icon="bi:calendar-date" width="26" height="26" />Date</h4>
                        <h4 onClick={() => setSortType('priceLowToHigh')}><Icon icon="mdi:tray-arrow-up" width="26" height="26" />Price Low to High</h4>
                        <h4 onClick={() => setSortType('priceHighToLow')}><Icon icon="uil:down-arrow" width="26" height="26" />Price High to Low</h4>
                        <h4 onClick={() => setSortType('name')}><Icon icon="mage:edit-pen" width="26" height="26" />Name (A-Z)</h4>
                    </div>
                    <div className="Trending-sub-head">
                        <div className="Trending-subhead1">
                            <div ref={trendingRef} className="Trending-1-1"> {/* Add ref here */}
                                {currentItems.map((data, index) => (
                                    <div key={index} className="Trending-box-1">
                                        <img style={{ width: '392px', height: '300px', borderRadius: '30px' }} src={data.image} alt="" />
                                        <div className="Trending-days-1">
                                            <p><Clander />{data.days}</p>
                                            <p><UserProfile />{data.people}</p>
                                        </div>
                                        <h4>{data.name}<Rating /></h4>
                                        <p><Location />{data.place}</p>
                                        <h3>{data.price} <span style={{ textDecoration: 'line-through' }}>1,200$</span></h3>
                                        <h6>{data.description}</h6>
                                        <ButtonComponent
                                            onClick={() => {
                                                handleNavigate('/tourdetails', data);
                                                handleExploreNowClick(); // Smooth scroll to Trending-1-1
                                            }}
                                            customClass="romantic-btn"
                                            label="Explore Now"
                                            width={"134px"}
                                            height={"43px"}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="pagination">
                                {/* Previous Arrow */}
                                <button
                                    className="carousel-arrow"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1} // Disable if on the first page
                                >
                                    <Icon icon="ep:arrow-left" width="16" height="16" />
                                </button>

                                {/* Page Numbers */}
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i + 1}
                                        className={`pagination-button ${i + 1 === currentPage ? 'active' : ''}`}
                                        onClick={() => handlePageChange(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                {/* Next Arrow */}
                                <button
                                    className="carousel-arrow"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages} // Disable if on the last page
                                >
                                    <Icon icon="ep:arrow-right" width="16" height="16" />
                                </button>
                            </div>
                        </div>
                        <div className="PlanYourTrip-head">
                            <div className="PlanYourTrip">
                                <h4>Plan Your Trip</h4>
                                <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>
                                <div className="planinput">
                                    <h6>
                                        <Icon icon="ri:search-line" width="20" height="20" />
                                        Search Tour
                                    </h6>
                                    <h6>
                                        <Icon icon="carbon:location" width="20" height="20" />
                                        Where To?
                                    </h6>
                                    <h6>
                                        <Icon icon="bi:calendar-date" width="20" height="20" />
                                        Date
                                    </h6>
                                </div>
                                <h5>Filter by price</h5>
                                <div className="price-slider">
                                    <Slider
                                        range
                                        min={0}
                                        max={1200}
                                        value={priceRange}
                                        onChange={handlePriceChange}
                                        trackStyle={[{ backgroundColor: 'red' }]}
                                        handleStyle={[{ borderColor: 'red' }, { borderColor: 'red' }]}
                                    />
                                    <p>Price: ${priceRange[0]} - ${priceRange[1]}</p>
                                </div>
                                <div className="plan-btn">
                                    <ToastifyComponent
                                        paragraphMessage="Your Package Update Sucessfully"
                                        buttonLabel="Book Now"
                                        customClass="nav-btn"
                                        width="152px"
                                        height="58px"
                                        type="success" // Set the toast type (e.g., info, success, error, etc.)
                                    />
                                </div>
                            </div>
                            <div className="plan-img">
                                <img src={PlanImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Packages;

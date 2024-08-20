import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import { Icon } from '@iconify/react';
import RatingStar from '../assets/icon/RatingStar.jsx';
import ButtonComponent from '../components/ButtonComponent.jsx';
import PlanYourTrip from '../assets/image/PlanYourTrip.png'
import PopupComponent from '../components/PopupComponent.jsx';
import ToastifyComponent from '../components/toastifyComponent.jsx';

function TourInformation() {
    const location = useLocation();
    const { tourData } = location.state || {}; // Safely access tourData


    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const [activeTab, setActiveTab] = useState('Information');
    const [visibleCount, setVisibleCount] = useState(6);

    if (!tourData) {
        return <div>No tour details available.</div>;
    }

    const tabStyle = (tabName) => {
        return activeTab === tabName ? {
            width: '318px',
            height: '141px',
            background: '#ffffff',
            cursor: 'pointer',
            borderRadius: '10px',
            padding: '10px 0 0 0px',
        } : {
            cursor: 'pointer',
            padding: '0 40px',
        };
    };

    return (
        // <section>
        //     <div className='tourdetail-head'>
        //         <NavBar />
        //         <div className="about">
        //             <h4>Explore</h4>
        //             <h1>Landscapes</h1>
        //         </div>
        //     </div>

        //     <div className="tourdetail-head-1">
        //         <div className="container">
        //             <div className="tourdetail-1">
        //                 <div className="tourdetails-2">
        //                     <h4><Icon icon="mdi:information-variant-circle-outline" width="26" height="26" />Information</h4>
        //                     <h4><Icon icon="formkit:date" width="26" height="26" />Tour Plan</h4>
        //                     <h4><Icon icon="carbon:location" width="26" height="26" />Location</h4>
        //                     <h4><Icon icon="clarity:image-gallery-line" width="26" height="26" />Gallery</h4>
        //                 </div>
        //                 <div className="tourdetail-3">
        //                     <div className="tour-detail">
        //                         <div className="tourdetail-text-1">
        //                             <h4>{tourData.name}</h4>
        //                             <h5>{tourData.price}<span>/Per Couple</span></h5>
        //                             <div className="tourdetail-text-1-sub">
        //                                 <RatingStar />
        //                                 <span>(2.3k review)</span>
        //                             </div>
        //                         </div>
        //                         <p>{tourData.description3}</p>
        //                         <div className="tourdetail-text-2">
        //                             <h5>Destination : <p> {tourData.name}</p></h5>
        //                             <h5>Departure : <p> {tourData.Departure}</p></h5>
        //                             <h5>Departure Time : <p>{tourData.ArriveTime}</p></h5>
        //                             <h5>Return Time : <p>{tourData.returntime}</p></h5>
        //                             <h5>Dress Code : <p>{tourData.DressCode}</p></h5>
        //                             <div className="include">
        //                                 <h5>Not Included</h5>
        //                                 <div className="include-1">
        //                                     <p><Icon icon="charm:circle-cross" width="16" height="16" />Gallery Ticket </p>
        //                                     <p><Icon icon="charm:circle-cross" width="16" height="16" />Lunch</p>
        //                                 </div>
        //                             </div>
        //                             <div className="include">
        //                                 <h5>Included</h5>
        //                                 <div className="include-1">
        //                                     <p><Icon icon="teenyicons:tick-circle-outline" width="16" height="16" />5 star Accomodations</p>
        //                                     <p><Icon icon="teenyicons:tick-circle-outline" width="16" height="16" />Airport Transfer</p>
        //                                     <p><Icon icon="teenyicons:tick-circle-outline" width="16" height="16" />Breakfast</p>
        //                                     <p><Icon icon="teenyicons:tick-circle-outline" width="16" height="16" />Personal Guide</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="tourdetail-4">
        //                         <h2>From our gallery</h2>
        //                         <p>{tourData.description}</p>
        //                         <div className="gallery-images">
        //                             {tourData.gallery.slice(0, visibleCount).map((image, index) => (
        //                                 <img
        //                                     key={index}
        //                                     style={{ width: '236px', height: '240px', margin: '10px' }}
        //                                     src={image}
        //                                     alt={`Gallery image ${index + 1}`}
        //                                 />
        //                             ))}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <Footer />
        // </section>
        <section>
            <div className='tourdetail-head'>
                <NavBar />
                <div className="about">
                    <h4>Explore</h4>
                    <h1>Landscapes</h1>
                </div>
            </div>

            <div className="tourdetail-head-1">
                <div className="container">
                    <div className="tourdetail-1">
                        <div className="tourdetails-2">
                            <h4
                                style={tabStyle('Information')}
                                onClick={() => setActiveTab('Information')}
                            >
                                <Icon icon="mdi:information-variant-circle-outline" width="26" height="26" />
                                Information
                            </h4>
                            <h4
                                style={tabStyle('Tour Plan')}
                                onClick={() => setActiveTab('Tour Plan')}
                            >
                                <Icon icon="formkit:date" width="26" height="26" />
                                Tour Plan
                            </h4>
                            <h4
                                style={tabStyle('Location')}
                                onClick={() => setActiveTab('Location')}
                            >
                                <Icon icon="carbon:location" width="26" height="26" />
                                Location
                            </h4>
                            <h4
                                style={tabStyle('Gallery')}
                                onClick={() => setActiveTab('Gallery')}
                            >
                                <Icon icon="clarity:image-gallery-line" width="26" height="26" />
                                Gallery
                            </h4>
                        </div>
                        <div className="tourdetail-3">
                            {activeTab === 'Information' && (
                                <div className="tour-detail-head">
                                    <div className="tour-detail">
                                        <div className="tourdetail-text-1">
                                            <h4>{tourData.name}</h4>
                                            <h5>{tourData.price}/<span>Per Couple</span></h5>
                                        </div>
                                        <div className="tourdetail-text-1-sub">
                                            <RatingStar />
                                            <span>(2.3k review)</span>
                                        </div>
                                        <p>{tourData.description3}</p>
                                        <div className="tourdetail-text-2">
                                            <h5>Destination  <p>: {tourData.name}</p></h5>
                                            <h5>Departure  <p>: {tourData.Departure}</p></h5>
                                            <h5>Departure Time <p> {tourData.ArriveTime}</p></h5>
                                            <h5>Return Time  <p> {tourData.returntime}</p></h5>
                                            <h5>Dress Code  <p> {tourData.DressCode}</p></h5>

                                            <h5>Not Included
                                                <div className="include-1-1">
                                                    <p><Icon icon="charm:circle-cross" width="16" height="16" />Gallery Ticket</p>
                                                    <p><Icon icon="charm:circle-cross" width="16" height="16" />Lunch</p>
                                                </div>
                                            </h5>


                                            <h5>Included
                                                <div className="include1-2">
                                                    <p><Icon icon="teenyicons:tick-circle-outline" width="16" height="16" />5 star </p>
                                                    <p><Icon icon="teenyicons:tick-circle-outline" width="16" height="16" />Airport Transfer</p>
                                                    <p><Icon icon="teenyicons:tick-circle-outline" width="16" height="16" />Breakfast</p>
                                                    <p><Icon icon="teenyicons:tick-circle-outline" width="16" height="16" />Personal Guide</p>
                                                </div>
                                            </h5>

                                        </div>
                                        <div className="tourdetail-4">
                                            <h2>From our gallery</h2>
                                            <p>{tourData.description}</p>
                                            <div className="gallery-images">
                                                {tourData.gallery.slice(0, visibleCount).map((image, index) => (
                                                    <img
                                                        key={index}
                                                        style={{ width: '236px', height: '240px', margin: '10px 10px 10px 5px' }}
                                                        src={image}
                                                        alt={`Gallery image ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bookthistour">
                                        <div className="bookthistour-1">
                                            <h2>Book This Tour</h2>
                                            <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>

                                            <div className="booking-form">
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:account-outline" width="24" height="24" />
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:email-outline" width="24" height="24" />
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:email-outline" width="24" height="24" />
                                                    <input type="email" placeholder="Confirm Email" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:phone-outline" width="24" height="24" />
                                                    <input type="tel" placeholder="Phone" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:calendar-month-outline" width="24" height="24" />
                                                    <input type="text" placeholder="dd-mm-yy" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="carbon:tag-group" width="24" height="24" />
                                                    <input type="text" placeholder="Number of ticket" />
                                                </div>
                                                <div className="tourform-group-1" style={{ marginBottom: '30px' }}>
                                                    <Icon icon="mage:message-dots-round" width="24" height="24" />
                                                    <input type="text" placeholder="Message" />
                                                </div>
                                                <div className="form-btn">
                                                    <ButtonComponent
                                                        customClass="romantic-btn"
                                                        label="Check Availability"
                                                        width={"176px"}
                                                        height={"56px"}
                                                        onClick={openPopup}
                                                    />
                                                    <PopupComponent
                                                        isOpen={isPopupOpen}
                                                        closePopup={closePopup}
                                                        label="Tour Package"
                                                        lableone="Select your options"
                                                        buttonlable="Build Package"
                                                        customClass="your-custom-class"
                                                        width="500px"
                                                        height="600px"
                                                        onClick={() => alert('Form submitted!')}
                                                    />
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
                                        </div>
                                        <div className="bookthistour-img">
                                            <img style={{ width: '100%', height: '100%' }} src={PlanYourTrip} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Tour Plan' && (
                                <div className="tour-detail-head-2">
                                    <div className="tourplan-1">
                                        <h2>Tour Plan</h2>
                                        <div className="tourplan-1sub">
                                            <div className="num-btn">01</div>
                                            <div className="tourplan-content">
                                                <h3>Day 1: Departure</h3>
                                                <p>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem</p>
                                                <ul>
                                                    <li>5 Star Accommodation</li>
                                                    <li>Breakfast</li>
                                                    <li>5 Star Accommodation</li>
                                                    <li>Breakfast</li>
                                                </ul>
                                            </div>
                                            <div className="dotted-line"></div>
                                        </div>
                                        <div className="tourplan-1sub">
                                            <div className="num-btn">02</div>
                                            <div className="tourplan-content">
                                                <h3>Day 2: Visiting Zurich, Geneva and Zermatt</h3>
                                                <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>
                                                <ul>
                                                    <li>5 Star Accommodation</li>
                                                    <li>Breakfast</li>
                                                    <li>5 Star Accommodation</li>
                                                    <li>Breakfast</li>
                                                </ul>
                                            </div>
                                            <div className="dotted-line"></div>
                                        </div>
                                        <div className="tourplan-1sub">
                                            <div className="num-btn">03</div>
                                            <div className="tourplan-content">
                                                <h3>Day 3: Rest</h3>
                                                <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>
                                                <ul>
                                                    <li>5 Star Accommodation</li>
                                                    <li>Breakfast</li>
                                                    <li>5 Star Accommodation</li>
                                                    <li>Breakfast</li>
                                                </ul>
                                            </div>
                                            <div className="dotted-line"></div>
                                        </div>
                                        <div className="tourplan-1sub">
                                            <div className="num-btn">04</div>
                                            <div className="tourplan-content">
                                                <h3>Day 4: Historical Tour</h3>
                                                <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>
                                                <ul>
                                                    <li>5 Star Accommodation</li>
                                                    <li>Breakfast</li>
                                                    <li>5 Star Accommodation</li>
                                                    <li>Breakfast</li>
                                                </ul>
                                            </div>
                                            <div className="dotted-line"></div>
                                        </div>
                                        <div className="tourplan-1sub">
                                            <div className="num-btn">05</div>
                                            <div className="tourplan-content">
                                                <h3>Day 5: Return</h3>
                                                <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bookthistour">
                                        <div className="bookthistour-1">
                                            <h2>Book This Tour</h2>
                                            <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>

                                            <div className="booking-form">
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:account-outline" width="24" height="24" />
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:email-outline" width="24" height="24" />
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:email-outline" width="24" height="24" />
                                                    <input type="email" placeholder="Confirm Email" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:phone-outline" width="24" height="24" />
                                                    <input type="tel" placeholder="Phone" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:calendar-month-outline" width="24" height="24" />
                                                    <input type="text" placeholder="dd-mm-yy" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="carbon:tag-group" width="24" height="24" />
                                                    <input type="text" placeholder="Number of ticket" />
                                                </div>
                                                <div className="tourform-group-1" style={{ marginBottom: '30px' }}>
                                                    <Icon icon="mage:message-dots-round" width="24" height="24" />
                                                    <input type="text" placeholder="Message" />
                                                </div>
                                                <div className="form-btn">
                                                    <ButtonComponent
                                                        customClass="romantic-btn"
                                                        label="Check Availability"
                                                        width={"176px"}
                                                        height={"56px"}
                                                        onClick={openPopup}
                                                    />
                                                    <PopupComponent
                                                        isOpen={isPopupOpen}
                                                        closePopup={closePopup}
                                                        label="Tour Package"
                                                        lableone="Select your options"
                                                        buttonlable="Build Package"
                                                        customClass="your-custom-class"
                                                        width="500px"
                                                        height="600px"
                                                        onClick={() => alert('Form submitted!')}
                                                    />
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
                                        </div>
                                        <div className="bookthistour-img">
                                            <img style={{ width: '100%', height: '100%' }} src={PlanYourTrip} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Location' && (
                                <div className="tour-detail-head-3">
                                    <div className="tour-location">
                                        <h3>Tour Plan</h3>
                                        <p>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium</p>
                                        <div style={{width:'100%',height:'600px'}} dangerouslySetInnerHTML={{ __html: tourData.locationLink }} />
                                        <p style={{marginTop:'21px'}}>Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit deleniti praesentium aut velit nostrum ut itaque atque ad expedita veniam. Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. Ut voluptas laudantium et molestias voluptatem ex doloremque omnis est ipsum nihil.</p>
                                        <p>Quo facere eveniet 33 sint rerum est internos impedit sed dignissimos quia. Et rerum deleniti et voluptates saepe qui labore quisquam non accusantium temporibus. Quo velit numquam hic excepturi sequi sed dicta doloribus! In quos possimus quo quibusdam aliquid est culpa porro sed molestiae libero At blanditiis minima a reiciendis fugiat.</p>
                                    </div>
                                    <div className="bookthistour">
                                        <div className="bookthistour-1">
                                            <h2>Book This Tour</h2>
                                            <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>

                                            <div className="booking-form">
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:account-outline" width="24" height="24" />
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:email-outline" width="24" height="24" />
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:email-outline" width="24" height="24" />
                                                    <input type="email" placeholder="Confirm Email" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:phone-outline" width="24" height="24" />
                                                    <input type="tel" placeholder="Phone" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:calendar-month-outline" width="24" height="24" />
                                                    <input type="text" placeholder="dd-mm-yy" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="carbon:tag-group" width="24" height="24" />
                                                    <input type="text" placeholder="Number of ticket" />
                                                </div>
                                                <div className="tourform-group-1" style={{ marginBottom: '30px' }}>
                                                    <Icon icon="mage:message-dots-round" width="24" height="24" />
                                                    <input type="text" placeholder="Message" />
                                                </div>
                                                <div className="form-btn">
                                                    <ButtonComponent
                                                        customClass="romantic-btn"
                                                        label="Check Availability"
                                                        width={"176px"}
                                                        height={"56px"}
                                                        onClick={openPopup}
                                                    />
                                                    <PopupComponent
                                                        isOpen={isPopupOpen}
                                                        closePopup={closePopup}
                                                        label="Tour Package"
                                                        lableone="Select your options"
                                                        buttonlable="Build Package"
                                                        customClass="your-custom-class"
                                                        width="500px"
                                                        height="600px"
                                                        onClick={() => alert('Form submitted!')}
                                                    />
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
                                        </div>
                                        <div className="bookthistour-img">
                                            <img style={{ width: '100%', height: '100%' }} src={PlanYourTrip} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Gallery' && (
                                <div className="tourdetailhead-4">
                                    <div className="gallery-images-1">
                                        {tourData.gallery.map((image, index) => (
                                            <img
                                                key={index}
                                                // style={{ width: '236px', height: '240px', margin: '10px' }}
                                                src={image}
                                                alt={`Gallery image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="bookthistour">
                                        <div className="bookthistour-1">
                                            <h2>Book This Tour</h2>
                                            <p>Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.</p>

                                            <div className="booking-form">
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:account-outline" width="24" height="24" />
                                                    <input type="text" placeholder="Name" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:email-outline" width="24" height="24" />
                                                    <input type="email" placeholder="Email" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:email-outline" width="24" height="24" />
                                                    <input type="email" placeholder="Confirm Email" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:phone-outline" width="24" height="24" />
                                                    <input type="tel" placeholder="Phone" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="mdi:calendar-month-outline" width="24" height="24" />
                                                    <input type="text" placeholder="dd-mm-yy" />
                                                </div>
                                                <div className="tourform-group-1">
                                                    <Icon icon="carbon:tag-group" width="24" height="24" />
                                                    <input type="text" placeholder="Number of ticket" />
                                                </div>
                                                <div className="tourform-group-1" style={{ marginBottom: '30px' }}>
                                                    <Icon icon="mage:message-dots-round" width="24" height="24" />
                                                    <input type="text" placeholder="Message" />
                                                </div>
                                                <div className="form-btn">
                                                    <ButtonComponent
                                                        customClass="romantic-btn"
                                                        label="Check Availability"
                                                        width={"176px"}
                                                        height={"56px"}
                                                        onClick={openPopup}
                                                    />
                                                    <PopupComponent
                                                        isOpen={isPopupOpen}
                                                        closePopup={closePopup}
                                                        label="Tour Package"
                                                        lableone="Select your options"
                                                        buttonlable="Build Package"
                                                        customClass="your-custom-class"
                                                        width="500px"
                                                        height="600px"
                                                        onClick={() => alert('Form submitted!')}
                                                    />
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
                                        </div>
                                        <div className="bookthistour-img">
                                            <img style={{ width: '100%', height: '100%' }} src={PlanYourTrip} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default TourInformation;

import React, { useEffect, useState } from 'react';
import ButtonComponent from '../components/ButtonComponent.jsx';
import NavLogo from '../assets/icon/NavLogo.jsx';
import { useNavigate } from 'react-router-dom';
import PopupComponent from '../components/PopupComponent.jsx';
import { Icon } from '@iconify/react';

function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown) {
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    }
}

function NavBar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    useEffect(() => {
        // Close the dropdown if clicked outside of it
        const handleClickOutside = (event) => {
            if (!event.target.matches('.service-button')) {
                const dropdown = document.getElementById('dropdownMenu');
                if (dropdown && dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                }
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav className='navtop'>
            <div className="container">
                <div className="nav-head">
                    <span onClick={() => handleNavigate('/*')}><NavLogo /></span>
                    <div className="menubar" onClick={toggleDrawer}>
                        <Icon icon="majesticons:menu" width="24" height="24" />
                    </div>
                    <div className="nav-1-head">
                        <div className="nav-1">
                            <h5 onClick={() => handleNavigate('/*')}>Home</h5>
                            <h5 onClick={() => handleNavigate('/about')}>About</h5>
                            <div className="service-container">
                                <button className="service-button" onClick={toggleDropdown}>
                                    Service <span className="arrow"></span>
                                </button>
                                <div className="dropdown" id="dropdownMenu">
                                    <div className="custom-select">
                                        <p onClick={openPopup}>Honeymoon Package</p>
                                        <p onClick={openPopup}>Tours Packages</p>
                                        <p onClick={openPopup}>Musical Events</p>
                                        <p onClick={openPopup} style={{ marginBottom: '0' }}>Build Package</p>
                                    </div>
                                </div>
                            </div>
                            <h5 onClick={() => handleNavigate('/packages')}> Packages</h5>
                        </div>
                        <ButtonComponent customClass="nav-btn" label="Get in Touch" width={"152px"} height={"58px"} onClick={openPopup} />
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
                    </div>
                </div>
            </div>

            {/* Drawer Implementation */}
            <div className="hide-drawer">
                <div className={`drawer ${isDrawerOpen ? 'open' : ''}`} onClick={toggleDrawer}>
                    <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Menu</h3>
                        <ul>
                            <li onClick={() => handleNavigate('/*')}>Home</li>
                            <li onClick={() => handleNavigate('/about')}>About</li>
                            <li onClick={() => handleNavigate('/packages')}>Services</li>
                            <li onClick={() => handleNavigate('/packages')}>Packages</li>
                            <ButtonComponent customClass="nav-btn" label="Get in Touch" width={"152px"} height={"58px"} onClick={openPopup} />
                            
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    );
}

export default NavBar;

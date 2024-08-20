import React, { useState } from 'react';
import Close from '../assets/icon/close';
import TouePackage from '../layouts/data/Data.jsx';
import { useNavigate } from 'react-router-dom';

function PopupComponent({
  label,
  lableone,
  image,
  buttonlable,
  customClass,
  width,
  height,
  onClick,
  isOpen,
  closePopup
}) {
  const [country, setCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [people, setPeople] = useState(1);
  const interests = [
    'Culture', 'Romantic', 'Shopping', 'Traditions', 'Guide', 'Outdoors',
    'Religious', 'Business', 'Walks', 'Healthcare', 'Relaxing', 'Hiking',
    'Museums', 'Fishing', 'Accommodation', 'Wildlife', 'Musical',
    'Party', 'Cruise'
  ];
  const [checkboxes, setCheckboxes] = useState(new Array(interests.length).fill(false));

  const navigate = useNavigate();
  const handleNavigate = (path) => {
      navigate(path);
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ country, startDate, endDate, people, checkboxes });

    setCountry('');
    setStartDate('');
    setEndDate('');
    setPeople(1);
    setCheckboxes(new Array(interests.length).fill(false));

    closePopup();
  };

  // Find the selected tour package based on the selected country/place
  const selectedPackage = TouePackage.find(pkg => pkg.name === country);

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="popup-box">
            <div className={`content ${customClass}`} style={{ width, height }}>
              <h1 className="six-textcolour">Build Your Own Package</h1>
              <div className="close-popup-btn">
                <button className="close-button" onClick={closePopup}>
                  <Close />
                </button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className='form-head' htmlFor="country">Enter destination (country, region or city)</label>
                  <select
                    className='opyion'
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Place...</option>
                    {TouePackage.map(pkg => (
                      <option className='opyion2' key={pkg.id} value={pkg.name}>
                        {pkg.name}
                      </option>
                    ))}
                  </select>
                </div>

                <h4 className='h4-i'>+ Add destination</h4>

                {selectedPackage && (
                  <div className='date-flex'>
                    <div className="form-group-1">
                      <label>Date Range</label>
                      <p>{selectedPackage.days}➜</p>
                    </div>
                    <div className="form-group-2">
                      <label>People Going:</label>
                      <p>{selectedPackage.people}</p>
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label className='Activities'>Activities preferences (optional)</label>
                  <div className="checkbox">
                    {checkboxes.map((checked, index) => (
                      <div className='checkbox-flex' key={index}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => handleCheckboxChange(index)}
                          className="custom-checkbox"
                        />
                        <span className='checkbox-text'>{interests[index]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="btn-pop">
                <button onClick={() => handleNavigate('/packages')} className='btn-popup' type="submit">{buttonlable}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupComponent;

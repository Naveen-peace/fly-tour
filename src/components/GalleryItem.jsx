import React from 'react';


const GalleryItem = ({ imageSrc, altText, location, price }) => {
    return (
        <div className="gallery-item">
            <img src={imageSrc} alt={altText} />
            <div className="caption">
                <span>{location}</span>
                <span>{price}</span>
            </div>
        </div>
    );
};

export default GalleryItem;

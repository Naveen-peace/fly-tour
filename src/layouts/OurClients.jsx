import React from 'react'
import ChristineBeckam from '../assets/image/ChristineBeckam.png'
import TravelConcepts from '../assets/image/TravelConcepts.png'



function OurClients() {
  return (
    <section className='ourclient'>
      <div className="container">
        <div className="ourclient-head">
          <h5>Promotion</h5>
          <h2>See What Our Clients Say About Us</h2>

          <div className="OurClients-slider">
            <div className="OurClients-box">
              <p>Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.</p>
              <h4>Christine Beckam - Designer</h4>
              <div className="OurClients-box-img">
              <img src={ChristineBeckam} alt="img" />
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="ourclient-smallimg">
        <img src={TravelConcepts} alt="img" />
      </div>
    </section>
  )
}

export default OurClients
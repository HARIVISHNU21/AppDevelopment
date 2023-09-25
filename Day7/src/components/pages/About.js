import React from 'react'
import "./About.css"
import Topbar from '../Layout/Topbar'


function About() {
  return (
    <>
        <div className="about-container">
            <Topbar/>
            <div className="about-head">
                <h3 className='about-head-info'>
                Welcome to the Urban Noise Pollution Tracker, your go-to resource for monitoring and managing noise pollution in urban environments. Our mission is to create healthier and more peaceful cities by providing individuals, communities, and city planners with the tools and information they need to address the growing issue of noise pollution.
                </h3>
                <h1 className='about-vision'>
                Our MissionAt Urban Noise Tracker, our mission is clear: to provide individuals, communities, and city planners with the tools and insights they need to understand, control, and reduce urban noise pollution. We believe that every person deserves the right to live and work in a peaceful environment, and we're dedicated to making this a reality.
                </h1>
                <h3 className='about-vision-info'>
                

What We Offer

Real-time Noise Monitoring: Our cutting-edge technology allows you to monitor noise levels in real-time, helping you stay informed about the noise in your surroundings.

Historical Data Analysis: Gain insights into noise patterns and trends over time, enabling you to make informed decisions about when and where to avoid excessive noise.

Community Engagement: Connect with your neighbors and local authorities to collectively address noise issues in your area. Share your concerns, propose solutions, and work together for a quieter neighborhood.

City Planning Support: We provide valuable data and analytics to city planners, helping them make informed decisions to reduce noise pollution and create more livable urban environments.

Our Commitment

At Urban Noise Tracker, we are committed to:

Accuracy: Providing accurate and reliable noise data to empower individuals and communities.

Privacy: Safeguarding your data and ensuring your privacy is our top priority.

                </h3>
            </div>
        </div>
    </>
  )
}

export default About
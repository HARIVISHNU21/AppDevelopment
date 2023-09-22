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
                Our Vision: Quieter, Healthier Cities
                </h1>
                <h3 className='about-vision-info'>
                We envision a future where cities are quieter, contributing to improved well-being for all residents. Through awareness, data, and community action, we aim to reduce noise pollution, creating urban environments where people can live, work, and thrive in peace and quiet.
                </h3>
            </div>
        </div>
    </>
  )
}

export default About
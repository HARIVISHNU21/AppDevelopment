import React, { useState, useEffect } from "react";
import Topbar from "../Layout/Topbar";
import "./Dashboard.css"; // Import the CSS file

function Dashboard() {
  const imageUrls = [
    'https://tse4.mm.bing.net/th?id=OIP.SCPWhH3hne7cfH9FbzMJpgHaFj&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.aTLmqfBLCv8BG2pEZRCUGAHaE8&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.1y3_2fK11XQVNMIch8z7LwHaE9&pid=Api&P=0&w=300&h=300',
    'https://tse2.mm.bing.net/th?id=OIP.EJG7YxSg1PFIXfWUQAULFQHaEK&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.gFlj3I7P_hKPFCXQIlDSZwHaEK&pid=Api&P=0&h=180',
    'https://tse2.mm.bing.net/th?id=OIP.ZpyiIX873gtSYnvRL4a-TwHaEr&pid=Api&P=0&h=180',
  ];
  
  const imageDetails = [
    {
      name: "MACHINERY SOUNDS",
      description: "A generator is a machine that turns mechanical energy into electricity. It has a spinning part (rotor) and a stationary part (stator). When the rotor spins, it creates a magnetic field that induces an electrical current in the coils of the stator, following the principle of electromagnetic induction. This current is the electricity produced by the generator. Generators can produce either alternating current (AC) or direct current (DC) electricity, depending on the design. They are used for backup power during outages, in power plants, and in various machines and appliances. Generators come in different sizes and types, such as gasoline-powered portable generators and large industrial generators. They play a crucial role in ensuring a steady supply of electricity when needed.",
      noiselevel : "Generator noise levels can range from 50-85+ decibels, depending on the type and size, with smaller models being quieter and larger industrial generators being louder.",
      tracker : "https://www.spectotechnology.com/product/sonitus-sonisens-indoor-sound-level-monitoring-system-class-1-with-4g/" ,
      Steps_to_minimize: "Perform regular maintenance to address loose parts and worn components,Install soundproofing materials like acoustic panels and barriers,Isolate machinery using vibration isolators or rubber mounts",
      feedback : "",
      complaint : "",
    },
    {
      name: "",
      description: "",
      noiselevel : "",
      tracker : "" ,
      Steps_to_minimize: "",
      feedback : "",
      complaint : "",
    },
    {
      name: "",
      description: "",
      noiselevel : "",
      tracker : "" ,
      Steps_to_minimize: "",
      feedback : "",
      complaint : "",
    },
    {
      name: "",
      description: "",
      noiselevel : "",
      tracker : "" ,
      Steps_to_minimize: "",
      feedback : "",
      complaint : "",
    },
    {
      name: "",
      description: "",
      noiselevel : "",
      tracker : "" ,
      Steps_to_minimize: "",
      feedback : "",
      complaint : "",
    },
    {
      name: "Image 1",
      description: "",
      noiselevel : "",
      tracker : "" ,
      Steps_to_minimize: "",
      feedback : "",
      complaint : "",
    },
    
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [location, setLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [noiseLevel, setNoiseLevel] = useState(0);
  const [isTracking, setIsTracking] = useState(false);
  const [isAudible, setIsAudible] = useState(false);

  const handleButtonClick = (index) => {
    setSelectedImageIndex(index);
  };
  const goToSettings = () => {
  };

  // Simulate noise level data (replace with actual data retrieval)
  useEffect(() => {
    const noiseDataInterval = setInterval(() => {
      const randomNoiseLevel = Math.floor(Math.random() * 101); // Simulated noise level between 0 and 100 dB
      setNoiseLevel(randomNoiseLevel);

      // Determine if noise is audible (e.g., above a threshold of 50 dB)
      setIsAudible(randomNoiseLevel > 50);
    }, 5000); // Update noise level every 5 seconds

    return () => {
      clearInterval(noiseDataInterval);
    };
  }, []);

  // Start or stop noise tracking
  const toggleTracking = () => {
    setIsTracking(!isTracking);
    // Implement noise tracking logic here
  };

  useEffect(() => {
    // Use the Geolocation API to get the user's location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  }, []);

  return (
    <>
      <Topbar />

      <div className="main-wrapper">
        <div className="app-title">
          <h1>Urban Noise Pollution Tracker</h1>
          {location ? (
            <p>
              Your Location: {location.latitude}, {location.longitude}
            </p>
          ) : (
            <p>Loading location...</p>
          )}
        </div>

        <div className="noise-info">
          <div className="noise-level-box">
            <h2>Noise Level (dB)</h2>
            <p>{noiseLevel}</p>
          </div>
          <p>{isAudible ? "Audible to Humans" : "Not Audible to Humans"}</p>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Implement search functionality here */}
        </div>

        <div className="track-button">
          <button onClick={toggleTracking}>
            {isTracking ? "Stop Tracking" : "Start Tracking"}
          </button>
        </div>

        <div className="map-container">
          {/* Integrate a map component to visualize noise pollution data */}
        </div>
        <div className="image-gallery">
          <div className="images">
            {imageUrls.map((imageUrl, index) => (
              <div key={index} className="image-container">
                <img src={imageUrl} alt={`Image ${index + 1}`} />
                <button onClick={() => handleButtonClick(index)}>Show Details</button>
              </div>
            ))}
          </div>
          {selectedImageIndex !== null && (
            <div className='image-details'>
              <h2>{imageDetails[selectedImageIndex].name}</h2>
              <p>Description : {imageDetails[selectedImageIndex].description}</p>
              <p>Noise Level : {imageDetails[selectedImageIndex].noiselevel}</p>
              <p>Noise Tracker : {imageDetails[selectedImageIndex].tracker}</p>
              <p>Steps to Minimize : {imageDetails[selectedImageIndex].Steps_to_minimize}</p>
              <p>Feedback : {imageDetails[selectedImageIndex].feedback}</p>
              <p>Complaint : {imageDetails[selectedImageIndex].complaint}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;

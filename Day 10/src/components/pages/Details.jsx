import React from "react";
import { useParams } from "react-router-dom";
import './Details.css'
function DetailsPage() {

  const imageDetails = [
    {
      name: "MACHINERY SOUNDS",
      description: "A generator is a machine that turns mechanical energy into electricity. It has a spinning part (rotor) and a stationary part (stator). When the rotor spins, it creates a magnetic field that induces an electrical current in the coils of the stator, following the principle of electromagnetic induction. This current is the electricity produced by the generator. Generators can produce either alternating current (AC) or direct current (DC) electricity, depending on the design. They are used for backup power during outages, in power plants, and in various machines and appliances. Generators come in different sizes and types, such as gasoline-powered portable generators and large industrial generators. They play a crucial role in ensuring a steady supply of electricity when needed.",
      noiselevel : "Generator noise levels can range from 50-85+ decibels, depending on the type and size, with smaller models being quieter and larger industrial generators being louder.",
      tracker : "SONITUS-SONISENS INDOOR SOUND LEVEL MONITORING SYSTEM" ,
      Steps_to_minimize: "Perform regular maintenance to address loose parts and worn components,Install soundproofing materials like acoustic panels and barriers,Isolate machinery using vibration isolators or rubber mounts",
      feedback : "",
      complaint : "",
    },
    {
      name: "CONSTRUCTION SOUNDS",
      description: "Construction sites reverberate with a symphony of sounds that narrate the story of progress. The relentless clanging of metal tools and the rhythmic pounding of hammers echo the unwavering determination of builders, forging new foundations that will shape the future. Massive machinery roars to life, sculpting the earth's canvas into towering structures that touch the sky. Amidst the cacophony, saw blades whir and concrete mixers churn, transforming raw materials into the bricks and mortar of tomorrow's world. In this orchestrated chaos, the marriage of labor and vision takes place, crafting architectural dreams into tangible reality. Each sound, each note in this construction symphony, encapsulates human ingenuity and the unyielding drive to build a brighter and better future.",
      noiselevel : "Construction sites often generate noise levels exceeding 85 decibels (dB), requiring hearing protection for workers to prevent hearing damage. Effective noise mitigation measures and compliance with local regulations are crucial to minimize disturbances to nearby communities. Regular monitoring using sound meters helps maintain adherence to noise guidelines.",
      tracker : "SOUND LEVEL TRACKER" ,
      Steps_to_minimize: "To minimize construction sounds effectively, consider the following steps: Firstly, use noise barriers like walls or curtains to confine and absorb sound. Secondly, establish designated quiet hours when noisy activities are minimized, reducing disturbances. Thirdly, select quieter equipment with noise-reduction features and conduct regular maintenance to minimize noise emissions. Lastly, schedule breaks for workers during quieter periods to help mitigate overall construction noise.",
      feedback : "",
      complaint : "",
    },
    {
      name: "FLIGHT SOUNDS",
      description: "Flight sounds encompass the symphony of engines roaring to life, creating a dynamic blend of whirring turbines and rushing air. As the aircraft ascends, a melodious chorus unfolds, punctuated by the rhythmic thud of landing gear retracting. Inside the cabin, a gentle hum soothes passengers, while outside, the wind's whispers harmonize with the aircraft's journey through the skies, crafting a symphony of aviation.",
      noiselevel : "Flight sounds vary depending on factors like aircraft type and phase of flight. During takeoff and landing, noise levels can reach well over 100 decibels (dB) near the runway. In-cabin noise during cruise typically ranges from 70 to 80 dB, with modern aircraft designed to minimize passenger discomfort.",
      tracker : "COCKPIT VOICE RECORDERS (CVRs) and FLIGHT DATA RECORDERS (FDRs)" ,
      Steps_to_minimize: "To minimize flight sounds, aircraft manufacturers employ advanced engine technology, quieter propulsion systems, and improved aerodynamics. These measures reduce noise during takeoff, landing, and cruise phases. Additionally, sound-absorbing materials within the aircraft's structure and cabin, coupled with noise abatement procedures during flight, collectively contribute to a quieter and more comfortable aviation experience for passengers and surrounding communities.",
      feedback : "",
      complaint : "",
    },
    {
      name: "TRAFFIC NOISE",
      description: "Traffic noise is the urban symphony of bustling cities and highways. It's the perpetual hum of engines, the staccato rhythm of honking horns, and the occasional crescendo of sirens. In this cacophony, the city's pulse is audible, as vehicles of all sizes traverse the streets, weaving together a sonic tapestry that characterizes modern urban life. Yet, amid the noise, there's a persistent energy, a reminder of the ceaseless motion and activity that define urban centers.",
      noiselevel : "Traffic noise levels in urban areas typically range from 70 to 85 decibels (dB) during peak hours along busy roads and highways, with variations based on factors like traffic volume and road conditions. In densely populated city centers, noise levels may exceed 85 dB, prompting the need for noise mitigation strategies.",
      tracker : "sound level meters (SLMs) noise dosimeters are commonly used. These devices measure sound intensity in decibels (dB) and can record data over time to assess noise levels in specific locations" ,
      Steps_to_minimize: "Minimizing traffic noise involves constructing noise barriers along roads, utilizing quieter road surfaces, such as porous asphalt, and implementing traffic management strategies like congestion reduction to reduce noise disturbances to nearby communities.",
      feedback : "",
      complaint : "",
    },
    {
      name: "SPEACKERS NOISE",
      description: "Speaker noise is the auditory manifestation of audio systems, producing a spectrum of sounds from music's melodies to the spoken word's clarity. It envelops listeners with immersive experiences, transporting them into diverse auditory realms. Whether in concert venues, home theaters, or portable devices, speaker noise is the conduit for human expression and artistic communication, enhancing our connection with sound in the digital age.",
      noiselevel : "The noise level of speaker noise varies widely, from around 60-70 dB for conversations to over 100 dB at rock concerts, potentially posing a risk to hearing health when at high volumes.",
      tracker : ", sound level meters (SLMs) or audio analyzers are commonly used. These devices are designed to capture and analyze the intensity of sound in decibels (dB),Sound level meters are essential tools for assessing the volume and quality of audio produced by speakers and audio systems." ,
      Steps_to_minimize: "Minimizing speaker noise can be achieved by carefully controlling the volume to suit the environment and audience, preventing excessive noise. Implementing soundproofing measures, like acoustic panels or insulation, helps to contain and reduce sound leakage. Strategic speaker placement directs sound appropriately and away from sensitive areas or neighboring spaces, contributing to a quieter and more considerate auditory environment.",
      feedback : "",
      complaint : "",
    },
    {
      name: "NOISE LEVEL TABLE",
      NoiselevelTables:"",
    },
    
  ];
  const { id } = useParams(); 
  const selectedImageIndex = parseInt(id, 10);

  const imageDetail = imageDetails[selectedImageIndex];

  if (!imageDetail) {
    return <div>Image not found</div>;
  }

  return (
    <div className="details-container">
    <h2 className="details-title">{imageDetail.name}</h2>
    <p className="details-description">Description: {imageDetail.description}</p>
    <p className="details-noise-level">Noise Level: {imageDetail.noiselevel}</p>
    <p className="details-tracker">Noise Tracker: <a href={imageDetail.tracker} target="_blank" rel="noopener noreferrer">{imageDetail.tracker}</a></p>
    <p className="details-minimize-steps">Steps to Minimize: {imageDetail.Steps_to_minimize}</p>
    <p className="details-feedback">Feedback: <input></input></p>
    <p className="details-complaint">Complaint: <input></input></p>
    <button>submit</button>
  </div>
  
  );
}

export default DetailsPage;

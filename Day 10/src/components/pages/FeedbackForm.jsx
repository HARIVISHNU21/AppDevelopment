import React, { useState } from 'react';
import './FeedbackForm.css'

import Footer from './Footer';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';



function FeedbackForm() {
  const [name, setName] = useState('');
  const [cleanliness, setCleanliness] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [service, setService] = useState(0);
  const [valueForMoney, setValueForMoney] = useState(0);
  const [comments, setComments] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <>
    <br/>
    <div className='feedback'>
    <div className="feedback-container">
      <h1 className="feedback-title">Feedback Form</h1>
      <form onSubmit={handleFormSubmit} className="feedback-form">
        <label className="feedback-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="feedback-input"
          />
        </label>

        <h3 className="satisfaction-title">Satisfaction Scale (1 to 5):</h3>

        <label className="feedback-label">
          Accessibility:
          <Stack spacing={1}>
          <Rating
            name="custom-star-color"
            defaultValue={0}
            precision={1}
            IconContainerComponent={StarIcon}
            emptyIcon={<StarIcon style={{ color: 'grey' }} />} 
            icon={<StarIcon style={{ color: 'gold' }} />} 
        />
        </Stack>
        </label>

        <label className="feedback-label">
          Comfort:
          <Stack spacing={1}>
          <Rating
            name="custom-star-color"
            defaultValue={0}
            precision={1}
            IconContainerComponent={StarIcon}
            emptyIcon={<StarIcon style={{ color: 'grey' }} />} 
            icon={<StarIcon style={{ color: 'gold' }} />} 
        />
        </Stack>
        </label>

        <label className="feedback-label">
          Service:
          <Stack spacing={1}>
          <Rating
            name="custom-star-color"
            defaultValue={0}
            precision={1}
            IconContainerComponent={StarIcon}
            emptyIcon={<StarIcon style={{ color: 'grey' }} />} 
            icon={<StarIcon style={{ color: 'gold' }} />} 
        />
        </Stack>
        </label>
        <label className="feedback-label">
        Amenities:
        <Stack spacing={1}>
        <Rating
          name="custom-star-color"
          defaultValue={0}
          precision={1}
          IconContainerComponent={StarIcon}
          emptyIcon={<StarIcon style={{ color: 'grey' }} />} 
          icon={<StarIcon style={{ color: 'gold' }} />} 
      />
      </Stack>
      </label>
        <label className="feedback-label">
          Comments:
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="feedback-textarea"
          />
        </label>

        <button type="submit" className="submit-button">Submit</button>
        {isRegistered && (
          <div className="success-popup">
            <div className="success-popup-content">
              <h3>Submitted Successfully</h3>
              <Link to='/home'><button className='btn1'>Done</button></Link>
            </div>
          </div>
        )}
      </form>
    </div>
    <br/>
    </div>
    </>
  );
}

export default FeedbackForm;
import React, { useState } from 'react';

function SubscribeButton() {
    const [subscribed, setSubscribed] = useState(false);
    const [email, setEmail] = useState('');
  
    const handleSubscribeClick = () => {
      if (email.trim() !== '' && email.includes('@') && email.split('@')[1].length > 0 
      && email.includes('.') && email.split('.')[1].length > 0) {
        setSubscribed(true);
      } else {
        alert('Please enter a valid email address.');
      }
    };

  return (
    <div>
      {!subscribed ? (

<div>
<input
  className='footer-input'
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
        <button className='subbtn' onClick={handleSubscribeClick}>
          Subscribe
        </button>
        </div>
      ) : (
        <h2 className='response'>Thank you for subscribing!</h2>
      )}
    </div>

   
       
  );
}

export default SubscribeButton;
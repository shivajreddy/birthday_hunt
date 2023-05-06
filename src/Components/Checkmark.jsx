import React from 'react';

const Checkmark = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="green">
        <path d="M9 16.17l-3.59-3.58L4 14l5 5 10-10-1.41-1.42L9 16.17z"/>
      </svg>
    </div>
  );
};

export default Checkmark;

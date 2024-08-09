import React, { useState } from 'react';

const DisplayName = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        

        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: '200px' }}
            required
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: '200px' }}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      
      {fullName && (
        <div style={{ marginTop: '20px' }}>
          <span>Full Name: </span>
          <span>{fullName}</span>
        </div>
      )}
    </div>
  );
};

export default DisplayName;

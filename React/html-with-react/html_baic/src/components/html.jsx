import React, { useState } from 'react';

const MyForm = () => {
  // Step 1: Define state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Name: ${name}\nEmail: ${email}`);
    // You can send data to a backend here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </div>

      <div>
        <label>Email: </label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
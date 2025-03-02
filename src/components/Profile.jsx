import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Petr Kroutil',
    age: 10,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value, // Convert age to number
    }));
  };

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.age}</p>
      <form>
        <h2>Change Profile</h2>
        <input
          type='text'
          name='name'
          value={profile.name}
          onChange={handleChange}
        />
        <input
          type='number'
          name='age'
          value={profile.age}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Profile;

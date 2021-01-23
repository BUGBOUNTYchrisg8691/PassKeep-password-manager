import React, { useState } from 'react';

const initialFormVals = {
  username: "",
  password: "",
};

export default function Signin() {
  const [getFormVals, setFormVals] = useState(initialFormVals);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormVals(initialFormVals);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVals({
      ...getFormVals,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            value={getFormVals.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={getFormVals.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

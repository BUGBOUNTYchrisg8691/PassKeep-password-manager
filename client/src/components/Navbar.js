import React from 'react';

import { useHistory } from 'react-router';

export default function Navbar() {
  const { push } = useHistory();

  return (
    <div>
      {localStorage.getItem("token") ? (
        <div onClick={() => push("/dashboard")}>Home</div>
      ) : (
        <div onClick={() => push("/")}>Home</div>
      )}
      <div onClick={() => push("/signup")}>Sign Up</div>
      {localStorage.getItem("token") && (
        <div onClick={() => push("/")}>Logout</div>
      )}
    </div>
  );
}

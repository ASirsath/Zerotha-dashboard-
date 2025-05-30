import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    // Clear token logic (if stored somewhere like localStorage or state)
    // Redirect to frontend login page
    window.location.href = "http://localhost:3000/login";
  }, []);

  return <p>Logging out...</p>;
};

export default Logout;

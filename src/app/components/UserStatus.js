import React from "react";

const UserStatus = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <p>Please Log in to continue</p>
      )}
    </div>
  );
};

export default UserStatus;

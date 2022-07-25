import React from "react";

const UserDetails = ({ details }) => {
  return (
    <div>
      <h2 className="card--name">
        {details.firstName} {details.lastName}
      </h2>
      <p className="card--contact">{details.phone}</p>
      <p className="card--contact">{details.email}</p>
    </div>
  );
};

export default UserDetails;

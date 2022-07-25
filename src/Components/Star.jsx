import React from "react";
import starEmpty from "../images/star-empty.png";
import starFilled from "../images/star-filled.png";

const Star = ({ contact, onClick }) => {
  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  return (
    <div>
      <img className="card--favorite" src={starIcon} onClick={onClick} alt="" />
    </div>
  );
};

export default Star;

import React from "react";
import user from "../images/user.png";
import User2 from "../images/user2.jpeg"


const UserImage = ({contact, onClick}) => {
  //FLIPING THE IMAGE BY CLICKING ON THE IMAGE
  // let UserIcon = contact.isFavoriteImage ? User2 : user;

  //FLIPING THE IMAGE BY CLICKING ON THE STAR
  let UserIcon = contact.isFavorite ? User2 : user;
  return <img src={UserIcon} className="card--image"  onClick={onClick}/>;
};

export default UserImage;

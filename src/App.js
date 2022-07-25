import React from "react";
import "./App.css";
import User from "./Components/UserImage";
import UserDetails from "./Components/UserDetails";
import Star from "./Components/Star";

const App = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
    isFavoriteImage: false,
  });

  const toggleFavorite = () => {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  };
  const toggleFavoriteImage = () => {
    setContact((prevContact) => ({
      ...prevContact,
      isFavoriteImage: !prevContact.isFavoriteImage,
    }));
  };
  return (
    <main>
      <article className="card">
        <User contact={contact} handleClick={toggleFavoriteImage}/>
        <div className="card--info">
          <Star contact={contact} handleClick={toggleFavorite} />
          <UserDetails details={contact} />
        </div>
      </article>
    </main>
  );
};

export default App;

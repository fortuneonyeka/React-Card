import React from "react"
import './App.css';
import starEmpty from "./images/star-empty.png"
import starFilled from "./images/star-filled.png"
import user from "./images/user.png"

const App = () => {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
})

/**
 * Challenge: Move the star image into its own component
 * - It should receive a prop called `isFilled` that it
 *   uses to determine which icon it will display
 * - Import and render that component, passing the value of
 *   `isFavorite` to the new `isFilled` prop.
 * - Don't worry about the abiliity to flip this value quite yet.
 *   Instead, you can test if it's working by manually changing
 *   `isFavorite` in state above.
 */

let starIcon = contact.isFavorite ? starFilled : starEmpty

const toggleFavorite = () => {
    setContact(prevContact => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite
    }))
  }
  return (
    <main>
    <article className="card">
        <img src={user} className="card--image" />
        <div className="card--info">
            <img 
                src={`${starIcon}`} 
                className="card--favorite"
                onClick={toggleFavorite}
            />
            <h2 className="card--name">
                {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
        </div>
        
    </article>
</main>
  );
}


export default App;

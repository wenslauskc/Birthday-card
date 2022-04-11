import React, { useState } from 'react';

const Card = ({ people}) => {
    const [buttonText, setButtonText] = useState("Post"); 
  return(
    <>
      {people.map((person) =>{
          const {id, name, age, image} = person;
          return(
           <section key={id} className="person">
               <img src={image} alt={name} />
               <div>
                  <h4>{name}</h4>
                  <p>{age} years</p>
                  <div className="item">
                  <input type="text" className="message" placeholder="Type something here......."/>
                  <button className="send-btn">{buttonText}</button>
                  </div>
              </div>
            </section>
          );
      })}
    </>
  );
}

export default Card
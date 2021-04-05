import React from 'react';
import './mvp.css';


function Mvp(){

    return(
        
    <div className= "container">


    
    <div className= "second_box">
      This is a Professional networking site exclusively for legal Professionals. You would be able to message, discuss, share and receive valuable 
      legal knowldege ranging from articles to Job openings and trainings, easily and securely.<br></br>
      We are not yet launched and would love you to be part of this network. Please sign up if you feel the same.

      Thank you


    </div>

    <div className = "third_box">

      Email : 
      <input type = "email" className= "emailinput"></input>
      <button className= "btn-btn"type="submit" name="Submit">Submit</button>
    </div>

  </div>
    );
}

export default Mvp;
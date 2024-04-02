import React from 'react'
import "./home.css";
import I18n from '../../utils/I18n.js';

function Home() {
  // const userCount=100;

  return (

    
    <div>

      <h1>Rode to Code</h1>
      <h1>{I18n("welcomeMessage")}</h1>

      <p>{I18n("normalMessage")}</p>


      <h3>{I18n("greetingMessage")}</h3>



       
       

      <select defaultValue={localStorage.getItem("lang")} onChange={(e)=>{
        localStorage.setItem("lang", e.target.value);
        window.location.reload();
      }}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="mr">Marathi</option>
      </select>
    </div>
  )
}

export  default Home

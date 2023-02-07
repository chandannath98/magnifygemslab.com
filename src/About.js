import React from "react";
import blueD from "./blue-diamond.png"
const About = () => {
  return (
    <div id="aboutUs" className="abouUs" style={{ display: "flex", flexDirection: "row", alignItems: "center" ,flexWrap:"wrap"}}>
      <div style={{ flex:5, padding: "50px" }}>
        <h2>About Us</h2>
        <p>Magnify Gems Laboratory is a leading provider of gemstone analysis and certification services. Founded in 2015, we have been serving the gemstone industry with exceptional customer service and expertise. Our highly trained and experienced gemologists use state-of-the-art technology and analytical tools to provide accurate and reliable results. We are committed to upholding industry standards and ethical practices, and our clients trust us to provide comprehensive evaluations of their gemstones. Whether you are a gem trader, jewelry designer, or private collector, Magnify Gems Laboratory is your trusted partner for all your gemstone needs.</p>
        
      </div>
      <div style={{flex:3, padding: "50px" }}>
        <img id="buleD" src={blueD} alt="Diamond" />
      </div>
    </div>
  );
};

export default About;

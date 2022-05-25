import React from "react";
// import winestore from "../image/wineStore.jpg";

import "./SectionText.css";

const SectionText = () => {
  return (
    <div>
      <a href="https://1xbet.com/">
      <img 
        className="imgStavka"
        src="http://sun9-28.userapi.com/impf/UKBEiY3wzjvBaXlkdF09afnNJ-9wo-0SdRdEYg/UKZqSvUeiqM.jpg?size=1590x530&quality=95&crop=0,0,1590,530&sign=c03038ee4aeb70641e1805683c95810e&type=cover_group"
        alt=""
      />
      </a>
      <div className="sectionText">
        The best games on all leading platforms in all genres. List of the most
        popular games with release dates, reviews and descriptions,
      </div>
      <div className="sectionTextBlock">
        <div className="sectionTextOne">
          A former employee at GameStop is suing the US retailer for allegedly violating New York labour legislation.
          The former employee, Trevon Mack, filed the proposed action lawsuit on May 18 at the New York eastern district court, Polygon reported.
        </div>
        <div className="sectionTextTwo">
          {" "}
          According to the lawsuit, GameStop employees qualify as "manual labourers" and as such should be paid every week, according to the New York Labor Law. Because the retailer pays its employees every other week, the lawsuit says it's violating said legislation.

        </div>
      </div>
    </div>
  );
};

export default SectionText;

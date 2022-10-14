import React from "react";

function Trip(props) {
  return (
    <div className="cards">
      <div className="card">
        <img
          className="card-img"
          src={props.img}
          alt="img"
        />
        <div className="where">
          <img
            className="location"
            src="./public/image/location.svg"
            alt="location"
          />
          <span className="city">{props.title}</span>
          <span className="maps">{props.mapsLink}</span>
          <h1 className="luogo">{props.location}</h1>
          <div className="text">
            <h5 className="when">{props.startDate + " - " + props.endDate}</h5>
            <p className="para">
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trip;
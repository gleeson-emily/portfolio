import React from 'react';

export default function Project(props) {
    return (
<div className="card projectCard">
  <div className="card-image projectImage">
      <img alt={props.pictureAltText} src={props.picture} />
  </div>
  <div className="card-content">
    <div className="block">
    <h4>{`${props.projectTitle}`}</h4>
    </div>
    <div className="block">
    <h5>Technologies Used: {`${props.projectTech}`}</h5>
    </div>
    <div className="block">
        <p>My Role: {`${props.myRole}`}</p>
    </div>
    <div className="block">
    <p>
    {`${props.projectDescription}`}
    </p>
    </div>
    <div className="block">
    <a href={props.githubLink} target="_blank">Github</a>
    </div> 
    <div className="block">
    <a href={props.deployedLink} target="_blank">Deployed</a>
    </div>
    </div>
    </div>
    )
}
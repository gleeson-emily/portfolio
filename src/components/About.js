import React from 'react'
import otherImgs from '../other-images/other-images.js'

//this will be the component with my headshot/about me section
//conditionally render when About tab is clicked

export default function About(){
    return (
    <div className="about block">
        <div className="block">
            <h3 className="text-format">About Me</h3>
            </div>
        <img className="headshot" alt="Headshot of Web Developer Emily Gleeson" src={otherImgs.headshot} />
        <div className="card aboutCard">
        <div className="block">
        <p>I'm an full-stack web developer currently based in Toronto, Ontario. I previously completed a Bachelor of Arts in Film Studies and a Master of Arts in Film Studies, both at Carleton University. After working in public relations for a few years, I recently completed a certificate in Full-Stack Web Development through the University of Toronto to take my career in a new direction.</p>
        </div>
        <div className="block">
        <p>Check out the Portfolio tab for some examples of my work, and my details are on the Contact tab if you want to get in touch.</p>
                </div>
             </div>
        <div className="block">
            <div className="card aboutCard">
            <h5>Technical Skills</h5>
            <br />
            <p className="skills"><i>Programming Languages:</i> HTML, CSS, JavaScript</p>
            <p className="skills"><i>Libraries and Frameworks:</i> jQuery, React, Express, Bootstrap, Bulma</p>
            <p className="skills"><i>Database and Back-End Management:</i> MySQL, MongoDB, GraphQL</p>
            <p className="skills"><i>Other Technologies:</i> Node.js, Git, Heroku, JWT Auth, Web APIs</p>
                </div>     
            </div>
        </div>
    )
}


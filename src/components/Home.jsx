import React from 'react';
import '../index.css';
import profileImage from '../assets/images/image.png';
import html from '../assets/images/html-5 (1).png';
import css from '../assets/images/css-3 (2).png';
import python from '../assets/images/icons8-python-48.png';
import C from '../assets/images/letter-c (1).png';
import javascript from '../assets/images/icons8-javascript-48.png';
import mongodb from '../assets/images/icons8-mongodb-48.png';
import react from '../assets/images/icons8-react-16.png';
import node from '../assets/images/icons8-node-js-48.png';
import sass from '../assets/images/icons8-sass-48.png';
import java from '../assets/images/icons8-java-48.png';
import mysql from '../assets/images/database.png'
import presql from '../assets/images/postgre.png'
 

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={profileImage} alt="Profile" className='myimage' />
        <h1>Welcome to my Portfolio ✌️✌️</h1>
        <p> Creating bugs since 2004</p>
<p>I'm currently learning DSA, Web Dev, AI/ML and other fancy words if exists</p>
<p>Fun fact: The first computer bug was a literal bug!</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I am a passionate developer with expertise in various technologies
          including Python, JavaScript, React, and more.
        </p>
      {/* </section>

      <section>
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Vena AI</h3>
          <p>
            A multi-functional AI tool with video creation, image generation,
            and code creation capabilities.
          </p>
        </div>
        <div className="project-card">
          <h3>Pdf.info</h3>
          <p>
            A tool that allows users to chat with PDFs, making document
            interaction intuitive.
          </p>
        </div>
      </section>

      <section> */}
      <div className="skills">
  <h2 className="text-3xl text-center mt-8 text-light-green">Skills</h2>
  <div className="grid grid-cols-4 gap-4 justify-items-center mt-8">
    <div className="skill-icon">
      <img src={html} alt="HTML" />
      
    </div>
    <div className="skill-icon">
      <img src={css} alt="CSS" />
      
    </div>
    <div className="skill-icon">
      <img src={sass} alt="Sass" />
      
    </div>
    <div className="skill-icon">
      <img src={python} alt="Python" />
    </div>
    <div className="skill-icon">
      <img src={C} alt="C" />
    </div>
    <div className="skill-icon">
      <img src={java} alt="Java" />
      <p>Java</p>
    </div>
    <div className="skill-icon">
      <img src={javascript} alt="JavaScript" />
    </div>
    <div className="skill-icon">
      <img src={react} alt="React" />
    </div>
    <div className="skill-icon">
      <img src={node} alt="Node" />
    </div>
    <div className="skill-icon">
      <img src={mongodb} alt="MongoDB" />
    </div>
    <div className="skill-icon">
      <img src={mysql} alt="MySQL" />
    </div>
    <div className="skill-icon">
      <img src={presql} alt="PostgreSQL" />

    </div>
  </div>
</div>

      </section>

    </div>
  );
}

export default App;

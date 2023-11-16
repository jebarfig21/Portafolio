// React Component
import React from 'react';
//import './Skills.css'; // Import your CSS file

const Skills = () => {
    return (
        <div className="skills-container">
          <div className="skills-card">
            <h2>Software Development Skills</h2>
            <ul>
              <li>Java</li>
              <li>C++</li>
              <li>HTML, CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>PHP</li>
              <li>SQL</li>
            </ul>
          </div>
          <br/>
    
          <div className="skills-card">
            <h2>Information Security Skills</h2>
            <ul>
              <li>Pentesting</li>
              <li>Incident Response</li>
              <li>Cloud Security AWS/GCP</li>
              <li>Firewall Administrator</li>
              <li>OSINT</li>
              <li>SOC Lead</li>
              <li>STRIDE/ Threat Intelligence</li>
            </ul>
          </div>
          <br/>
          <div className="skills-card">
            <h2>Computing Science Skills</h2>
            <ul>
              <li>Complexity (Big O notation)</li>
              <li>Algorithms</li>
              <li>Networks</li>
              <li>Concurrency</li>
              <li>Recursion</li>
            </ul>
          </div>
          <br/>
          <div className="skills-card">
            <h2>Other Skills</h2>
            <ul>
              <li>SCRUM, Agile</li>
              <li>Google Admin Workspace</li>
              <li>Team Work</li>
              <li>Leadership</li>
              <li>Proactive</li>
              <li>Remote Work</li>
            </ul>
          </div>
          <div className="skills-card">
            <h2>Education</h2>
            <ul>
    <li>UNAM
      <ul>
        <li>Faculty of Science, Computer Science, 2016-2020</li>
        <li>Technical accountant, 2015</li>
      </ul>
    </li>

    <li>CeroUno
      <ul>
        <li>Cybersecurity Diplomat, 2021</li>
      </ul>
    </li>

    <li>UCamp
      <ul>
        <li>Fullstack Bootcamp - Current</li>
      </ul>
    </li>

    <li>Google Qwiklabs
      <ul>
        <li>Create and Manage Cloud Resource GCP - 2021</li>
      </ul>
    </li>

    <li>Udemy
      <ul>
        <li>Google Cloud Platform (GCP) Cert: Associate Cloud Engineer, 2021</li>
        <li>Risk Management for Cybersecurity and IT Managers, 2021</li>
        <li>Scrum Certification Prep +Scrum Master+ Agile Scrum Training, 2021</li>
        <li>Website Hacking / Penetration Testing & Bug Bounty Hunting, 2021</li>
        <li>The Complete Social Engineering, Phishing, OSINT & Malware, 2021</li>
      </ul>
    </li>

   
    <li>Cisco
      <ul>
        <li>Introduction to Cybersecurity, 2020</li>
      </ul>
    </li>
            </ul>
          </div>
          <br/>
        </div>
      );
    };

export default Skills;

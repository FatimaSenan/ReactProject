import React from 'react';
import '../App.css';
import './FirstSection.css';
import { Reveal } from 'react-reveal';

function FirstSection(props) {
  return (
    <Reveal>
    <div className="hero-container">
        <video src='videos/video4.mp4' autoPlay loop muted />
        <h1>Let's go discover the world</h1>
        <p>What are you waiting for?</p>
        </div>
      </Reveal>
      );
      }
      export default FirstSection;
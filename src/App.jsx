import React, { useState } from 'react';
import './styles.css';

export default function App() {
  const [hover, setHover] = useState(null);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
      {/* Header */}
      <h1>James Corrett</h1>
      <h2>Self-Taught AI Engineer</h2>

      {/* Contact Info */}
      <div style={{ marginTop: '2rem', fontSize: '14px' }}>
        <h3>Contact Info</h3>
        <p>Email: <a href="mailto:jamescorrett@aol.com">jamescorrett@aol.com</a></p>
        <p>Phone: +44 7586323766</p>
      </div>

      {/* Interactive Squares for Projects and Info (8 total, 2 rows of 4) */}
      <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {/* Row 1: Projects */}
        <div
          className="square"
          onMouseEnter={() => setHover(1)}
          onMouseLeave={() => setHover(null)}
        >
          {hover === 1 ? 'Project 1' : 'Hover for Projects'}
        </div>
        <div
          className="square"
          onMouseEnter={() => setHover(2)}
          onMouseLeave={() => setHover(null)}
        >
          {hover === 2 ? 'Project 2' : 'Hover for Projects'}
        </div>
        <div
          className="square"
          onMouseEnter={() => setHover(3)}
          onMouseLeave={() => setHover(null)}
        >
          {hover === 3 ? 'Project 3' : 'Hover for Projects'}
        </div>
        <div
          className="square"
          onMouseEnter={() => setHover(4)}
          onMouseLeave={() => setHover(null)}
        >
          {hover === 4 ? 'Project 4' : 'Hover for Projects'}
        </div>

        {/* Row 2: Qualifications and Skills */}
        <div
          className="square"
          onMouseEnter={() => setHover(5)}
          onMouseLeave={() => setHover(null)}
        >
          {hover === 5 ? (
            <div className="centered-content">
              <p>University of London - BSc Computer Science (Ongoing)</p>
              <p>D'Overbroecks - A Level Mathematics, Economics, Business</p>
              <p>Python for Everybody Specialization, University of Michigan</p>
              <p>Mathematics for Machine Learning Specialization, Imperial College</p>
              <p>Deep Learning Specialization, Andrew Ng</p>
              <p>Full Stack Development Self-learning (Ongoing)</p>
            </div>
          ) : (
            'Skills & Qualifications'
          )}
        </div>
        <div
          className="square"
          onMouseEnter={() => setHover(6)}
          onMouseLeave={() => setHover(null)}
        >
          {hover === 6 ? 'Extra Info' : 'Hover for Extra Info'}
        </div>
        <div
          className="square"
          onMouseEnter={() => setHover(7)}
          onMouseLeave={() => setHover(null)}
        >
          {hover === 7 ? 'Extra Info' : 'Hover for Extra Info'}
        </div>
        <div
          className="square"
          onMouseEnter={() => setHover(8)}
          onMouseLeave={() => setHover(null)}
        >
          {hover === 8 ? 'Extra Info' : 'Hover for Extra Info'}
        </div>
      </div>
    </div>
  );
}

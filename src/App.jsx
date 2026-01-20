import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="logo-container">
          <img 
            src={`${import.meta.env.BASE_URL}lss-logo.png`}
            alt="London Skate School Logo" 
            className="logo"
          />
        </div>
        
        <h1 className="title">London Skate School</h1>
        <p className="subtitle">Website Coming Soon</p>
        <p className="description">
          We're preparing something amazing for you. 
          Book your lesson today!
        </p>
        
        <div className="links">
          <a
            href="https://goteamup.com/consumer_required/?next=/p/12201215-london-skate-school/c/schedule%3Fstartdate%3D2025-12-01%26enddate%3D2026-01-04%26venues%3D%26category%3D%26instructors%3D%26offering_types%3D%26age_restrictions%3D" 
            target="_blank"
            rel="noopener noreferrer"
            className="link booking-link"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5v-5z" fill="currentColor"/>
            </svg>
            Book a Lesson using TeamUp
          </a>

          <a 
            href="https://instagram.com/london.skate.school"
            target="_blank" 
            rel="noopener noreferrer"
            className="link instagram-link"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
            </svg>
            Follow @london.skate.school
          </a>
        </div>
      </div>
    </div>
  )
}

export default App

import React from 'react';
import { citiesList } from '../constants/mockData';
import './Home.css';


export function Home() {
  return (
    
    <div className='home-container'>
        <header className='header-container'>
            <div className='logo'>
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight: '10px'}}>
            <path d="M24.5 64.5C24.5 55.4 30.8 47.7 39.5 46.2C42.1 36.1 51.3 28.5 62 28.5C75.5 28.5 86.5 39.5 86.5 53C92.8 54.8 97.5 60.6 97.5 67.5C97.5 75.8 90.8 82.5 82.5 82.5H29.5C18.7 82.5 10 73.8 10 63C10 58.2 11.8 53.8 14.8 50.4" fill="aliceblue"/>
            <path d="M58 40L42 65H52L38 95L72 60H58L68 40H58Z" fill="#FFD600"/>
              </svg>
              Weather App
            </div>
            <input className='search-input' type="text" placeholder='Szukaj miasta...'/>
            <div className="user-actions">
  
  {/* Dzwonek */}
  <button className="icon-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  </button>

  {/* Ludzik */}
  <button className="icon-btn">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
    </svg>
  </button>

            </div>
        </header>

      <div className='home-display'>
        <div className='left-display'>
          <div className='main-display'></div>
          <div className='lower-display'>
            <div className='wind-display'></div>
            <div className='precipitation-display'></div>
            <div className='cloud-cover-display'></div>
          </div>
        </div>
        <div className="cities-display">
          <div className='cities-title'>
            <p>Zapisane lokalizacje</p>
            <button className='cities-button'>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
            </button>
          </div>
          <hr className='cities-divider' />
          <div className='cities'>
            {citiesList.map((miasto) => (
            <div key={miasto.id} className='city-card'>
              <h2> Miasto: {miasto.city} </h2> 
              <p>Temperatura: {miasto.temp} °C</p>
            </div>
            ))}
          </div>
        </div>
      </div>
      

    </div>
  );
}









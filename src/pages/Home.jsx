import React from 'react';
import { citiesList } from '../constants/mockData';
import './Home.css';
import { ForecastChart } from '../components/ForecastChart';


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
          <div className='main-display'>
            <div className='main-section-1'>
              <h1>Warszawa, Polska</h1>
              <p>Dziś, 17:00 · Słonecznie</p>
            </div>
            <div className='main-section-2'>
              <div className='main-section-2a'>
                <h1>22°</h1>
                <div className='main-weather-icon-section'>
                  <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="5" fill="#FFD700"/>
    
    <g stroke="#FFD700" stroke-width="2.5" stroke-linecap="butt">
        <path d="M12 2V5"/>
        <path d="M12 19V22"/>
        <path d="M2 12H5"/>
        <path d="M19 12H22"/>
        <path d="M4.93 4.93L7.05 7.05"/>
        <path d="M16.95 16.95L19.07 19.07"/>
        <path d="M4.93 19.07L7.05 16.95"/>
        <path d="M16.95 7.05L19.07 4.93"/>
    </g>
                  </svg>
                  <p>Odczuwalna 24°</p>
                </div>
              </div>
              <div className='main-section-2b'></div>
            </div>
            <hr />
            <div className='main-section-3'>
              <div className='forecast-chart'>
                <ForecastChart />
              </div>
            </div>
          </div>
          <div className='lower-display'>
            <div className='wind-display'>
              <div className='detail-title'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         {/* Grubsza, bardziej "pełna" ikona wiatru */}
         <path d="M13 13H7V11H13C14.66 11 16 9.66 16 8C16 6.34 14.66 5 13 5C11.34 5 10 6.34 10 8H8C8 5.24 10.24 3 13 3C15.76 3 18 5.24 18 8C18 10.76 15.76 13 13 13ZM17 19H7V17H17C18.66 17 20 15.66 20 14C20 12.34 18.66 11 17 11H15V9H17C19.76 9 22 11.24 22 14C22 16.76 19.76 19 17 19ZM7 15H4V13H7V15Z" />
                </svg>
                <p>WIATR</p>
              </div>
              <div>
                <div className='wind-info'>
                  <div className='detail-value'>
                    12 <span className='unit'>km/h</span>
                  </div>
                  <p className='small-detail-value'>Kierunek wiatru: NW</p>
                </div>
              </div>
            </div>
            <div className='precipitation-display'>
              <div className='detail-title'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  {/* Sama chmura - płaski spód */}
  <path d="M16.5 6C19.54 6 22 8.46 22 11.5C22 14.54 19.54 17 16.5 17H6C3.24 17 1 14.76 1 12C1 9.38 3.01 7.23 5.58 7.02C6.12 3.63 9.05 1 12.5 1C14.7 1 16.7 2.05 18 3.72C17.53 3.65 17.03 3.6 16.5 3.6V6Z" style={{transform: 'translateY(1px)'}}/> 
  {/* 3 Krople - pochylone kreski */}
  <path d="M8 19L6 23H8L10 19H8Z"/>
  <path d="M13 19L11 23H13L15 19H13Z"/>
  <path d="M18 19L16 23H18L20 19H18Z"/>
                </svg>
                <p>OPADY</p>
              </div>
              <div className='precipitation-info'>
                <p className='detail-value'>40%</p>
                <p className='small-detail-value'>Szansa na opady</p>
              </div>
              <p className='amount-precipitation'>Ilość opadów na mm: 22 l/m2</p>
            </div>
            <div className='cloud-cover-display'>
              <div className='detail-title'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
         {/* Solidny kształt chmury i solidne kształty kropel */}
         <path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 0 .03.23.08.69C3.45 9.2 2 11.4 2 14c0 3.31 2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6V8zm-7 12h-2v-3h2v3zm3 0h-2v-3h2v3zm3 0h-2v-3h2v3z"/>
                </svg>
                <p>ZACHMURZENIE</p>
              </div>
              <p className='detail-value'>65%</p>
              <p className='small-detail-value'>Widoczność: 8km</p>
            </div>
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









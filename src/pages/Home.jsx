import React from 'react';
import { citiesList } from '../constants/mockData';
import './Home.css';
import { ForecastChart } from '../components/ForecastChart';
import { 
  LogoIcon, BellIcon, UserIcon, SunMainIcon, 
  WindIcon, RainIcon, CloudIcon, PlusIcon 
} from '../components/Icons';


export function Home() {
  return (
    
    <div className='home-container'>
        <header className='header-container'>
            <div className='logo'>
              <LogoIcon />
              Weather App
            </div>
            <input className='search-input' type="text" placeholder='Szukaj miasta...'/>
            <div className="user-actions">
  
  
  <button className="icon-btn">
    <BellIcon />
  </button>

  
  <button className="icon-btn">
    <UserIcon />
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
                  <SunMainIcon />
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
                <WindIcon />
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
                <RainIcon />
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
                <CloudIcon />
                <p>ZACHMURZENIE</p>
              </div>
              <p className='detail-value'>65%</p>
              <p className='small-detail-value'>Widoczność: 8km</p>
            </div>
          </div>
        </div>
        <div className="cities-display">
          <div className='cities-header'>
            <p>Zapisane lokalizacje</p>
            <button className='cities-button'>
              <PlusIcon />
            </button>
          </div>
          <hr className='cities-divider' />
          <div className='cities'>
            {citiesList.map((miasto) => (
            <div key={miasto.id} className='city-card'>
              <div className='left-side-card'>
                
                <div>
                  <h2 className='city-name'>{miasto.city}</h2> 
                  <p className='small-detail-value'>{miasto.weather}</p>
                </div>
              </div>
              <div className='right-side-card'>
                <p className='city-temp'>{miasto.temp}°</p>
                <p className='small-detail-value'>H:{miasto.hTemp}° L:{miasto.lTemp}°</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
      

    </div>
  );
}









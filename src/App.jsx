import React, { useState } from 'react';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  // Simulated weather data lookup
  const searchWeather = (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    // Mock data based on search to simulate a real weather API
    const mockData = {
      temp: "72°F",
      condition: "Partly Cloudy",
      humidity: "45%",
      wind: "8 mph",
      icon: "⛅"
    };
    setWeather(mockData);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>🌤️ SkyForecast</h1>
      
      <form onSubmit={searchWeather} style={{ marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Enter city name..." 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: '10px 15px', width: '65%', borderRadius: '5px 0 0 5px', border: '1px solid #ccc', outline: 'none', fontSize: '16px' }}
        />
        <button 
          type="submit"
          style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '0 5px 5px 0', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}
        >
          Search
        </button>
      </form>

      {weather && (
        <div style={{ background: '#f8f9fa', border: '1px solid #dee2e6', borderRadius: '10px', padding: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h2 style={{ margin: '0 0 10px 0', color: '#495057', textTransform: 'capitalize' }}>{city}</h2>
          <div style={{ fontSize: '64px', margin: '10px 0' }}>{weather.icon}</div>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#212529', margin: '10px 0' }}>{weather.temp}</p>
          <p style={{ fontSize: '18px', color: '#6c757d', marginBottom: '20px' }}>{weather.condition}</p>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #dee2e6', paddingTop: '15px', color: '#495057' }}>
            <div>
              <strong>Humidity:</strong> <br />{weather.humidity}
            </div>
            <div>
              <strong>Wind:</strong> <br />{weather.wind}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
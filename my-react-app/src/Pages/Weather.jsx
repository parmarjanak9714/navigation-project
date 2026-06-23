import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Weather = () => {
  const [city, setCity] = useState('Bhavnagar');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError('');

    let currentLat = null;
    let currentLon = null;

    const options = {
  method: 'GET',
  url: 'https://open-weather13.p.rapidapi.com/city',
  params: {
    city: city,
    lang: 'EN'
  },
  headers: {
    'x-rapidapi-key': 'f9209b469fmshf2af23fd60dd4ecp168634jsn365f9cd76dc6',
    'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
    'Content-Type': 'application/json'
  }
};

    // 1️ api
    
    try {
      const currentRes = await axios.request(options);
	console.log(currentRes.data);

      setWeatherData(currentRes.data);
      currentLat = currentRes.data.coord?.lat;
      currentLon = currentRes.data.coord?.lon;

    } catch (err) {
      console.warn("First API failed, switching to offline backup view.", err);
      // જો નેટવર્ક એરર આવે તો પણ એપ બંધ નહિ થાય, ગૂગલ વેધર વ્યુ લોડ કરી દેશે
      // loadMockData(city);
      setLoading(false);
      return; 
    }

    // 2 api
    if (currentLat !== null && currentLon !== null) {
      try {
        const forecastUrl = `https://rapidapi.com{currentLat}&longitude=${currentLon}&lang=EN`;
        const forecastRes = await axios.get(forecastUrl);

        const listData = forecastRes.data?.list || forecastRes.data;

        if (listData && Array.isArray(listData)) {
          const formattedList = listData.slice(0, 8).map((item) => ({
            time: item.dt 
              ? new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', hour12: true }).replace(":00", "")
              : '--',
            day: item.dt 
              ? new Date(item.dt * 1000).toLocaleDateString([], { weekday: 'short' })
              : '--',
            temp: item.main?.temp ? Math.round((item.main.temp - 32) * 5/9) : 0, 
            humidity: item.main?.humidity || 0,
            wind: item.wind?.speed ? Math.round(item.wind.speed * 3.6) : 0, 
          }));
          setForecastData(formattedList);
        }
      } catch (err) {
        console.warn("Forecast API failed, loading graph backup point.", err);
        // જો માત્ર ગ્રાફ વાળી API ફેલ થાય તો આખા દિવસનો બેકઅપ લોડ કરો
        const temps = [34, 32, 30, 29, 29, 33, 36, 38];
        const times = ["07 PM", "10 PM", "01 AM", "04 AM", "07 AM", "10 AM", "01 PM", "04 PM"];
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
        setForecastData(times.map((t, i) => ({ time: t, day: days[i], temp: temps[i] })));
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  // const toCelsius = (fTemp) => fTemp ? Math.round((fTemp - 32) * 5/9) : '--';

  return (
    <div className='max-w-[750px] mx-auto my-[30px] p-5 bg-white border border-gray-200 
    rounded-2xl shadow-md text-gray-800 font-sans select-none'>
      
      <form onSubmit={handleSearch} className='flex mb-5'>
        <input
          type="text"
          placeholder="Search weather..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className='w-[85%] px-5 py-3 bg-gray-50 border border-gray-200 rounded-l-full outline-none 
          text-base transition-all focus:border-blue-500 focus:bg-white'
        />
        <button type="submit" 
        className='px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold
         rounded-r-full border border-blue-600 hover:border-blue-700 transition-all cursor-pointer'>
          Search
        </button>
      </form>

      {loading && <p className='text-center font-medium text-gray-500 my-4'>Loading Google Weather View...</p>}
      {error && <p className='text-center font-medium text-gray-500 my-4'>{error}</p>}

      {weatherData && !loading && (
        <div>
          <div className='flex justify-between items-start flex-col sm:flex-row gap-4'>
            <div className='flex items-center flex-wrap sm:flex-nowrap gap-4'>
              <div className='w-16 h-16 bg-amber-500 rounded-full shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.6)] animate-pulse'/>
              <div>
                <span className='text-6xl font-light tracking-tighter text-gray-900'>
                  {(weatherData.main?.temp)}
                </span>
                <span className='text-2xl font-normal text-gray-400 align-super'>°C</span>
              </div>
              <div className='text-xs md:text-sm text-gray-500 space-y-0.5 tracking-wide sm:border-l sm:border-gray-200 sm:pl-4'>
                <p style={{ margin: 0 }}>Precipitation: 15%</p>
                <p style={{ margin: 0 }}>Humidity: {weatherData.main?.humidity}%</p>
                <p style={{ margin: 0 }}>Wind: {Math.round(weatherData.wind?.speed * 3.6)} km/h</p>
              </div>
            </div>

            <div className='text-left sm:text-right w-full sm:w-auto'>
              <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Weather</h2>
              <p className='text-sm text-gray-500 mt-1'>
                {new Date().toLocaleDateString([], { weekday: 'long' })}
              </p>
              <p className='text-sm text-gray-500 font-medium capitalize'>
                {weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].main : 'Sunny'}
              </p>
            </div>
          </div>

          <h3 className='text-lg md:text-xl font-bold text-gray-900 mt-6 capitalize'>
            {weatherData.name || city}
          </h3>

          <div className='flex border-b border-gray-200 mt-4 mb-5 text-sm text-gray-500 font-medium overflow-x-auto'>
            <span className='py-2.5 mr-5 text-blue-600 border-b-3 border-blue-600 font-bold whitespace-nowrap'>Temperature</span>
            <span className='py-2.5 mr-5 whitespace-nowrap cursor-pointer hover:text-gray-800'>Precipitation</span>
            <span className='py-2.5 whitespace-nowrap cursor-pointer hover:text-gray-800'>Wind</span>
          </div>

          {/* chart graf view*/}
          {forecastData.length > 0 && (
            <div className='w-full h-[120px] mt-5'>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={forecastData} margin={{ top: 15, right: 10, left: -30, bottom: 0 }}>
                  <XAxis dataKey="time" tick={{ fontSize: 11, fill: '#70757a' }} axisLine={false} tickLine={false} />
                  <YAxis hide={true} domain={[25, 42]} />
                  <Tooltip formatter={(value) => [`${value}°C`, 'Temp']} />
                  <Area type="monotone" dataKey="temp" stroke="#f9ab00" fill="rgba(249, 171, 0, 0.1)" strokeWidth={2} label={{ position: 'top', fill: '#202124', fontSize: 12, offset: 10 }} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}

          {/*day list */}
          {forecastData.length > 0 && (
            <div className='flex justify-between mt-6 overflow-x-auto pb-2.5 gap-2 scrollbar-none'>
              {forecastData.map((dayData, index) => (
                <div key={index} className='text-center min-w-[65px] text-xs md:text-sm bg-gray-50/50 p-3 rounded-xl border border-gray-100 flex flex-col items-center'>
                  <p className='text-gray-500 font-medium mb-2'>{dayData.day}</p>
                  <div className='w-6 h-6 bg-amber-400 rounded-full mb-2 shadow-xs' />
                  <p className='font-bold text-gray-800'>{dayData.temp}° <span style={{ color: '#70757a', fontWeight: 'normal' }}>28°</span></p>
                </div>
              ))}
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default Weather;

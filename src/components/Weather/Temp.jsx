// api.openweathermap.org/data/2.5/weather?q=pune&appid=33956d88be10290790332d39afddd511
import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';

const Temp = () => {
  const [searchValue, setSearchvalue] = useState("pune");
  const[tempinfo, setTempInfo]=useState({});

  function search(event) {
    const data = event.target.value
    setSearchvalue(data)
  }

  async function weatherInfo() {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=33956d88be10290790332d39afddd511`);

      const data = await res.json();
      console.log(data);

      // obj destructuring
      const { temp, pressure, humidity } = data.main;
     // console.log(temp, humidity, pressure);//get temp press humidity in deg
      const { main } = data.weather[0];
     // console.log(main); //get cond of weather
      const { name } = data;
     // console.log(name); // get city name
      const {speed} = data.wind;
      const{ country ,sunset} =data.sys;

      const myNewWeatherInfo = {
        temp,
        pressure,
        humidity,
        main,
        name,
        speed,
        country,
        sunset
      }

      setTempInfo(myNewWeatherInfo)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherInfo();
  }, []);

  return (<>
    <div className='wrap'>
      <div className='search'>
        <input type="search" placeholder='search...'
          onChange={search}
          value={searchValue}
          autoFocus
          id='search'
          className='searchTerm'
        ></input>
        <button className='searchButton' type='button' onClick={weatherInfo}>Search</button>
      </div>
    </div>
    <WeatherCard tempinfo={tempinfo}/>
  </>
  )
}

export default Temp;
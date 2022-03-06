import React, { useState ,useEffect } from 'react'

const WeatherCard = ({tempinfo}) => {

    const[weatherMood,setWeatherMood]=useState("");

    const {
        temp,
        pressure,
        humidity,
        main,
        name,
        speed,
        country,
        sunset
      } = tempinfo;
        
      useEffect(() => {
        if(main){
            switch (main) {
                case "Clouds" : setWeatherMood("wi-day-cloudy");
                     break;
                case "Mist": setWeatherMood("wi-fog");
                     break;
                case "Clear": setWeatherMood("wi-day-sunny");
                     break;
                case "Smoke": setWeatherMood("wi-night-snow-wind");
                     break;
            
                default: setWeatherMood("wi-day-sunny");
                    break;
            }   
        }
    
      }, [main])
      

      //converting sec into time
      let sec = sunset;
      let date = new Date(sec * 1000);
      let timestr = `${date.getHours()}:${date.getMinutes()}`
    return (<>
        <div className='widget'>
            <div className='weatherIcon'>
                <i className={`wi ${weatherMood}`}></i>
            </div>

            <div className='weatherInfo'>
                <div className='temprature'>
                    <span>{temp}&deg;</span>
                </div>
                <div className='description'>
                    <div className='weatherCond'>{main}</div>
                    <div className='place'>{name} , {country}</div>
                </div>
            </div>
            <div className='date'>{new Date().toDateString()}</div>
            {/* {4 col sec} */}
            <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className={'wi wi-sunset'}></i></p>
                        <p className='extra-info-leftside'> {timestr} PM <br /> sunset </p>
                    </div>

                    <div className='two-sided-section'>
                        <p><i className={'wi wi-humidity'}></i></p>
                        <p className='extra-info-leftside'> {humidity} <br /> humidity </p>
                    </div>

                    <div className='two-sided-section'>
                        <p><i className={'wi wi-rain'}></i></p>
                        <p className='extra-info-leftside'> {pressure} <br /> Pressure </p>
                    </div>

                    <div className='two-sided-section'>
                        <p><i className={'wi wi-strong-wind'}></i></p>
                        <p className='extra-info-leftside'> {speed} <br /> Speed </p>
                    </div>
                </div>

            </div>
        </div>

       
    </>
    )
}

export default WeatherCard;
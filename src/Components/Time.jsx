import React, { useEffect, useState } from "react";
import TodayWeather from "./TodayWeather";
import sun from "../Images/sun.png";
import clouds from "../Images/clouds.jpg";
import clear from "../Images/clear.jpg";
import smoke from "../Images/smoke.jpg";
import rain from "../Images/rain.jpg";
import moon from "../Images/moon.png";
import haze from "../Images/haze.jpg"

const Time = () => {
  // const newDate = new Date();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();
  const [seconds, setSeconds] = useState();
  const [format, setFormat] = useState();
  const [date, setDate] = useState();
  const [day, setDay] = useState();
  const [year, setYear] = useState();
  const [month, setMonth] = useState();

  setTimeout(() => {
    let date = new Date();
    let minute =
      date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
    let hr = date.getHours();
    let hour = hr === 0 ? 12 : hr > 12 ? hr - 12 : hr > 9 ? hr : `0${hr}`;
    let second =
      date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;
    let format = hr > 12 ? " PM" : " AM";
    let day = date.getDay();
    let day1 =
      day === 1
        ? "Monday"
        : day === 2
        ? "Tuesday"
        : day === 3
        ? "Wednesday"
        : day === 4
        ? "Thursday"
        : day === 5
        ? "Friday"
        : day === 6
        ? "Saturday"
        : "Sunday";
    let mon = date.getMonth();
    let month =
      mon === 0
        ? "Januray"
        : mon === 1
        ? "February"
        : mon === 2
        ? "March"
        : mon === 3
        ? "April"
        : mon === 4
        ? "May"
        : mon === 5
        ? "June"
        : mon === 6
        ? "July"
        : mon === 7
        ? "August"
        : mon === 8
        ? "September"
        : mon === 9
        ? "October"
        : mon === 10
        ? "November"
        : "December";
    setMinutes(minute);
    setHours(hour);
    setSeconds(second);
    setFormat(format);
    setDay(day1);
    setDate(date.getDate());
    setYear(date.getFullYear());
    setMonth(month);
  }, 1000);

  const [weatherdata, setWeatherData] = useState("weatherdata");
  const [cityName, setCityName] = useState("");
  const [city, setCity] = useState("Karachi");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [weatherImg, setWeatherImg] = useState("");
  const [dayImg, setDayImg] = useState("");
  const now = new Date().toTimeString();
  const nowHour = now.slice(0, 2);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName ? cityName : "Karachi"}&appid=094d4e13268cafd2cfb1c5355a7285b3`
    )
      .then((response) => response.json())
      .then((result) => {
        setWeatherData(result);
        setWeatherCondition(result.weather[0].main);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [city]);

  useEffect(() => {
    if (weatherCondition == "Smoke") {
      setWeatherImg(smoke);
    }
    if (weatherCondition == "Clear") {
      setWeatherImg(clear);
    }
    if (weatherCondition == "Rain") {
      setWeatherImg(rain);
    }
    if (weatherCondition == "Clouds") {
      setWeatherImg(clouds);
    }
    if (weatherCondition == "Haze") {
      setWeatherImg(haze);
    }
    else {
      console.log("error");
    }
    if (nowHour >= "19" && nowHour <= "6") {
      setDayImg(moon);
      console.log("moon Image");
    } else {
      setDayImg(sun);
      console.log("sun Image");
    }
  }, [weatherCondition]);

  const searchCity = (e) => {
    setCity(cityName);
    // console.log(cityName);
  };
  // console.log(weatherdata);
  console.log(weatherCondition);
  console.log(dayImg);
  return (
    <>
      <div
        className="detailMainBox1"
        style={{ backgroundImage: `url(${weatherImg})` }}
      >
        <div className="timeBox">
          <div className="timeBox1">
            <input
              type="text"
              value={cityName}
              placeholder="Enter Your City Name"
              onChange={(e) => setCityName(e.target.value)}
            />
            <button onClick={searchCity}>Search</button>
          </div>
          <div className="timeBox2">
            <h1>
              {hours}:{minutes}:{seconds}
              <span>{format}</span>
            </h1>
            <span className="dayTime">
              {day}, {date} {month} {year}
            </span>
          </div>
        </div>
        <div className="cityBox">
          <div className="country">
            <h1>{weatherdata.name}</h1>
            <h3>{weatherdata.sys && weatherdata.sys.country}</h3>
          </div>
        </div>
      </div>

      <div className="detailMainBox2">
        <TodayWeather
          celcius={weatherdata.main && weatherdata.main.temp}
          className="todayWeather"
          image={dayImg}
          dayClass="dayMain"
          condition={weatherCondition}
        />
        {/* <TodayWeather
          className="nextDayWeather"
          image={dayImg}
          headClass="headClass"
          dayClass="day"
        />
        <TodayWeather
          className="nextDayWeather"
          image={dayImg}
          headClass="headClass"
          dayClass="day"
        />
        <TodayWeather
          className="nextDayWeather"
          image={dayImg}
          headClass="headClass"
          dayClass="day"
        />
        <TodayWeather
          className="nextDayWeather"
          image={dayImg}
          headClass="headClass"
          dayClass="day"
        />
        <TodayWeather
          className="nextDayWeather"
          image={dayImg}
          headClass="headClass"
          dayClass="day"
        />
        <TodayWeather
          className="nextDayWeather"
          image={dayImg}
          headClass="headClass"
          dayClass="day"
        /> */}
      </div>
    </>
  );
};

export default Time;

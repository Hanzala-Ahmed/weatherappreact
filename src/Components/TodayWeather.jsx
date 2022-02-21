import React from 'react'

const TodayWeather = (props) => {
  let temp = Math.round(props.celcius)
  return (
    <>
      <div className={props.className}>
        <div className="dayAndTemp">
          <div className={props.dayClass}>
            <span>Today</span>
          </div>
            <h1 className={props.headClass}>{temp}<sup style={{fontWeight:"100"}}>o</sup>C</h1>
            <span>{props.condition}</span>
        </div>
        <div className='weatherImg'>
          <img src={props.image} alt="" />
        </div>
      </div>
    </>
  )
}

export default TodayWeather

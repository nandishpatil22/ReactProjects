// npm install axios
import './App.css';
import axios from 'axios'
import { useState } from 'react';


function App() {
  const [data,setData]=useState({});
  const [location,setLocation]=useState("");

const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f19cb3730c35b25abe31398058b85a4d`;

 
// const searchLocation=()=>{
//   axios.get(url).then((response)=>{
//     setData(response.data)
   
//   })
// }
    
//OR

const searchLocation = async (event)=>{
  if(event.key === 'Enter'){ 

    const response = await axios.get(url);
    setData(response.data);
    console.log(response.data);
    setLocation("");
  }
 
};



return (
    <div className="app"> 
    <div className="search">
      <input
      value={location} 
      onChange={e=>setLocation(e.target.value)}
      onKeyPress={searchLocation}
      placeholder='Enter Location'
      type='text'
      />
    </div>
    
      <div className="container">
      
        <div className="top">

          <div className="location">
            <p className='bold'>{data.name}</p>
          </div>
          <div className="temp">
             { data.main? (<h1 className='bold'>{Math.floor(data.main.temp-273.15)}° C</h1> ): null}
           {/* returns undefined if we just grab data.main.temp because we are accessing before it is assigned value */}
          </div>
          <div className="description">
          {data.weather? <p>{data.weather[0].main}</p> : null}
          </div> 

        </div>

      {data.name !== undefined &&
      
      <div className="bottom">
          <div className="feels">
          {data.main? <p  className='bold'>{Math.floor(data.main.feels_like-273.15)} ° C </p>:null}
           <p>Feels like</p>
          </div>
          <div className="humidity">
            {data.main?<p className='bold'>{data.main.humidity}%</p>: null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind? <p className='bold'>{data.wind.speed}MPH</p> : null}
            <p>Winds</p>
          </div>
        </div>

      }
        
      </div>
    </div>
  );
}

export default App;

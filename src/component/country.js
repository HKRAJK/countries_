import axios from "axios";
import { useEffect, useState } from "react";


const Country = ({ country }) => {

    const [weather, setWeather] = useState([])

    useEffect(() => {
        const getData = async ()=>{
        const param = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.capital
        }
           axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${param.query}&appid=${param.access_key}`)
            .then(response => {
                const apiResponse = response.data
     
                setWeather([apiResponse])
            }).catch(error => {
                console.log(error);
            })
        }
         getData();
 
    }, [])

    if (weather.length > 0) {
        const currentWeather = weather[0]
   //     console.log(currentWeather)
        return (
            <div >
                <h1>{country.name.common}, {country.name.official}</h1>


                <li>Capital <h3>{country.capital}</h3></li>
                <li>Area <h3>{country.area}</h3> </li>
                <li>  Languages:<h3>{country.languages.eng}</h3></li>
                <img src={country.flags.png} alt="Country flag"></img>
                <h2>Weather in {country.capital}</h2>
                <p>{Math.round(currentWeather.main.temp - 273.15) + " ℃"}</p>
                <img src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="Weather icon"></img>
                <p>wind: <strong>{currentWeather.wind.speed}</strong> mph<strong>,</strong> direction <strong>{currentWeather.wind.deg}</strong> deg</p>
            </div >)
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <h2>{country.name.official}</h2>
            <li>Capital <h3>{country.capital}</h3></li>
            <li>Area <h3>{country.area}</h3> </li>
            <li>  Languages:{country.languages.eng}</li>
            <li>  Languages:<h3>{country.languages.eng}</h3></li>



        </div>
    )
}

export default Country;

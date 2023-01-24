import { useEffect, useState } from "react";
import axios from 'axios';
import Filter from "./component/filter";
import Content from "./component/content";
const App = () => {

  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setAllCountries(response.data)
      })
  }, [])

  



  const handleFilterEvent = (event) => {
    setNewFilter(event.target.value)
   // console.log(newFilter)
    if (newFilter) {
      const regex = new RegExp(newFilter, 'i');
      // allCountries.forEach(element => {
      //   console.log(element.name.common)
      // });

      //const searchCountries =  allCountries.filter(country => country.name.common.match(regex))
      //console.log(allCountries)
       const searchCountries = () => allCountries.filter(country => country.name.common.match(regex))
      // console.log(searchCountries)
      setCountries(searchCountries)
      // console.log(countries)
    }
  }



  return (
    <div>
      <Filter newFilter={newFilter} handleFilterEvent={handleFilterEvent} />
       <Content countries={countries} setCountries={setCountries} /> 
    </div>
  )
}

export default App;

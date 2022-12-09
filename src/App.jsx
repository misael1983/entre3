
import axios from "axios";
import { useEffect,useState } from "react";
import './App.css'
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import fondo from "./assets/img/nuevo.gif"


function App() {
 // https://rickandmortyapi.com/api/location/3

 const [location, setlocation] = useState()
 const [locationInput,setlocationInput] = useState()
 useEffect(() => {
  let URL
  if (locationInput) {
    URL = `https://rickandmortyapi.com/api/location/${locationInput} `
  } else {
    const randomIdlocation =Math.floor(Math.random() * 126)+1
    URL = `https://rickandmortyapi.com/api/location/${randomIdlocation}` 
}
   
  
  axios.get(URL)
 .then(res=> setlocation(res.data))
 .catch(err=> console.log(err))
}, [locationInput])
 const handleSubmit = e =>{
e.preventDefault()
setlocationInput(e.target.inputSearch.value)
 }
return (
    <div className="App">
     <img className="gif" src={fondo} alt="" />
     <h1>Rick and Marty</h1>
    <form onSubmit={handleSubmit}>
     <input id="inputSearch" type="text"/>
     <button>Search</button>
    </form>
    <LocationInfo location={location} />
   <div className="residents-container">
    {
      location?.residents.map(url=>(
        <ResidentCard key={url} url={url}/>
      ))
      }
   </div>
    </div>
  )
}

export default App

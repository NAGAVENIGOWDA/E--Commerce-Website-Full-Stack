import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  Home from './Pages/Home';
import Header from "./Components/Header"
import { createContext,useEffect,useState} from 'react';
import axios from 'axios';

const MyContext=createContext();

function App() {
  const [countryList,setCountryList]=useState([]);
  const [selectedCountry,setSelectedCountry]=useState('');

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);
  
  useEffect(() => {
    console.log("Updated countryList:", countryList); // Logs when countryList changes
  }, [countryList]);
  

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url);
      setCountryList(response.data.data); // Updates state asynchronously
      
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };
  const values={ countryList,selectedCountry,setSelectedCountry}
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
    <Header/>
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>

    </Routes>
    </MyContext.Provider>
    
    </BrowserRouter>
  );
}

export default App;

export {MyContext};
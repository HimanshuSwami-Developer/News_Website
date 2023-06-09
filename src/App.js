// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/navbar';
import News from './components/news';
import{
BrowserRouter as Router,
Routes,
Route,
} from 'react-router-dom'

const App =()=> {  

  return (
<>
<div>
        <Router>
        <Navbar/>
        <Routes>
         <Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business"/>}/>
         <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>}/>
         <Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general"/>}/>
         <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science"/>}/>
         <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health"/>}/>
         <Route exact path="/technology" element={<News key="technoology" pageSize={5} country="in" category="technology"/>}/>
         <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>}/>
        </Routes>
        </Router>
      </div>    
      </>)
}

export default App
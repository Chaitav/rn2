import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  // pageSize=8;
  const country='in';
  const api= process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState('light'); //Use 'dark' or 'light'
  // setTheme('dark');
  const setProgresss = (progress)=>{
    setProgress(progress)
  }
    return (
      <>
      <Router>
        <Navbar/>
        <LoadingBar height={3} color='red' progress={progress} />
        <Routes>
          <Route exact path='/' element={<News theme={theme} setProgress={setProgresss} key={'general'} country={country} category="general" api={api}/>}/>
          <Route exact path='business' element={<News theme={theme} setProgress={setProgresss} key={'business'} country={country} category="business" api={api}/>}/>
          <Route exact path='entertainment' element={<News theme={theme} setProgress={setProgresss} key={'entertainment'} country={country} category="entertainment" api={api}/>}/>
          <Route exact path='general' element={<News theme={theme} setProgress={setProgresss} key={'general'} country={country} category="general" api={api}/>}/>
          <Route exact path='health' element={<News theme={theme} setProgress={setProgresss} key={'health'} country={country} category="health" api={api}/>}/>
          <Route exact path='science' element={<News theme={theme} setProgress={setProgresss} key={'science'} country={country} category="science" api={api}/>}/>
          <Route exact path='sports' element={<News theme={theme} setProgress={setProgresss} key={'sports'} country={country} category="sports" api={api}/>}/>
          <Route exact path='technology' element={<News theme={theme} setProgress={setProgresss} key={'technology'} country={country} category="technology" api={api}/>}/>
        </Routes>
      </Router>
      </>
    )
}
export default App;
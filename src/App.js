
import { Fragment } from 'react';
import './App.css';
import Portfolio from './components/portfolio/Portfolio';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Services from './components/services/Services';

function App() {
  return (
  <Fragment>
    <Portfolio/>
    <Sidebar/>
    <Home/>
    <Resume/>
    <About/>
    <Services/>
  </Fragment>
  );
}

export default App;

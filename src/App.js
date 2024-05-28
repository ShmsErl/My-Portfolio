
import { Fragment } from 'react';
import './App.css';
import Portfolio from './components/portfolio/Portfolio';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';

function App() {
  return (
  <Fragment>
   
    <Sidebar/>
    <main className='main'> 
    <Home/>
    <About/>
    <Services/>
    <Resume/>
    <Portfolio/>
    <Testimonials/>
    <Blog/>
    <Contact/>
   

    </main>
  </Fragment>
  );
}

export default App;

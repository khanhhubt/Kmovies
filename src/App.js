import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './Assets/fontawesome-free-6.1.1-web/css/all.min.css'
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer'; 
import Routes from './config/Routes';
import * as ReactDOM from 'react-dom';


function App() {
  return (
    ReactDOM.render(
      
        <BrowserRouter >
        <Route  render={ props => (
  
          <>
            <Header {...props}/>
            <Routes/>
            <Footer/>
          </>
          
  
        )}/>
       
      </BrowserRouter>
      ,

      document.getElementById('root')
    )
   
    
  );
}

export default App;

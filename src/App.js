import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Limit_c from './Components/Limit_c/Limit_c';
import Liquid from './Components/Liquid/Liquid';
import Sub_nav from './Components/Sub_nav/Sub'
import Top_fo from './Components/Top_fo/Top_fo';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';



function App() {
   
  return (
    <div className="App">
     
     <Router>
      <Header/>
      <Sub_nav/>      
      <Routes>
        <Route exact path='/' element={<Limit_c/>} />
        <Route exact path='/liq' element={<Liquid/>} />
        <Route exact path='/swap' element={<Limit_c/>} />
      </Routes>
      <Top_fo/>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;


import './App.css';
import Login from './component/Login';
import LandingPage from './component/LandingPage';
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import Register from './component/Register';
import Reset from './component/Reset';




function App() {
  
  

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
          <Route exact path="/" component={Login}/> 
          <Route exact path="/register" component={Register}/>
        
          <Route 
           path="/profile/:name" 
           render= {(props)=> (
             <LandingPage {...props}  />
           )}/>
           
          <Route exact path="/reset" component={Reset}/>
          

          </Switch>
        </Router>
      


      </header>
    </div>
  );
}

export default App;

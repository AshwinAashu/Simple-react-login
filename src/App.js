
import './App.css';
import Login from './component/Login';
import LandingPage from './component/LandingPage';
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
          <Route exact path="/" component={Login}/>
   
        
          <Route 
           path="/profile/:name" 
           render= {(props)=> (
             <LandingPage {...props}  />
           )}/>
           
          

          </Switch>
        </Router>
      


      </header>
    </div>
  );
}

export default App;

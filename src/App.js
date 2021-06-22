
import './App.css';
import Login from './component/Login';
import LandingPage from './component/LandingPage';
import {Route, Switch }  from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Route exact path="/" component={Login}/>
        {/* enter the component here */}
        
        <Route exact path="/profile" component={LandingPage}/>


      </header>
    </div>
  );
}

export default App;

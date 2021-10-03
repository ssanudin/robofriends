import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
  const [robots, setRobots] = useState( [] );
  const [searchfield, setSearchfield] = useState( '' );

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => setRobots( users ) )
      .catch( err => console.log );
  }, []);

  const onSearchChange = (event) => {
    setSearchfield( event.target.value );
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes( searchfield.toLowerCase() );
  });

  return !robots.length ?
    <h1 className="f1">Loading ...</h1>
  :
    (
      <div className="tc">
        <header className="fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <h1 className="f2">RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
        </header>
        {/* <Scroll> */}
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
        {/* </Scroll> */}
      </div>
    );
}

export default App;

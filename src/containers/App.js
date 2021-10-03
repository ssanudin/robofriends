import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { requestRobots, setSearchfield } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchRobots.searchfield,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchfield, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes( searchfield.toLowerCase() );
    });

    return isPending ?
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

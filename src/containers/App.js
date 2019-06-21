import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry';
import {setSearchField, requestRobots} from '../actions';
import './App.css';


//This will receive the state. "STATE"
const mapStateToProps = state => {
    return {
        searchField: state.searchRobot.searchField,
        robots: state.requestRobots.robots,
        isLoading: state.requestRobots.isLoading,
        error: state.requestRobots.error
        //This is calling the initial state in the reducer
    }
}

//This is use to send action. "ACTION"
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequesRobots: () => dispatch(requestRobots())
        //If the initial state is changed, do this
    }
}

class App extends Component {
    //As the component got mounted the robots list will be visible
    componentDidMount(){
        setTimeout(() => {
            this.props.onRequesRobots();
        }, 2500);
    }

    render() {
        const {searchField, onSearchChange, robots, isLoading} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isLoading ? <h1 className='tc'>Please Wait...</h1>: 
        (
                <div className='tc'>
                    <h1 className='tc'>Robo Hash Friends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(App);
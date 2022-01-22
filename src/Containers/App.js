import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import robots from "../robots";
import './App.css';
import Scroll from "../Components/Scroll";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchValue: ''
        }
        console.log('constructor');
    }

    onSearchChange = (event) => {
        this.setState({ searchValue: event.target.value });
        //console.log(event.target.value);
        // console.log(this.state.searchValue);
        // this.setState({robots:robotarray})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({ robots: user }));
        console.log('Before rendering, fetching the API');
    }

    render() {

        console.log('rendering');
        const { robots, searchValue } = this.state;
        if (!robots.length) {
            console.log('Loading');
            return (<h1 className="tc">Loading</h1>);
        }
        else {
            const robotarray = robots.filter(robot => {
                return (robot.name.toLowerCase().includes(searchValue.toLowerCase()));
            })

            return (
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={robotarray} />
                    </Scroll>
                </div>
            );
        }
    }

}
export default App;
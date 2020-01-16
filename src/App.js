import React, { Component } from 'react';
import './App.module.css';
import Background from './components/Background/Background';

class App extends Component {
	state = {
		pictures: []
	};

	componentDidMount() {
		fetch('https://randomuser.me/api/?results=600').then((results) => results.json()).then((data) => {
			let pics = data.results.map((pic) => (
				<div key={pic.login.uuid}>
					<img src={pic.picture.medium} alt="" />
				</div>
			));
			this.setState({ pictures: pics });
			console.log(pics);
		});
	}

	render() {
		return (
			<div>
				<Background>{this.state.pictures}</Background>
			</div>
		);
	}
}

export default App;

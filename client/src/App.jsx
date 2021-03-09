import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Title from './components/Title.jsx';
import MainImage from './components/MainImage.jsx';
import Info from './components/Info.jsx';
import faker from 'faker';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '15',
			mainImage: '',
			imagesList: [],
			title: 'Title Placeholder',
			average: 0,
			ratings: 0,
			pages: 0,
			standards: ['RL 4.4', 'RL 4.5'],
			grades: '4th Grade, 5th Grade',
		};
		this.onHover = this.onHover.bind(this);
	}

	onHover(url) {
		this.setState({
			mainImage: url,
		});
	}

	componentDidMount() {
		// example browse url http://localhost:3003/?products/4
		let id = window.location.href.split('/')[4];
		this.setState({
			id: id,
		});
		$.get(`http://184.72.22.149:3003/items/${id}/images`, (data) => {
			let imageArr = data[0].images.split(',');
			this.setState({
				mainImage: imageArr[0],
				imagesList: imageArr,
			});
		});
		$.get(`http://18.191.145.140:3001/products/${id}/ratings`, (data) => {
			this.setState({
				average: Number(data.average),
				ratings: data.count,
				title: faker.commerce.productName(),
				grades: data.grades.join(', '),
			});
		});
		$.get(`http://3.139.104.53:3002/products/${id}/description-and-standards`, (data) => {
			let standards = [];
			for (var key in data.standards) {
				standards.push(key);
			}
			this.setState({
				pages: data.pageLength,
				standards: standards,
			});
		});
	}

	render() {
		return (
			<div id="images-app">
				<Title title={this.state.title} average={this.state.average} ratings={this.state.ratings} />
				<MainImage image={this.state.mainImage} list={this.state.imagesList} hover={this.onHover} />
				<Info pages={this.state.pages} standards={this.state.standards} grades={this.state.grades} />
			</div>
		);
	}
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Title from './components/Title.jsx';
import MainImage from './components/MainImage.jsx';
import Info from './components/Info.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '15',
      mainImage:'',
      imagesList: [],
      title: 'Title Placeholder',
      average: 0,
      ratings: 0,
      pageLength: 0,
      standards:['RL 4.4', 'RL 4.5'],
      grades: '4th Grade, 5th Grade'
    }
    this.onHover = this.onHover.bind(this);
  }

  onHover(url) {
    this.setState({
      mainImage: url
    });
  }

  componentDidMount() {
    let id = Math.floor(Math.random() * 99 + 1);
    this.setState({
      id: id
    });
    $.get(`http://localhost:3003/${id}/images`, (data) => {
        this.setState({
          mainImage: data[id][0],
          imagesList: data[id]
        });
    });
    $.get(`http://localhost:3001/products/${id}/ratings`, (data) => {
      let gradeList = [];
      data[2].forEach(grade => {
        gradeList.push(grade._id)
      });
      gradeList=gradeList.join(', ');
      this.setState({
        average: data[1][0].average,
        ratings: data[1][0].count,
        title: data[0],
        grades: gradeList
      });
    });
    $.get(`http://localhost:3002/${id}/description-and-standards`, (data) => {
      this.setState({
        pageLength: data[pageLength],
        standards: data[standards]
      });
    });
  }

  render() {
    return (
      <div id="images-app">
        <Title title={this.state.title} average={this.state.average} ratings={this.state.ratings}/>
        <MainImage image={this.state.mainImage} list={this.state.imagesList} hover={this.onHover}/>
        <Info pageLength={this.state.pageLength} standards={this.state.standards} grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;

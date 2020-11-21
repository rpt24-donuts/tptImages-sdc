import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Title from './components/Title.jsx';
import MainImage from './components/MainImage.jsx';
import Info from './components/Info.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '7',
      mainImage:'',
      imagesList: []
    }
    this.onHover = this.onHover(this);
  }

  onHover (e) {
    console.log(e)
  }

  componentDidMount() {
    let id = this.state.id;
    let that = this;
    $.ajax({
      type: "get",
      url: `http://localhost:3003/${id}/images`,
      //data: this.state.id,
      success: function(data) {
        that.setState({
          mainImage: data[id][0],
          imagesList: data[id]
        });
      },
    });
  }

  render() {
    return (
      <div id="main">
        <Title/>
        <MainImage image={this.state.mainImage} list={this.state.imagesList}/>
        <Info/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('tpt'));

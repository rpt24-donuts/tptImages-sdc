import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: ''
    }
    this.search = this.search.bind(this);
    this.onChange = this.onChange(this);
  }

  onChange (e) {
    console.log(e)
    // this.setState({
    //   id: e.target.value
    // });
  }

  search (id) {
    console.log(id)
    console.log(`${id} was entered`);
    let that = this;
    $.ajax({
      type: "get",
      url: `http://localhost:3003/id`,
      data: id,
      success: function() {
        console.log('success')
      },
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World jsx</h1>
        <input onChange={this.onChange}/>
      <button onClick={this.search}> Submit </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('tpt'));


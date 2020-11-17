import React from 'react';

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       term: ''
//     }
//     this.search = this.search.bind(this)
//     this.onChange = this.onChange.bind(this)

//   }

//   onChange (e) {
//     this.setState({
//       term: e.target.value
//     });
//   }

//   search() {
//     this.props.onSearch(this.state.term);
//   }

const Search = (props) => {
  return (
    <div>
      <input/>
      <button> Submit </button>
    </div>
  )
}

export default Search;
import React from 'react';

const Title = (props) => {
  return (
    <div id='header'>
      <div id='digital'>DIGITAL</div>
      <div id='title'>{props.title}</div>
      <div id='ratings'> {props.average} Stars {props.ratings} Ratings</div>
    </div>
  )
}

export default Title;
import React from 'react';

const Title = (props) => {
  return (
    <div id='images-header'>
      <div id='images-digital'>DIGITAL</div>
      <div id='images-title'>{props.title}</div>
      <div id='images-ratings'> {props.average} Stars {props.ratings} Ratings</div>
    </div>
  )
}

export default Title;

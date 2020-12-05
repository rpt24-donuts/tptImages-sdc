import React from 'react';

const Title = (props) => {
  return (
    <div id='images-header'>
      <div id='images-digital'>DIGITAL</div>
      <div id='images-title'>{props.title}</div>
      <div id='images-ratings'> {[1, 2, 3, 4, 5].map((item) => (
        <span className="fa fa-star" style={{color: (props.average >= item) ? '#2885BF' : '#777'}}>

        </span>
      ))} {props.ratings} Ratings</div>
    </div>
  )
}

export default Title;

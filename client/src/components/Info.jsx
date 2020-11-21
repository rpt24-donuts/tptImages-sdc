import React from 'react';

const Info = (props) => {
  return (
    <div id='info'>
      <div class='info-header'>Subject</div>
      <div>Lorem ipsum dolor sit amet</div>
      <div class='info-header'>Grade Levels</div>
      <div>{props.grades}</div>
      <div class='info-header'>Resource Types</div>
      <div>Vivamus dapibus</div>
      <div class='info-header'>Format</div>
      <div>{props.pageLength} pages</div>
      <div class='info-header'>-</div>
      <div class='info-header'>Standards</div>
      <div>{props.standards.map(standard => {
        return <div><span>CCSS</span><span>{standard}</span></div>
      })}</div>
    </div>
  )
}

export default Info;
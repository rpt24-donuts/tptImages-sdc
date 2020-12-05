import React from 'react';

const Info = (props) => {
  return (
    <div id='images-info'>
      <div className='images-info-header'>Subject</div>
      <div>Lorem ipsum dolor sit amet</div>
      <div className='images-info-header'>Grade Levels</div>
      <div>{props.grades}</div>
      <div className='images-info-header'>Resource Types</div>
      <div>Vivamus dapibus</div>
      <div className='images-info-header'>Format</div>
      <div>{props.pageLength} pages</div>
      <hr id='images-break'></hr>
      <div className='images-info-header'>Standards</div>
      <div>{props.standards.map(standard => {
        return <div key={standard}><span>CCSS</span><span> {standard}</span></div>
      })}</div>
    </div>
  )
}

export default Info;

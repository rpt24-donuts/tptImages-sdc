import React from 'react';

const Info = (props) => {
  return (
    <div id='info'>
      <div className='info-header'>Subject</div>
      <div>Lorem ipsum dolor sit amet</div>
      <div className='info-header'>Grade Levels</div>
      <div>{props.grades}</div>
      <div className='info-header'>Resource Types</div>
      <div>Vivamus dapibus</div>
      <div className='info-header'>Format</div>
      <div>{props.pageLength} pages</div>
      <div className='info-header'>-</div>
      <div className='info-header'>Standards</div>
      <div>{props.standards.map(standard => {
        return <div key={standard}><span>CCSS</span><span> {standard}</span></div>
      })}</div>
    </div>
  )
}

export default Info;

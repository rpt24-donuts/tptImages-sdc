import React from 'react';

const ImagesList = (props) => {
  return (
    <div>
      <div className='images-preview-box'>
        <img className='images-preview' src={props.preview} onMouseOver={() => props.hover(props.preview)}></img>
      </div>
    </div>
  )
}

export default ImagesList;

import React from 'react';

const ImagesList = (props) => {
  return (
    <div>
      <div id='preview-box'>
        <img className='preview' src={props.preview} onMouseOver={() => props.hover(props.preview)}></img>
      </div>
    </div>
  )
}

export default ImagesList;

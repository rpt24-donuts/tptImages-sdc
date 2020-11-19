import React from 'react';

const ImagesList = (props) => {
  return (
    <div>
      <div id='preview-box'>
        <img class='preview' src={props.preview}></img>
      </div>
    </div>
  )
}

export default ImagesList;
import React from 'react';
import ImagesList from './ImagesList.jsx';

const MainImage = (props) => {
  return (
    <div id='images'>
      <div id='selected-box'>
        <img id='selected' src={props.image}></img>
      </div>
      <div id='list'>
        {props.list.map((preview) => {
          return <ImagesList preview={preview}/>
        })}
      </div>
    </div>
  )
}

export default MainImage;
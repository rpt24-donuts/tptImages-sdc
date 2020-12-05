import React from 'react';
import ImagesList from './ImagesList.jsx';

const MainImage = (props) => {
  return (
    <div id='images-main'>
      <div id='images-selected-box'>
        <img id='images-selected' src={props.image}></img>
      </div>
      <div id='images-list'>
        {props.list.map((preview) => {
          return <ImagesList preview={preview} key={preview} hover={props.hover}/>
        })}
      </div>
    </div>
  )
}

export default MainImage;

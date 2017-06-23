import React from 'react';
import ReactDOM from 'react-dom';

//It just takes a string a display it
//Could potentially be used for other things
const Title = ({string, size}) => {
  return(
    <div>
      <h3>{string}</h3>
    </div>
  );
}

export default Title;

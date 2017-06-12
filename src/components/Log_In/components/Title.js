import React from 'react';
import ReactDOM from 'react-dom';

//It just takes a string a display it
//Could potentially be used for other things
const Title = ({string}) => {
  return (
    <div>
      <h1>{string}</h1>
    </div>
  );
}

export default Title;

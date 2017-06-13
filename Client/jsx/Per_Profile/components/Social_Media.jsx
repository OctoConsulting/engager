import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const Social_Media = ({list}) => {
  return(
    <div className="row">
        {/*It takes the array object
          then uses map, account is another function
          and it will just return each of the array item*/}
        {list.map((account) => {
          return(
            <div className="col-sm-6">{account}</div>
          );
        })}
    </div>
  );
}

export default Social_Media;

import axios from 'axios';

const SEND_USER = 'SEND_USER';

export function userSubmit(props){
  const request = axios.post('http://localhost:3000/signin', props);

  return {
    type: SEND_USER,
    payload: request
  }
}

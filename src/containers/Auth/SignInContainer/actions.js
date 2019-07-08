import Api from '../../../api';
import { push } from 'react-router-redux';

export function logIn({email, password}) {
  const request = Api.post('/user_token', {"auth": {email, password}});

  return (dispatch) => {
    request.then(
      resp => {
        localStorage.setItem('jwt', resp.data.jwt)
        dispatch(push('/timeline'))
      },
      error => {
        window.Materialize.toast('User or password incorrect', 4000, 'red')
      }
    )
  };
}

export default logIn;
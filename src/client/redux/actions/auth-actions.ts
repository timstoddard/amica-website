import axios from 'axios'
import * as jwt_decode from 'jwt-decode'
import setAuthToken from '../../shared/functions'
import { User } from '../../shared/types'
import { authErrors, setCurrentUser } from './types'

// TODO use proxy instead of this
const apiBaseUrl = 'http://localhost:5000'

export const registerUser = (userData: any, history: any) => (dispatch: any) => {
  return axios
    .post(`${apiBaseUrl}/api/users/register`, userData)
    .then((res: any) => history.push('/login'))
    .catch((err: any) => dispatch(authErrors(err.response.data)))
}

export const loginUser = (userData: any) => (dispatch: any) => {
  axios
    .post(`${apiBaseUrl}/api/users/login`, userData)
    .then((res: any) => {
      const { token } = res.data
      sessionStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token) as User
      dispatch(setCurrentUser(decoded))
    })
    .catch((err: any) => dispatch(authErrors(err.response.data)))
}

export const logoutUser = () => (dispatch: any) => {
  sessionStorage.removeItem('jwtToken')
  setAuthToken()
  dispatch(setCurrentUser())
}

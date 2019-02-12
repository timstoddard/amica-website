import axios, { AxiosError, AxiosResponse } from 'axios'
import { History } from 'history'
import * as jwt_decode from 'jwt-decode'
import { Dispatch } from 'react'
import setAuthToken from '../../shared/functions'
import { LoginFormData, SignUpFormData, User } from '../../shared/types'
import { authErrors, setCurrentUser } from './types'

export const registerUser = (userData: SignUpFormData, history: History) => (dispatch: Dispatch<unknown>) => {
  return axios
    .post('/api/users/register', userData)
    .then((res: AxiosResponse) => history.push('/login'))
    .catch((err: AxiosError) => dispatch(authErrors(err.response.data)))
}

export const loginUser = (userData: LoginFormData) => (dispatch: Dispatch<unknown>) => {
  axios
    .post('/api/users/login', userData)
    .then((res: AxiosResponse) => {
      const { token } = res.data
      sessionStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token) as User
      dispatch(setCurrentUser(decoded))
    })
    .catch((err: AxiosError) => dispatch(authErrors(err.response.data)))
}

export const logoutUser = () => (dispatch: Dispatch<unknown>) => {
  sessionStorage.removeItem('jwtToken')
  setAuthToken()
  dispatch(setCurrentUser())
}
